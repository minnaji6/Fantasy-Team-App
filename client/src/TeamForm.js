import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FetchTeamCards from './FetchTeamCards'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function TeamForm() {
  const [team, setTeam] = React.useState('');

  const handleChange = (event) => {
    setTeam(event.target.value);
  };

  return (
    <>
     <div className="Nav-Buttons">
    <Button  size="large" color="secondary" href="/home" variant="contained">HOME</Button>
    <br/>
    <br/>
    <Button href="/player/new" variant="contained">NEW PLAYER</Button>
    <br/>
    <br/>
    
        
        View Teams
          <div>
        
      </div>
{/* 
      <Button
                onClick={() => {
                  alert('NEW PLAYER ADDED TO TEAM!');
                }}
              >
                Submit
            </Button> */}

        <FetchTeamCards/>
        <br/>
        <br/>
        <div>
          <Box>
          
            
                
          </Box>
      </div>
        </div>
    </>
   
    
  )
}

export default TeamForm