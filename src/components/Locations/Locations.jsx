import LocationCard from "../LocationCard/LocationCard";
import { Grid } from 'semantic-ui-react';

export default function Locations({ getWeather, children, friendLocations }) {

  // i need a list of Location Cards
  const locations = friendLocations.map(location => {
    console.log(`${location.residentName} is in ${location.cityName}.`);
    // return <li>{location.residentName} is in {location.cityName}.</li>
    return <LocationCard location={location} key={location._id}>
      {location.residentName} is in {location.cityName}
    </LocationCard>
  }
  )

  // console.log(locations, "<- locations before return to location card")


  return (
    <>
    {/* <LocationCard></LocationCard> */}
      {/* <ul> */}
      {/* <Grid columns={3}> */}
      {/* <Grid.Row> */}
      {/* {locations} */}
      {/* </Grid.Row> */}
      {/* </Grid> */}

      {/* </ul> */}
      {/* <LocationCard location={location}> */}
      {locations}
      {/* </LocationCard> */}
    </>
  )
}