import React, {useState, useEffect} from 'react';
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { Autocomplete } from "@mui/material";
import { Box } from "@mui/system";
import axios from 'axios';

function PlayerSearch() {
    const [searchResults, setsearchResults] = useState([]);

    useEffect(() => {
        // fetch('http://localhost:3000/players') link with players 
        axios.get("http://localhost:3000/players")
        .then (res => res.json())
        .then ((json) => setsearchResults(json.data))
        // .catch(err => console.log(err));
    }, []);
    console.log(searchResults)
    // console.log("hi")
    return <Stack sx={{width: 300, margin: "auto"}}>
            <Autocomplete
            id="nba_player"
            getOptionLabel={(searchResults) => `${searchResults.name}`}
            options={searchResults}
            sx={{width: 300}}
            isOptionEqualToValue={(option, value) => 
                option.name === value.name
            }
            noOptionsText={"Player Not Added"}
            renderOption={(props, searchResults) => (
                <Box componet="li"{...props} key={searchResults.id}>
                    {searchResults.name} {searchResults.name}
                </Box>
            )}
            renderInput={(params) => <TextField {...params} label="Search for an added Player"/>}
            />
        </Stack>
        
    ;
}
export default PlayerSearch;