import React from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import Header from "../../components/Header/Header"

import userService from '../../utils/userService';


export default function LoginPage({ prop, processSignupOrLogin }) {
  const [loggingPerson, setLoggingPerson] = useState({
    email: '',
    password: ''
  })

  const navigate = useNavigate();

  function handleChange(evt) {
    setLoggingPerson({
      ...loggingPerson,
      [evt.target.name]: evt.target.value
    })
  }

  async function handleSubmit(evt) {
    evt.preventDefault();

    try {
      // see if user's token 1) exists and 2) is valid for this user's name/PW
      await userService.login(loggingPerson);
    } catch (error) {
      console.log(error, "<-login handlesubmit error")
    }
  }


  return (
    <>
      <Header prop={prop} />
      <div>Login Pageeeeee ({prop})</div>
      <form onSubmit={handleSubmit}>
        <label>Email:
          <input
            type="Email"
            onChange={handleChange}
            name='email'
          />
        </label>
        <label>Password:
          <input
            type="password"
            onChange={handleChange}
            name='password'
          />
        </label>
        <button type="submit">Log in!</button>
        {/* {error ? <ErrorMessage error={error} /> : null} */}
      </form>
    </>
  );
}

