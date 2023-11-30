import { useState, useEffect } from 'react';
import tokenService from '../../utils/tokenService';
import { Grid, Button, Card, Segment, Form } from 'semantic-ui-react';
import AddLocation from '../../components/AddLocation/AddLocation';
import HeroCard from '../../components/HeroCard/HeroCard'
import Locations from '../../components/Locations/Locations';
import Topper from '../../components/Topper/Topper';
import { KtoF } from '../../utils/tempConversions'


export default function MainPage({ currentUser, logout }) {

  // console.log(currentUser, "<- currentUser in MainPage");

  const [userLocation, setUserLocation] = useState({});
  const [friendLocations, setFriendLocations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // console.log("hello from useEffect");
    getWeather(currentUser.homeLocation);

    getLocations();
  }, [])

  async function getWeather(city) {
    try {
      setLoading(true);
      const weather = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=e3af410bcb1aefac395c48170e015fca`, {
        method: 'GET',
      });
      const answer = await weather.json();

      // console.log("=====================")
      // console.log(answer, "<-- EVERYTHING")
      // console.log("=====================")

      console.log(answer.weather, "<-- weather")
      console.log(answer.name, "<-- name")
      // console.log(answer.sys.country, "<-- country")
      // console.log(answer.main.temp + " K", "<-- temp in K")
      console.log(KtoF(answer.main.temp).toFixed(0) + "ºF", "<-- temp in F")
      // console.log(answer.weather[0].icon, "<- icon prefix")
      // console.log(answer.dt, "<-- most recent update time in seconds")
      // console.log((Date.now() / 1000).toFixed(0), "<-- now, in MS")
      // console.log((Date.now() / 1000).toFixed(0) - answer.dt)

      setLoading(false);
      setUserLocation(answer);

    } catch (error) {
      console.log(error, "<-- fetch error");
    }
  }

  async function getLocations() {
    try {
      const response = await fetch("/api/locations", {
        method: "GET",
        headers: {
          Authorization: "Bearer " + tokenService.getToken()
        }
      })
      const answer = await response.json();
      console.log(answer, "<- answer, aka server response to 'getLocations' req");
      setFriendLocations(answer.locations);
    } catch (error) {
      console.log(error);
    }
  }

  function sanitizeFirstName(name) {
    return name.slice(0, 1).toUpperCase() + name.slice(1,).toLowerCase();
  }

  if (loading) {
    return (
      <h2>Hang on a sec, {sanitizeFirstName(currentUser.username)}!</h2>
    )
  }

  return (
    <Grid columns={1} style={{width: 800}}>
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
          >
          </Locations>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}