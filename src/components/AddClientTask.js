import React from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddForm from "./AddForm";

const style = {
    position: 'absolute',
    top: '50%',
    left: '70%',
    transform: 'translate(-50%, -50%)',
    width: 900,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const AddClientTask =(props) =>{
    const {openForm,handleClose} = props
    
    return(
        <Modal
        open={openForm}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h4" gutterBottom>
            Add Client Details
          </Typography>
          <AddForm handleClose={handleClose} />
          
          
        </Box>
      </Modal>
    )
}
export default AddClientTask