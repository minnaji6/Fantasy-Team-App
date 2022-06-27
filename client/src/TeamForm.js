import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FetchTeamCards from './FetchTeamCards'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import axios from 'axios';
import {useState, useEffect} from 'react';
import Stack from "@mui/material/Stack";
import { Autocomplete } from "@mui/material";
import TextField from '@mui/material/TextField';



function TeamForm() {
  const [team, setTeam] = React.useState('');

  const [selectedPlayer, setSelectedPlayer] = React.useState(['']);

  
    axios.get('http://localhost:3000/players/')
    .then((res) =>  {
      setSelectedPlayer(res.data);
    });
  // console.log(selectedPlayer)

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
      <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-helper-label">Team</InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            value={team}
            label="Team"
            onChange={handleChange}
          >
            <MenuItem value={1}>Fanduel</MenuItem>
            <MenuItem value={2}>Raps 5</MenuItem>
            <MenuItem value={3}>Rookies</MenuItem>
            <MenuItem value={4}>Avengers</MenuItem>
            <MenuItem value={5}>Legacies</MenuItem>
          </Select>
          <FormHelperText>Select Team Name</FormHelperText>
        </FormControl>

        <Stack sx={{width: 300, margin: "auto"}}>
            <Autocomplete
            id="nba_player"
            getOptionLabel={(selectedPlayer) => `${selectedPlayer.name}`}
            options={selectedPlayer}
            sx={{width: 300}}
            isOptionEqualToValue={(option, value) => 
                option.name === value.name
            }
            noOptionsText={"Player Not Added"}
            renderOption={(props, selectedPlayer) => (
                <Box componet="li"{...props} key={selectedPlayer.id}>
                   {selectedPlayer.name}
                </Box>
            )}
            renderInput={(params) => <TextField {...params} label="Search for an added Player"/>}
            />
        </Stack>

      <Button
                onClick={() => {
                  alert('NEW PLAYER ADDED TO TEAM!');
                }}
              >
                Submit
            </Button>

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