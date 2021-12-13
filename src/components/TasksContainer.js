import React,{useEffect,useState} from "react";
import  {Typography,CircularProgress, Button}  from '@mui/material'
import { useDispatch, useSelector } from "react-redux";
import { startGetAllTasks } from "../actions/taskActions";
import TaskCardItem from "./TaskCardItem";
import { Box } from "@mui/system";
import AddClientTask from "./AddClientTask";
import { FaDotCircle } from "react-icons/fa";

const TasksContainer =(props) =>{
    const [openForm, setOpenForm] = useState(false)
    const dispatch= useDispatch()
    const allTasksInfo= useSelector((state)=>{
        return state.task.data
    })
    console.log('allTasksInfo', allTasksInfo)
    const isLoading=useSelector(state => state.task.isLoading)

    useEffect(()=>{
        dispatch(startGetAllTasks())
    },[])
    
    const todoTasks= allTasksInfo.filter((task)=>task.status==='Todo')
    const inProgressTasks= allTasksInfo.filter((task)=>task.status==='In Progress')
    const completedTasks= allTasksInfo.filter((task)=>task.status==='Completed')

    const indicatorIcon=[
        {
            'status': 'Todo',
            'color': '#6893d9',
            'size' :30
        },
        {
            'status': 'In Progress',
            'color': '#e6dd7c',
            'size' :30
        },{
            'status': 'Completed',
            'color': '#8ebf86',
            'size' :30
        }
    ]
    const requiredIndicatorIcon=(text) =>{
        return indicatorIcon.find((icon)=>icon.status===text)
    }
    const handleOpenForm =() =>{
        setOpenForm(true)
    }
    const handleClose = () => setOpenForm(false);
    return(
        <Box>
            <Box display='flex'>
                <Typography sx={{ml:10}}
                    variant="h4"
                    color="secondary"  
                    gutterBottom
                >
                    Client Progress
                </Typography>
                <Button variant='contained' sx={{ml:240}} onClick={handleOpenForm}>Add a new Client</Button>
                {openForm && <AddClientTask openForm={openForm} handleClose={handleClose} />}
            </Box>
            {isLoading ? (
                <Box sx={{ml: "50%", mt: 25}}>
                    <CircularProgress/>
                </Box>
            ):(
                <Box  sx={{m:12, display: 'flex', justifyContent: 'space-between', minWidth: 500}} >
                    <Box>
                        <Typography sx={{ml:10}}
                            variant="h4"
                            color="secondary"  
                            gutterBottom
                         >
                            <FaDotCircle color='#6893d9' size={35}/> Todo -{todoTasks.length >0 && todoTasks.length}
                        </Typography>
                        {todoTasks.length >0 && todoTasks.map((task) =>{
                            if(task.status==='Todo'){
                                return   <TaskCardItem key={task.id} {...task} indicatorIcon ={requiredIndicatorIcon(task.status)} />
                            }
                        })}
                    </Box>
                    <Box>
                        <Typography sx={{ml:10}}
                            variant="h4"
                            color="secondary"  
                            gutterBottom
                         >
                            <FaDotCircle color='#e6dd7c' size={30} /> In Progress -{inProgressTasks.length >0 && inProgressTasks.length}
                          </Typography>
                        {inProgressTasks.length >0 && inProgressTasks.map((task) =>{
                            if(task.status==='In Progress'){
                                return   <TaskCardItem key={task.id} {...task} indicatorIcon ={requiredIndicatorIcon(task.status)} />
                            }
                        })}
                    </Box>
                    <Box>
                        <Typography sx={{ml:10}}
                                variant="h4"
                                color="secondary"  
                                gutterBottom
                         >
                            <FaDotCircle color='#8ebf86'size={30} /> Completed -{completedTasks.length >0 && completedTasks.length}
                         </Typography>
                        {completedTasks.length >0 && completedTasks.map((task) =>{
                            if(task.status==='Completed'){
                                return   <TaskCardItem key={task.id} {...task} indicatorIcon ={requiredIndicatorIcon(task.status)} />
                            }
                        })}
                    </Box>
                </Box>
            )}

        </Box>
    )
}
export default TasksContainer