import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import Topper from "../../components/Topper/Topper";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage"
import { Grid, Segment, Form, Input, Button } from 'semantic-ui-react';


import userService from '../../utils/userService';

export default function SignupPage({ processSignupOrLogin}) {

  const [newUser, setNewUser] = useState({
    username: '',
    email: '',
    homeLocation: '',
    password: '',
    passwordAgain: '',
  });

  const [error, setError] = useState('');

  const navigate = useNavigate();

  // handlers
  function handleChange(evt) {
    setNewUser({
      ...newUser,
      [evt.target.name]: evt.target.value
    })
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    // console.log("submitted!");

    try {
      // no formData object needed (no file to upload)
      await userService.signup(newUser);
      processSignupOrLogin();
      navigate('/');
    } catch (error) {
      console.log(error.message, "<- caught error"); // <- the error message comes from the throw statement in utils/signup functions
      // setError('Try signing up again')
    }
  }

  return (
    <>
      <Topper/>
      <Form style={{ maxWidth: 600 }} 
          size='large'
          onSubmit={handleSubmit}>
          <Form.Field inline align='right' required>
            <label htmlFor="username">Username</label>
            <Input
              id="username"
              name='username'
              onChange={handleChange}
              placeholder="username"
              type="text"
            />
          </Form.Field>
          <Form.Field inline align='right' required>
            <label htmlFor="email">Email</label>
            <Input
              id="email"
              name='email'
              onChange={handleChange}
              placeholder="email"
              type="email"
            />
          </Form.Field>
          <Form.Field inline align='right' required>
            <label htmlFor="location">Primary City</label>
            <Input
              id="location"
              name='homeLocation'
              onChange={handleChange}
              placeholder="location"
              type="text"
            />
          </Form.Field>
          <Form.Field inline align='right' required>
            <label htmlFor="pw">Password</label>
            <Input
              id="pw"
              name='password'
              onChange={handleChange}
              placeholder="password"
              type="password"
            />
          </Form.Field>
          <Form.Field inline align='right' required>
            <label htmlFor="pw">Confirm your password</label>
            <Input
              id="pwAgain"
              name='passwordAgain'
              onChange={handleChange}
              placeholder="confirm your password"
              type="password"
            />
          </Form.Field>
          <Button type='submit' align='center' color='teal' size='medium'>Sign up</Button>
        {/* {error ? <ErrorMessage error={error} /> : null} */}
        </Form>
        <p style={{paddingBlockStart:"1em"}}>Already done this? <Link to="/login">Log in</Link> instead!</p>
    </>
  );
}