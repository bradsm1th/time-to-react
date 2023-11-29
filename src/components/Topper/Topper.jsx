import { Header, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function Topper({ currentUser, logout }) {

  // console.log(logout);
  // console.log(currentUser, "<- currentUser in 'Topper'")

  return (
    // <Segment>
    <>
      <Header as='h1'>Weather (or not)</Header>
      {/* only show 'logout' for pages with logged in users */}
      {currentUser &&
        <Header as='p'>
          <Link to="/" onClick={logout}>
            Logout
          </Link>
        </Header>
      }
    </>
    // </Segment>
  )
}