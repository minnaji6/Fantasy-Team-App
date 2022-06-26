import React, {useState, useEffect} from 'react';
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { Autocomplete } from "@mui/material";
import { Box } from "@mui/system";

function TeamSearch() {
    const [searchResults, setsearchResults] = useState([]);

    useEffect(() => {
        // fetch('http://localhost:3000/teams') link with players 
        fetch("https://www.balldontlie.io/api/v1/teams")
        .then (res => res.json())
        .then ((json) => setsearchResults(json.data))
        // .catch(err => console.log(err));
    }, []);
    // console.log(searchResults)
    // console.log("hi")
    return <Stack sx={{width: 300, margin: "auto"}}>
            <Autocomplete
            id="nba_player"
            getOptionLabel={(searchResults) => `${searchResults.full_name}`}
            options={searchResults}
            sx={{width: 300}}
            isOptionEqualToValue={(option, value) => 
                option.full_name === value.full_name
            }
            noOptionsText={"Player Not Added"}
            renderOption={(props, searchResults) => (
                <Box componet="li"{...props} key={searchResults.id}>
                    {searchResults.full_name}
                </Box>
            )}
            renderInput={(params) => <TextField {...params} label="Search for an added Team Name"/>}
            />
        </Stack>
        
    ;
}
export default TeamSearch;