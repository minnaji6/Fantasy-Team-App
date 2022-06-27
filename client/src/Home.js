import * as React from 'react';
import Container from '@mui/material/Container';
import FetchCards from './FetchCards';
import NavButtons from './NavButtons';

function Home() {
  return (
    
    <header className="App-header">
    <NavButtons />
    <br></br>
    <div className="View-Teams">
      <br></br>
    <Container>
      VIEW ALL PLAYERS 
    <FetchCards />
    
    </Container>
    </div>
    
    </header>
  )
}

export default Home