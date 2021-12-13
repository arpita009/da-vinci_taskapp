import React,{useState} from "react";
import { Box } from "@mui/system";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FaDotCircle } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import LinearProgress from '@mui/material/LinearProgress';
import Owner from "./Owner";
import Duration from "./Duration";
import ShowDetails from "./ShowDetails";
import ModalWindow from "./ModalWindow";



const TaskCardItem =(props) =>{
    const {id,status,title,trackDate,statusPercent,owner,duration,indicatorIcon, details} = props
    const [anchorEl, setAnchorEl] = useState(null);
    const [dotModal, setDotModal] = useState(false)
    const indicator = (
        <Box
          component="span"
          sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
          <FaDotCircle color={indicatorIcon.color} size={indicatorIcon.size}/>
          
        </Box>
    )
    const handleDotClick =() =>{
        setDotModal(true)
    }
    const handleModalClose = () => {
        setDotModal(false);
    };
    const threeDots=(
        <Box
          component="span"
          sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
        >
          <BsThreeDots size={30} onClick={handleDotClick}  />
          {dotModal && <ModalWindow dotModal={dotModal} handleModalClose={handleModalClose} id={id} />}
        </Box>
    )
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
      };
    
    const open = Boolean(anchorEl);
    const idDetails = open ? 'simple-popover' : undefined;
    return(
        <Box sx={{ minWidth: 450 }}>
            <Card variant="outlined">
                <CardContent>
                    <Box sx={{ml:55}}>{threeDots}</Box>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {indicator} {status} 
                    </Typography>
                    <Typography variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography sx={{ mb: 1.5, ml:3 }} color="text.secondary">
                        {trackDate}
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2}}>
                        {statusPercent}% {status}
                        <br /><br />
                        <LinearProgress variant="determinate" value={statusPercent} />
                    </Typography>
                    <Box display='flex'>
                        <Box>
                            <Owner owner={owner} />
                        </Box>
                        <Box sx={{ml:20}}>
                            <Duration duration={duration} />
                        </Box>
                    </Box>
                </CardContent>
                <CardActions>
                    <Button size="small" variant='contained' sx={{mb:2}} onClick={handleClick}>
                        Show Details
                    </Button>
                    {open && <ShowDetails id={idDetails} open={open} anchorEl={anchorEl} handleClose={handleClose} details={details} />}
                </CardActions>
            </Card>
            <br/>
        </Box>
    )
}
export default TaskCardItem