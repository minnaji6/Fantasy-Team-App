import React from 'react'
import {Button} from '@mui/material'


function PlayerForm() {
  return (
    <>
    <div className="Nav-Buttons">
    <Button  size="large" color="secondary" href="/home" variant="contained">HOME</Button>
    <br/>
    <br/>
    <Button  size="large" href="/team/new" variant="contained">NEW TEAM</Button>
    </div>
    <br></br>
    <div className="PlayerForm-container">
        
        TeamForm
        </div>
    </>
   
    
  )
}

export default PlayerForm;