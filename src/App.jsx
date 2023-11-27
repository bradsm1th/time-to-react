import { useState, useEffect } from 'react';
import { Route, Routes } from "react-router-dom";
import "./App.css";

import userService from "./utils/userService"

import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from './pages/SignupPage/SignupPage'
import MainPage from './pages/MainPage/MainPage'

// convert Kelvin to Fahrenheit
// …https://www.wikihow.com/Convert-Kelvin-to-Fahrenheit-or-Celsius
function KtoF(tempInK) {
  return 1.8 * (tempInK - 273) + 32;
}


export default function App() {
  // grab valid user's token from local storage, and do it *here* so other components can receive that info
  const [user, setUser] = useState(userService.getUser());

  const testProp = "I'm a prop!";
  const testCity = 'Toronto, Canada'


  useEffect(() => {
    // console.log('USE EFFECT IS RUNNING')
    async function testFetchCall() {
      try {
        // console.log("hello from the try");
        // const testCall = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=e3af410bcb1aefac395c48170e015fca`, {
        //   method: 'GET'
        // });
        const testCall = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${testCity}&APPID=e3af410bcb1aefac395c48170e015fca`, {
          method: 'GET'
        });
        const answer = await testCall.json();

        // console.log(testCall, "<-- testCall")
        console.log(answer, "<-- answer; should be an object")
        console.log(answer.weather, "<-- .weather")
        console.log(answer.name, "<-- .name")
        console.log(answer.main.temp + " K", "<-- .temp in K")
        console.log(KtoF(answer.main.temp).toFixed(0) + "ºF", "<-- .temp in F")


      } catch (error) {
        // console.log(error, "<-- fetch error");
      }
    }

    testFetchCall();

  }, [])

  function processSignupOrLogin() {
    setUser(userService.getUser());
  }

  return (
    <Routes>
      <Route 
        path="/" 
        element={<MainPage prop={testProp}/>} />
      {/* <Route path="/" element={<h1 >Home Pageeeeeeeeeee ({testProp})</h1>} /> */}
      <Route 
        path="/login" 
        element={<LoginPage 
          prop={testProp} 
          processSignupOrLogin={processSignupOrLogin}/>} />
      <Route 
        path="/signup" 
        element={<SignupPage 
          prop={testProp} 
          processSignupOrLogin={processSignupOrLogin}/>} />
    </Routes>
  );
}