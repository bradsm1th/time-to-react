import { Header, Divider, Grid } from 'semantic-ui-react';
import tokenService from '../../utils/tokenService';

export default function LocationCard({ location }) {

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

      

    } catch (error) {
      console.log(error);
    }

  }

  return (
    <>
      {/* <p>I'm a location card</p> */}
      {/* <Grid columns={2}> */}
      {/* <Grid.Row> */}
      <Divider horizontal>
        <Header as='h2'>{location.residentName}</Header>
        {/* <p style={{color: 'crimson'}}>Delete this person</p> */}
      </Divider>
      <p>(One of {location.addedBy.username}'s people.)</p>
      <form
        onSubmit={handleDelete}
        id={location._id}
      >
        <button
          style={{ backgroundColor: 'orangered', color: 'white', marginBlockEnd: '2em' }}>TEST DELETE</button>
      </form>
      {/* </Grid.Row> */}
      {/* // </Grid> */}
    </>
  )
}