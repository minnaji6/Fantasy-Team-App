import React, { useState, useEffect} from 'react'
import axios from 'axios'
import { Grid, Card, CardMedia, CardContent, Typography, CardActions, Button }  from "@mui/material";


const FetchCards = () => {
    const [cards, setCards] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3000/teams/')
        .then(res => setCards(res.data))
        .catch(err => console.log(err))
    }, [])
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
                            <Typography variant="body2" color="textSecondary" component="p">
                                Team:{card.team} 
                            </Typography>
                        </CardContent>
                        <CardActions>
                            {/* <Button onClick={() =>Update.} size="small">Edit</Button>
                            <Button size="small">Delete</Button> */}
                         </CardActions>
                    </Card>
                </Grid>
            ))}
        </Grid>
    )
}
export default FetchCards;
