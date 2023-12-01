import { useState, useEffect } from 'react';
import tokenService from '../../utils/tokenService';
import { Grid, Segment } from 'semantic-ui-react';
import AddLocation from '../../components/AddLocation/AddLocation';
import HeroCard from '../../components/HeroCard/HeroCard'
import Locations from '../../components/Locations/Locations';
import Topper from '../../components/Topper/Topper';

export default function MainPage({ currentUser, logout }) {

  const [userLocation, setUserLocation] = useState({});
  const [friendLocations, setFriendLocations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // loads current user's weather on first render
    getLoggedInUserWeather();
    // loads current user's buddies (and their weather) on first render
    getLocations();
  }, [])

  // fetches weather for current user and sets it in state
  async function getLoggedInUserWeather() {
    let userWeather = await getWeather(currentUser.homeLocation)
    setUserLocation(userWeather);
  }

  // fetches weather for the given city. returns an object.
  async function getWeather(city) {
    try {
      setLoading(true);
      const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=e3af410bcb1aefac395c48170e015fca`, {
        method: 'GET',
      });
      const answer = await weather.json();

      setLoading(false);
      return answer;

    } catch (error) {
      console.log(error, "<-- fetch error");
    }
  }

  // gets locations a user has added
  async function getLocations() {
    try {
      const response = await fetch("/api/locations", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + tokenService.getToken()
        }
      })
      // this is all the Mongo documents that the logged-in user has added. 
      // [ {}, {}, ... ]
      const allAddedFriends = await response.json();

      // fetches weather for each city in the array of friends
      const friendsWeathersForAPI = allAddedFriends.locations.map(location =>
        getWeather(location.cityName)
      )

      // returns results of API call, one for each location 
      const friendsWeathers = await Promise.all(friendsWeathersForAPI)

      // replaces "friends" state with same but adding results of API call to .weather property
      setFriendLocations(() => allAddedFriends.locations.map((user, idx) => {
        user.weather = friendsWeathers[idx];

        // what i need to render on the Location Card: temp, description, icon
        console.log(`It's ${user.weather.main.temp} and ${user.weather.weather[0].description} (${user.weather.weather[0].icon}, if i want it)`)

        return user;
      }

      ));
    } catch (error) {
      console.log(error);
    }
  }

  // just makes sure 'bRAD' and 'brad' always shows as 'Brad'
  function sanitizeFirstName(name) {
    return name.slice(0, 1).toUpperCase() + name.slice(1,).toLowerCase();
  }

  if (loading) {
    return (
      <h2>Hang on a sec, {sanitizeFirstName(currentUser.username)}!</h2>
    )
  }

  return (
    <Grid columns={1} style={{ maxWidth: 1200 }}>
      <Grid.Row>
        <Grid.Column>
          <Topper
            currentUser={currentUser}
            logout={logout}
          />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <HeroCard
          currentUser={currentUser}
          sanitizeFirstName={sanitizeFirstName}
          userLocation={userLocation}
          setLoading={setLoading}
          loading={loading}
        />
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Segment>
            <AddLocation
              friendLocations={friendLocations}
              setFriendLocations={setFriendLocations}
              currentUser={currentUser}
              getLocations={getLocations}
            />
          </Segment>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Locations
            getWeather={getWeather}
            friendLocations={friendLocations}
            getLocations={getLocations}
            sanitizeFirstName={sanitizeFirstName}
          >
          </Locations>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}