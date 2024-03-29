import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button }  from "@mui/material";


const FetchCards = () => {
    const [cards, setCards] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/players/')
        .then(res => setCards(res.data))
        
    }, [])

     const Delete = (id) => {
           setCards(prevCards=> {
            return prevCards.filter(card=> card.id != id)
           })

           axios.delete('http://localhost:3000/players/' + id)
           .then(res => setCards(res.data))
    } 

    

    return (
        <Grid container spacing={3}>
            {cards.map(card => (
                <Grid item xs={12} sm={6} md={3} key={card.id}>
                    <Card>
                        <CardMedia style = {{ height: 3, paddingTop: '56%'}}
                            image={card.image}
                            title={card.name}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {card.name}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {card.ppg} points per game
                            </Typography>
                            <Typography variant="subtitle1" color="textSecondary" component="p">
                            Team: {card.teams.map((sub, index) => 
                                <Button variant="contained" size="small" color="secondary" key={index}>{sub.name}</Button>
                                )}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small" onClick={()=> Delete(card.id)}> Delete</Button>
                            <Button size="small" href='http://localhost:4000/player/new' > Edit</Button>
                         </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    )
}
export default FetchCards;
