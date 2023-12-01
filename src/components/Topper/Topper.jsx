import { Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default function Topper({ currentUser, logout }) {

  return (
    <>
        <Header
          as='h1'
        >Weather (or not)</Header>
        {/* only show 'logout' for pages with logged in users */}
        {currentUser &&
          <Header as='p'>
            <Link to="/" onClick={logout}>
              Logout
            </Link>
          </Header>
        }
        <hr style={{marginBlockEnd: '2em'}}/>
    </>
  )
}