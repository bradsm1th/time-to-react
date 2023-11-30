import LocationCard from "../LocationCard/LocationCard";
import { Card } from 'semantic-ui-react';

export default function Locations({ getWeather, children, friendLocations, getLocations, sanitizeFirstName }) {

  // i need a list of Location Cards
  const locations = friendLocations.map(location => {
    console.log(`${location.residentName} is in ${location.cityName}.`);
    // return <li>{location.residentName} is in {location.cityName}.</li>
    return (
      <LocationCard
        location={location}
        key={location._id}
        getLocations={getLocations}
        sanitizeFirstName={sanitizeFirstName}
      >
      </LocationCard>
    )
  }
  )

  return (
    <>
      <Card.Group itemsPerRow={3}>
          {locations}
      </Card.Group>
    </>
  )
}