import React,{useState} from "react";
import { MenuItem, Typography,Button } from "@mui/material";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import FormControl from "@mui/material/FormControl";
import { Box } from "@mui/system";
import TextField from '@mui/material/TextField'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import { useFormik, Field } from "formik";
import * as yup from "yup";
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { dateFormatting } from "../HelperFunctions/dateFormatting";
import { useDispatch } from "react-redux";
import { startAddClientForm } from "../actions/taskActions";


const validationSchema=yup.object({
    title: yup.string().required('Title mandatory!'),
    statusPercent: yup.number().required('Percent mandatory!'),
    owner: yup.string().required('Owner mandatory!'),
})

const AddForm =(props) =>{
    const dispatch= useDispatch()
    // const [trackDate,setTrackDate] = useState(new Date())
    const name = 'selectedOption'
    const {handleClose} = props
    const formik= useFormik({
        initialValues: {
            title: "",
            trackDate: new Date(),
            status: "Todo",
            statusPercent: 0,
            owner: "",
            duration: "",
            id: Number(new Date()),
            details: "",
            startDate: new Date(),
            endDate: new Date(),

        },
        onSubmit: (values) =>{
            // const trackDateCheck=values.trackDate
            // console.log('statusPercent AddForm',typeof Number(values.statusPercent))
            const startFormatDate=dateFormatting(values.startDate)
            const endFormatDate=dateFormatting(values.endDate)
            const todayFormatDate= dateFormatting(new Date())
            const durationFormatDate= todayFormatDate===startFormatDate && todayFormatDate===endFormatDate ? '' :`${startFormatDate} - ${endFormatDate}`
            const addClientForm={
                title: values.title,
                trackDate: dateFormatting(values.trackDate),
                status: values.status,
                statusPercent: values.statusPercent,
                owner: values.owner,
                duration: durationFormatDate,
                id: Number(new Date()),
                details: values.details
            }
            // console.log('addClientForm',addClientForm)
            dispatch(startAddClientForm(addClientForm,formik.handleReset,handleClose))
            
        },
        
        // validateOnChange : false,
        validationSchema: validationSchema
    })
   
    const status=['Todo','In Progress']
 
    return(
        <FormControl
            component="form"
            onSubmit ={formik.handleSubmit}
            onReset={formik.handleReset}
            sx={{
                "& .MuiTextField-root": { ml: "15px", width: "80ch", padding: "10px" },
            }}
            noValidate
            autoComplete="off"
        >

            <TextField required 
                name='title' 
                onChange={formik.handleChange}
                type='text' 
                value={formik.values.title} 
                label='Client Title' 
                error={formik.touched.title && Boolean(formik.errors.title)}
                helperText={formik.touched.title && formik.errors.title}
                onBlur={formik.handleBlur}
            />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker name='trackDate'
                type='date'
                    label="Track Date"
                    inputFormat="MM/dd/yyyy"
                    value={formik.values.trackDate}
                    onChange={(value)=>formik.setValues({...formik.values,trackDate:value})}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
            <Box variant="div" >
                <TextField name='status'
                    select
                    id='status'
                    label='Status'
                    value= {formik.values.status}
                    onChange={selectedOption => {
                        formik.handleChange("status")(selectedOption);
                    }}
                >
                    {status.map((category) =>{
                        return <MenuItem key={category} value={category}>{category}</MenuItem>
                    })}
                </TextField>
            </Box>
            <TextField required 
                name='statusPercent' 
                onChange={formik.handleChange}
                type='number' 
                value={formik.values.statusPercent} 
                label='Status Percent' 
                error={formik.touched.statusPercent && Boolean(formik.errors.statusPercent)}
                helperText={formik.touched.statusPercent && formik.errors.statusPercent}
                onBlur={formik.handleBlur}
            />
            <TextField required 
                name='owner' 
                onChange={formik.handleChange}
                type='text' 
                value={formik.values.owner} 
                label='Owner' 
                error={formik.touched.owner && Boolean(formik.errors.owner)}
                helperText={formik.touched.owner && formik.errors.owner}
                onBlur={formik.handleBlur}
            />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                    label="Start Date"
                    inputFormat="MM/dd/yyyy"
                    value={formik.values.startDate}
                    onChange={(value)=>formik.setValues({...formik.values,startDate:value})}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider> 
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                    label="End Date"
                    inputFormat="MM/dd/yyyy"
                    value={formik.values.endDate}
                    onChange={(value)=>formik.setValues({...formik.values,endDate:value})}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider> 
            <Box sx={{ml:3}}>
                
                <TextareaAutosize 
                    name='details'
                    label="Details"
                    aria-label="empty textarea"
                    placeholder="Add details about Client or task"
                    style={{ width: 700,height:50 }}
                    value={formik.values.details}
                    onChange={formik.handleChange}
                />
            </Box> 
            <Box>
            
                <Button variant='contained' sx={{mt:3, ml:15}} onClick={handleClose}>Cancel</Button>
                <Button variant='contained' sx={{mt:3, ml:15}} type='submit' >Submit</Button>
                <Button variant='contained' sx={{mt:3, ml:15}} type='reset' >Reset</Button>
            </Box>      
            
        </FormControl>
    )
}
export default AddForm