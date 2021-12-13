import React from "react";
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { Box } from "@mui/system";
// import { deepOrange, deepPurple } from '@mui/material/colors';

const Owner =(props) =>{
    const {owner} = props
    const nameAcronym=() =>{
        const arr= owner.split(' ')
        const result=arr.map((name) =>{
            return name[0]
        })
        return result
    }
    return(
        <>
            <Typography variant="body2">
                Owner
            </Typography>
            <Box display='flex' sx={{mt:1}}>
                <Box>{!owner ? <Avatar/> : <Avatar sx={{bgcolor: '#62b7f0'}}>{nameAcronym()}</Avatar>}</Box>
                <Box sx={{mt:1}}>{!owner ? <Typography variant="body2" sx={{ml:1}}>Set owner</Typography> : <Typography variant="body2" sx={{ml:1}}>{owner}</Typography>}</Box>
            </Box>
        </>
    )
}
export default Owner