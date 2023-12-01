import { useState } from 'react';
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import userService from "./utils/userService"
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from './pages/SignupPage/SignupPage'
import MainPage from './pages/MainPage/MainPage'

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
        <Route
          path="*"
          element={<Navigate to='/login' />}
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
          logout={logout}
        />}
      />
      <Route
        path="/login"
        element={<LoginPage
          processSignupOrLogin={processSignupOrLogin}
           />} />
      <Route
        path="/signup"
        element={<SignupPage
          processSignupOrLogin={processSignupOrLogin}
          />} />
    </Routes>
  );
}