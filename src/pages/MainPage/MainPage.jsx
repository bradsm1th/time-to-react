import { useState, useEffect } from 'react';
import { KtoF } from '../../utils/tempConversions'
import tokenService from '../../utils/tokenService';


export default function MainPage({ prop, currentUser }) {
  const [locations, setLocations] = useState([])

  useEffect(() => {
    testFetchCall();
  }, [])

  async function testFetchCall() {
    try {
      const testCall = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currentUser.homeLocation}&APPID=e3af410bcb1aefac395c48170e015fca`, {
        method: 'GET',
        // headers: {
        //   Authorization: "Bearer " + tokenService.getToken()
        // }
      });
      const answer = await testCall.json();

      // console.log(testCall, "<-- testCall")
      console.log("=====================")
      console.log(answer, "<-- EVERYTHING")
      console.log("=====================")
      console.log(answer.weather, "<-- weather")
      console.log(answer.name, "<-- name")
      console.log(answer.sys.country, "<-- country")
      console.log(answer.main.temp + " K", "<-- temp in K")
      console.log(KtoF(answer.main.temp).toFixed(0) + "ºF", "<-- temp in F")
      // console.log(answer.dt, "<-- most recent update time in seconds")
      // console.log((Date.now() / 1000).toFixed(0), "<-- now, in MS")
      // console.log((Date.now() / 1000).toFixed(0) - answer.dt)


    } catch (error) {
      // console.log(error, "<-- fetch error");
    }
  }

  function sanitizeFirstName(name) {
    return name.slice(0,1).toUpperCase() + name.slice(1,).toLowerCase();
  }

  return (
    <>
      <h2>This will be a logged-in user's homepage</h2>
      <pre>{prop}</pre>
      <h3>Hello, {sanitizeFirstName(currentUser.username)}!</h3>

      <p>Let's see what the weather is in {currentUser.homeLocation}:</p>
    </>
  )
}