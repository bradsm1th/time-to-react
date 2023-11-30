import LocationCard from "../LocationCard/LocationCard";

export default function Locations({ getWeather, children }) {
  return (
    <>
      <LocationCard>
        {children}
      </LocationCard>
    </>
  )
}