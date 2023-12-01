import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { Form, Input, Button } from 'semantic-ui-react';
import tokenService from '../../utils/tokenService';

export default function AddLocation({ friendLocations, setFriendLocations, getLocations }) {
  const [nextLocation, setNextLocation] = useState({
    cityName: '',
    residentName: '',
  });

  const navigate = useNavigate();

  function handleChange(evt) {
    setNextLocation({
      ...nextLocation,
      [evt.target.name]: evt.target.value
    })
  }

  async function addLocation(locationOffForm) {

    try {
      const response = await fetch('/api/locations', {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json'
          ,
          'Authorization': "Bearer " + tokenService.getToken()
        }),
        body: JSON.stringify(locationOffForm)
      });
      const answer = await response.json();
      console.log(answer, "<- answer from addLocation to server");
      // setFriendLocations([...friendLocations, answer])

    }
    catch (error) {
      console.log(error);
    }
  }


  function handleSubmit(evt) {
    evt.preventDefault();

    try {
      // console.log("hit handleSubmit try")
      addLocation(nextLocation);
      console.log(nextLocation, "<- should be next location to add")
      getLocations();

      // update state to 'empty' for next location
      setNextLocation({
        cityName: '',
        residentName: ''
      })
      navigate('/');

    } catch (error) {
      console.log(error.message, "<- addlocation error *caught*");
    }
  }

  return (
    <>
      <h3>Add a friend's location so you can check their weather, too...</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Field required align='left'  style={{width: '50%', marginInline: 'auto'}}>
          <label>Name of friend</label>
          <Input
            name='residentName'
            value={nextLocation.residentName}
            onChange={handleChange}
            type='text'
            required
          />
        </Form.Field>
        <Form.Field required align='left' style={{width:'50%', margin: '0 auto'}}>
          <label>City, State (City, Province)</label>
          <Input
            name='cityName'
            value={nextLocation.cityName}
            onChange={handleChange}
            type='text'
            required
          />
        </Form.Field>
        <Button type='submit' style={{marginBlockStart: '1em'}}>Track 'em!</Button>
      </Form>
    </>
  )
}