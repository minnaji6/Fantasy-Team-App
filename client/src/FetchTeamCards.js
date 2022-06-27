import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { Grid, Card, CardContent, Typography, Button }  from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const FetchTeamCards = () => {
    

    const [cards, setCards] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/teams/')
        .then(res => setCards(res.data))
        
    }, [])

    return (
        <Grid container spacing={3}>
            {cards.map(card => (
                <Grid item xs={12} sm={6} md={3} key={card.id}>
                    <Card>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {card.name}
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary" component="p">
                            Team: {card.players.map((sub, index) => 
                                <Button variant="contained" size="small" color="secondary" key={index}>{sub.name}</Button>
                                )}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    )
}
export default FetchTeamCards;
