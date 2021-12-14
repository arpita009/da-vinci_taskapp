import axios from "axios"
import Swal from 'sweetalert2'

export const startGetAllTasks =() =>{
    return(
        (dispatch) =>{
            dispatch(loadingUpdate())
            axios.get(`http://localhost:8000/notes`)
                .then((response) =>{
                    // console.log('All Notes', response)
                    const allNotesResp= response.data
                    dispatch(loadingUpdate())
                    dispatch(getAllNotes(allNotesResp))
                }).catch((err) =>{
                    alert(err.message)
                })
        }
    )
}

export const getAllNotes =(allNotesResp) =>{
    return{
        type: 'GET_ALL_NOTES',
        payload: allNotesResp
    }
}
export const loadingUpdate = () => {
    return {
        type: "LOADING_UPDATE"
    }
}
export const startDeleteTask = (id) => {
    return (
        (dispatch) => {
                axios.delete(`http://localhost:8000/notes/${id}`)
                    .then((response) => {
                        // console.log('Delete Task', response)
                        dispatch(deleteTask(id))
                        // Swal.fire({
                        //     icon:'warning',
                        //     title: 'Are you sure you want to delete?',
                        //     showDenyButton: true,
                        //     confirmButtonText: 'Yes',
                        //     denyButtonText: 'No',
                        //   }).then((result) => {
                        //     if (result.isConfirmed) {
                        //         dispatch(deleteTask(id))
                        //         Swal.fire('Client Task Deleted!', '', 'success')
                        //     } else if (result.isDenied) {
                        //       Swal.fire('Your record is safe', '', 'info')
                        //     }
                        //   })
                    })
                    .catch((err) => {
                        alert(err.message)
                    })
            
        }
    )
} 

export const deleteTask = (id) => {
    return {
        type: "DELETE_TASK",
        payload: id
    }
}

export const startAddClientForm =(formData,clearForm,handleClose) =>{
    return(
        (dispatch) =>{
            axios.post(`http://localhost:8000/notes`,formData)
                .then((response) =>{
                    const addClientResp = response.data
                    console.log('addClientResp',addClientResp)
                    Swal.fire({
                        icon : 'success',
                        title: 'Client Task Added',
                        text: 'You have successfully added the Client Task!'
                    })
                    
                    dispatch(addClientTask(addClientResp))
                    clearForm()
                    handleClose()
                })
                .catch((err) =>{
                    alert(err.message)
                })
        }
    )
}
export const addClientTask = (id) => {
    return {
        type: "ADD_CLIENT_TASK",
        payload: id
    }
}