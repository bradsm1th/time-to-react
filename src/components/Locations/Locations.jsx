import LocationCard from "../LocationCard/LocationCard";
import { Card } from 'semantic-ui-react';

export default function Locations({ friendLocations, getLocations, sanitizeFirstName }) {

  // turns each location object into a LocationCard component
  const locations = friendLocations.map(location => {
    return (
      <LocationCard
        location={location}
        key={location._id}
        getLocations={getLocations}
        sanitizeFirstName={sanitizeFirstName}
        friendLocations={friendLocations}
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