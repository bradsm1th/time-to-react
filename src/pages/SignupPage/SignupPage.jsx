import { useState } from 'react';
import Header from "../../components/Header/Header";
// import ErrorMessage from "../../components/ErrorMessage/ErrorMessage"

import userService from '../../utils/userService';

export default function SignupPage(props) {
  // console.log(props, "<- props from App.jsx")

  const [newUser, setNewUser] = useState({
    username: '',
    email: '',
    password: '',
    passwordAgain: '',
  });

  const [error, setError] = useState('');

  // handlers
  function handleChange(evt) {
    setNewUser({
      ...newUser,
      [evt.target.name]: evt.target.value
    })
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    console.log("submitted!");

    try {
      // no formData object needed (no file to upload)
      await userService.signup(newUser);
    } catch (error) {
      console.log(error.message, "<- caught error"); // <- the error message comes from the throw statement in utils/signup functions
      // setError('Try signing up again')
    }
  }

  return (
    <>
      <Header prop={props.prop}/>
      <div>Signup Pageeeeee ({props.prop})</div>
      <form onSubmit={handleSubmit}>
        <label>Username:
          <input
            type="text"
            value={newUser.username}
            onChange={handleChange}
            name='username'
          />
        </label>
        <label>Email:
          <input
            type="Email"
            value={newUser.email}
            onChange={handleChange}
            name='email'
          />
        </label>
        <label>Password:
          <input
            type="password"
            value={newUser.password}
            onChange={handleChange}
            name='password'
          />
        </label>
        <label>Password Again:
          <input
            type="password"
            value={newUser.passwordAgain}
            onChange={handleChange}
            name='passwordAgain'
          />
        </label>
        <button type="submit">Sign up!</button>
      </form>
    </>
  );
}

