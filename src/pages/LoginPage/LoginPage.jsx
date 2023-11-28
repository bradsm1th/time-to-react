import React from 'react';
import './LoginPage.css';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import Topper from "../../components/Header/Header";

import { Grid, Segment, Form, Input, Button } from 'semantic-ui-react';

import userService from '../../utils/userService';


export default function LoginPage({ prop, processSignupOrLogin }) {
  const [loggingPerson, setLoggingPerson] = useState({
    email: '',
    password: ''
  })
  const [error, setError] = useState('');

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

      navigate('/');
      processSignupOrLogin(); // update state to reflect this user
    } catch (error) {
      console.log(error, "<-login handlesubmit error")
    }
  }


  return (
    <>
      <Topper/>
      {/* <Segment style={{ maxWidth: 600 }} > */}
        <Form style={{ maxWidth: 600 }} 
          size='large'
          onSubmit={handleSubmit}>
          <Form.Field inline align='right' required>
            <label htmlFor="email">Email</label>
            <Input
              id="email"
              name='email'
              onChange={handleChange}
              placeholder="Email address"
              type="email"
            />
          </Form.Field>
          <Form.Field inline align='right' required>
            <label htmlFor="pw">Password</label>
            <Input
              id="pw"
              name='password'
              onChange={handleChange}
              placeholder="Password"
              type="password"
            />
          </Form.Field>
          <Button type='submit' align='center' color='orange' inverted size='medium'>Log in</Button>
        {/* {error ? <ErrorMessage error={error} /> : null} */}
        </Form>
      {/* </Segment > */}
    </>
  );
}

