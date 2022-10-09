import * as React from 'react';
import Home from './Home';
import PlayerForm from './PlayerForm';
import Login from './Login';
import TeamForm from './TeamForm';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
        <Routes>
          <Route path="/login" element={<Login />} ></Route>
          <Route path="/player/new" element={<PlayerForm />} ></Route>
          <Route path="/team/new" element={<TeamForm />} ></Route>
          <Route path="/home" element={<Home />}></Route>
      </Routes>
     
    </div>
  );
}


export default App;
