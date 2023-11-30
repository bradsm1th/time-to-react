import { Header, Divider, Card } from 'semantic-ui-react';
import tokenService from '../../utils/tokenService';

export default function LocationCard({ location, getLocations, sanitizeFirstName }) {

  console.log(location, "<- location prop in LocationCard")

  async function handleDelete(evt) {
    // console.log(evt.target, "<- just clicked");
    evt.preventDefault();
    console.log(`I need to delete the Location Doc in Mongo with _id: ${evt.target.id} …`)

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
      <Card>
        <Card.Content>
          <Divider horizontal>
            <Card.Header>{location.residentName}</Card.Header>
            {/* <p style={{color: 'crimson'}}>Delete this person</p> */}
          </Divider>
          <Card.Meta>
            {/* {location.residentName} is  */}
            One of {sanitizeFirstName(location.addedBy.username)}'s people
          </Card.Meta>
          <Card.Description>
            <strong>{location.cityName}</strong>
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
}