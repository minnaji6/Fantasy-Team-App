import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

// import {useLocation, useHistory} from 'react-router-dom'
import { useState } from "react";

// constructor (player) {
//   id: string;
//   name: string
//   ppg:  string
//   image: string
// }


function PlayerForm() {
 
   
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
          defaultValue=""
        />
        <TextField
          required
          id="outlined-required"
          label="ppg"
          defaultValue=""
        />
        <TextField
          required
          id="outlined-required"
          label="image"
          defaultValue=""
        />
        <Box>
          <Button
              onClick={() => {
                alert('NEW PLAYER ADDED!');
              }}
            >
              Submit
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
        </div>
        
    </>
   
    
  )
}

export default PlayerForm;