import React from "react"
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Button } from "@mui/material";
import { FaRegEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { startDeleteTask } from "../actions/taskActions";

const style = {
    position: 'absolute',
    top: '40%',
    left: '10%',
    // transform: 'translate(-30%, -50%)',
    width: 10,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

const ModalWindow =(props) =>{
    const dispatch= useDispatch()
    const {dotModal,handleModalClose,id} = props
    const handleClick =() =>{
        handleModalClose()
    }
    const handleDelete =() =>{
        dispatch(startDeleteTask(id))
    }
    return(
        <Modal
        open={dotModal}
        onClose={handleModalClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
            <Box sx={{display: 'flex', justifyContent: 'space-evenly'}}>
                <FaRegEdit size={30} />
                <AiFillDelete size={30} onClick={handleDelete} />
            </Box>
            <Button sx={{ml:15, mt:3}} variant='contained' onClick={handleClick}>OK</Button>
        </Box>
      </Modal>
    )
}
export default ModalWindow