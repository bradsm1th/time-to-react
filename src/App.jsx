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


  function processSignupOrLogin() {
    setUser(userService.getUser());
  }


  function logout() {
    userService.logout();
    setUser(null);
  }

  // redirect if not currently logged in
  if (user === null) {
    return (
      <Routes>
        <Route
          path="/login" 
          element={<LoginPage processSignupOrLogin={processSignupOrLogin} />}
        />
        <Route
          path="/signup" 
          element={<SignupPage processSignupOrLogin={processSignupOrLogin} />}
        />
      </Routes>
    )
  }


  return (
    <Routes>
      <Route
        path="/"
        element={<MainPage
          currentUser={user}
        />}
      />
      <Route
        path="/login"
        element={<LoginPage
          processSignupOrLogin={processSignupOrLogin} />} />
      <Route
        path="/signup"
        element={<SignupPage
          processSignupOrLogin={processSignupOrLogin} />} />
    </Routes>
  );
}