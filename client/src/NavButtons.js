import React from 'react'
import { Button } from '@mui/material'
import { Box } from '@mui/material'

function NavButtons() {
  return (
    <div className="Nav-Buttons">
    <Button  size="large" color="secondary" href="/home" variant="contained">HOME</Button>
        <Box
                m={1} //margin
                display="flex"
                justifyContent="flex-start"
                alignItems="flex-start">
                <Button className='Logout-btn' size="small" variant='contained' color='secondary' href="/login" >Logout</Button>
        </Box>
    <Button href="/player/new" variant="contained">NEW PLAYER</Button>
    <br/>
    <br/>
    <Button  href="/team/new" variant="contained">TEAMS</Button>
    
    </div>
    
  )
}

export default NavButtons