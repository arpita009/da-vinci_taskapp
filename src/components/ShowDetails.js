import React from "react";
import Popover from '@mui/material/Popover';
import { Typography } from "@mui/material";

const ShowDetails =(props) =>{
    const {idDetails, open, anchorEl, handleClose, details} = props
    return(
        <Popover
            id={idDetails}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
        >
        <Typography sx={{ p: 2 }}>{details}</Typography>
      </Popover>
    )
}
export default ShowDetails