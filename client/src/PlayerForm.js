import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import { useState } from "react";
import Stack from "@mui/material/Stack";
import { Autocomplete } from "@mui/material";
import axios from 'axios';


function PlayerForm() {

  const [formState, setFormState] = useState({});
  const [playerId, setPlayerID]= useState('');
 

  const [selectedPlayer, setSelectedPlayer] = React.useState(['']);

     axios.get('http://localhost:3000/players/')
      .then((res) =>  {
      setSelectedPlayer(res.data);
    });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((formState) => ({ ...formState, [name]: value }));
  };

  // console.log((selectedPlayer.length)+1)


  
  const num = ((selectedPlayer.length)+1)
   
  
  // const editlayer = (playerId) => {
  //   fetch(`http://localhost:3000/players/${player.id}`),{
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accepts': 'application/json'
  //     },
  //     body: JSON.stringify(formState)
  //   }
  // }
  const addPlayer = () => {
    fetch(`http://localhost:3000/players/${num}`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accepts': 'application/json'
      },
      body: JSON.stringify(formState)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)});}


  const editPlayer = () => {
  fetch(`http://localhost:3000/players/${playerId}`,{
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Accepts': 'application/json'
    },
    body: JSON.stringify(formState)
  })
  .then(res => res.json())
  .then(data => {
    console.log(data)});}
  


  const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: '#f5f5f9',
      color: 'rgba(0, 0, 0, 0.87)',
      maxWidth: 220,
      fontSize: theme.typography.pxToRem(12),
      border: '1px solid #dadde9',
    },
  }));
  
  return (
    <>


    <div className="Nav-Buttons">
    <Button  size="large" color="secondary" href="/home" variant="contained">HOME</Button>
    <br/>
    <br/>
    <Button  size="large" href="/team/new" variant="contained">TEAMS</Button>
    </div>
    <br></br>
    <div className="PlayerForm-container">
        
        Add New Player
        <br/>
        

        <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Name"
          name="name"
          onChange={handleChange}
          value={formState.name}
        />
        <TextField
          required
          id="outlined-required"
          name="ppg"
          label="ppg"
          onChange={handleChange}
          value={formState.ppg}
        />
        <TextField
          required
          id="outlined-required"
          label="image"
          name="image"
          onChange={handleChange}
          value={formState.image}
        />
        
      {/* <pre>{JSON.stringify(formState, null, 2)}</pre> */}
      
        <Box>
          <Button
              onClick={() => {
                addPlayer(num);
                alert('NEW PLAYER ADDED!');
              }}
            >
              Submit NEW PLAYER
          </Button>
              
        </Box>
      </div>
    </Box>
    <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit">Reference for ppg & img</Typography>
            <em>{"And here's"}</em> <b>{'an'} {'amazing resource'} </b> {"for player info"}
          </React.Fragment>
        }
      >
        <Button href="https://www.basketball-reference.com/search/search.fcgi?hint=gary%20trent%20jr.&search=gary%20trent%20jr" >REFERENCE LINK FOR PLAYER INFO</Button>
      </HtmlTooltip>

      <br/>
      <br/>
      <br/>
      <Stack sx={{width: 300, margin: "auto"}}>
            {/* <Autocomplete
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
            renderInput={(params) => <TextField {...params} label="Search for an added Player TO EDIT"/>}
            /> */}
            <select value={playerId} onChange={(e)=> setPlayerID(e.target.value)}>
                  {selectedPlayer.map(player=>(
                    <option value={player.id}key={player.id}>{player.name}</option>
                  ))}
                </select>
                <Button
                onClick={() => {
                  editPlayer(playerId);
                  alert('PLAYER EDITTED');
                }}
              >
                EDIT 
            </Button>
            
        </Stack>
        </div>
        
    </>
   
    
  )
}

export default PlayerForm;