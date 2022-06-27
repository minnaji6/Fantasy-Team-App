import * as React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import FetchCards from './FetchCards';
import PlayerForm from './PlayerForm';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="Nav-Buttons">
      <Button  size="large" color="secondary" href="/home" variant="contained">HOME</Button>
      <br/>
      <br/>
      <Button href="/player/new" variant="contained">NEW PLAYER</Button>
      <br/>
      <br/>
      <Button  size="large" href="/team/new" variant="contained">NEW TEAM</Button>
      </div>
      <br></br>
      <div className="View-Teams">
        <br></br>
      <Container>
        VIEW ALL PLAYERS 
      <FetchCards />
      {/* <Routes>
      <PlayerForm />
      </Routes> */}
      </Container>
      </div>
      </header>
      
    </div>
  );
}


export default App;
