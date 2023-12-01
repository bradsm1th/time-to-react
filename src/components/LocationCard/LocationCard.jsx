import { Divider, Card } from 'semantic-ui-react';
import tokenService from '../../utils/tokenService';
import { KtoF } from '../../utils/tempConversions'

export default function LocationCard({ location, friendLocations, getLocations }) {

  async function handleDelete(evt) {
    evt.preventDefault();

    try {
      const response = await fetch(`/api/locations/${evt.target.id}`, {
        method: "DELETE",
        headers: {
          Authorization: "Bearer " + tokenService.getToken()
        }
      })
      console.log(response, "<- response from DELETE req");

      // update state
      getLocations();

    } catch (error) {
      console.log(error);
    }
  }

  return (
    friendLocations.map(friend =>
      <Card>
        <Card.Content>
            <Card.Header>{friend.residentName}</Card.Header>
          <Divider horizontal>
            <Card.Header as='h1'>
              {KtoF(friend.weather.main.temp).toFixed(0) + "º F"} 
              
              {/* if you want to show the icon  */}
              {/* <img src={`https://openweathermap.org/img/wn/${friend.weather.weather[0].icon}@2x.png`} alt={friend.weather.weather[0].description} /> */}
              
            </Card.Header>
          </Divider>
          <Card.Meta>
          {friend.cityName}
          </Card.Meta>
          <Card.Description>
           {friend.weather.weather[0].description.slice(0,1).toUpperCase() + friend.weather.weather[0].description.slice(1,)}
          </Card.Description>
          <Card.Description>
            <form
              onSubmit={handleDelete}
              id={location._id}
            >
              <button
                style={{ backgroundColor: 'orangered', color: 'white', marginBlockStart: '1em' }}>Delete</button>
            </form>
          </Card.Description>
        </Card.Content>
      </Card>
    )
  )
}