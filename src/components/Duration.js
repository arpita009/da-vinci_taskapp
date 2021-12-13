import React from "react";
import Typography from '@mui/material/Typography';
import { Box } from "@mui/system";
import { BsCalendar2Week } from "react-icons/bs";
// import { deepOrange, deepPurple } from '@mui/material/colors';

const Duration =(props) =>{
    const {duration} = props
    return(
        <>
            <Typography variant="body2">
                Duration
            </Typography>
            <Box display='flex' sx={{mt:1}}>
                <Box><BsCalendar2Week size={33}/></Box>
                <Box sx={{mt:1}}>{duration ? <Typography variant="body2" sx={{ml:1}}>{duration}</Typography> : <Typography variant="body2" sx={{ml:1}}>Set date range</Typography>}</Box>
            </Box>
        </>
    )
}
export default Duration