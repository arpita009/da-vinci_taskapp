import React from "react";
import CssBaseline from '@mui/material/CssBaseline'
import  {Typography}  from '@mui/material'
import TasksContainer from './components/TasksContainer';

const App = (props) =>{
  return(
    <div>
      <CssBaseline />
      <Typography 
        variant="h2"
        color="primary"  
        gutterBottom
      >
        <strong>DaVinci Corps</strong>
      </Typography>
      <TasksContainer/>
    </div>
  )
}

export default App;
