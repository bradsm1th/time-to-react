import { Divider, Card } from 'semantic-ui-react';
import tokenService from '../../utils/tokenService';
import { KtoF } from '../../utils/tempConversions'

export default function LocationCards({ friendLocations, getLocations }) {

  async function handleDelete(evt) {
    evt.preventDefault();
    console.log("delete clicked", evt.target.id)
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

  const theCards = friendLocations.map(friend => {
    console.log(`${friend} <- one friend. Also, friendLocations is ${friendLocations.length} long`)
    return <Card key={friend._id}>
      <Card.Content>
        <Divider horizontal>
          <Card.Header>{friend.residentName}</Card.Header>
        </Divider>
        <Card.Header>
          <p style={{ fontSize: "2em" }}>{KtoF(friend.weather.main.temp).toFixed(0) + "º F"}</p>

          {/* if you want to show the icon  */}
          <img src={`https://openweathermap.org/img/wn/${friend.weather.weather[0].icon}@2x.png`} alt={friend.weather.weather[0].description} />

        </Card.Header>
        <Card.Meta>
          {friend.cityName}
        </Card.Meta>
        <Card.Description style={{ fontSize: "1.2em" }}>
          {friend.weather.weather[0].description.slice(0, 1).toUpperCase() + friend.weather.weather[0].description.slice(1,)}
        </Card.Description>
        <Card.Description>
          <form
            onSubmit={handleDelete}
            id={friend._id}
          >
            <button
              style={{ backgroundColor: 'orangered', color: 'white', marginBlockStart: '1em' }}>Delete</button>
          </form>
        </Card.Description>
      </Card.Content>
    </Card>
    // )
  })

  return (
    <Card.Group itemsPerRow={3}>
      {theCards}
    </Card.Group>
  )
}