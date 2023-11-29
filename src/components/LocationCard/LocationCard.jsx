import {Header} from 'semantic-ui-react';


export default function LocationCard({children}) {
  return (
    <>
    <Header as='h2'>I'm one of several friend locations
    </Header>
    {children}
    </>
  )
}