import LocationCard from "../LocationCard/LocationCard";

export default function Locations({getWeather, children}) {
  return (
    <>
    <LocationCard>
      <p>I'm a child directly added in "Locations"!</p>
    </LocationCard>
    <LocationCard>
      {children}
    </LocationCard>
    </>
  )
}