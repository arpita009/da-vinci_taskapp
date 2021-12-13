import React,{useState} from "react";
import { MenuItem, Typography } from "@mui/material";
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

const validationSchema=yup.object({
    title: yup.string().required('Title mandatory!'),
    statusPercent: yup.number().required('Percent mandatory!'),
    owner: yup.string().required('Owner mandatory!'),
})

const AddForm =(props) =>{
    const formik= useFormik({
        initialValues: {
            title: "",
            trackDate: new Date(),
            status: "Todo",
            statusPercent: 0,
            owner: "",
            duration: "",
            id: Number(new Date()),
            details: ""
        },
        onSubmit: (values) =>{
            const addClientForm={
                title: values.name,
                trackDate: values.trackDate,
                status: values.status,
                statusPercent: values.statusPercent,
                owner: values.owner,
                // duration: "",
                id: Number(new Date()),
                details: values.details
            }
        },
        validationSchema: validationSchema
    })

    const status=['Todo','In Progress']
 
    return(
        <FormControl
            component="form"
            onSubmit ={formik.handleSubmit}
            sx={{
                "& .MuiTextField-root": { ml: "15px", width: "80ch", padding: "10px" },
            }}
            noValidate
            autoComplete="off"
        >

            <TextField required name='title'
                type='text' value={formik.values.title} label='Client Title' 
            />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker name='trackDate'
                    label="Track Date"
                    inputFormat="MM/dd/yyyy"
                    value={formik.values.trackDate}
                    // onChange={handleChange}
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
                        formik.handleChange("statusCategory")(selectedOption);
                    }}
                >
                    {status.map((category) =>{
                        return <MenuItem key={category} value={category}>{category}</MenuItem>
                    })}
                </TextField>
            </Box>
            <TextField required name='statusPercent'
                type='text' value={formik.values.statusPercent} label='Status Percent' 
            />
            <TextField required name='statusPercent'
                type='text' value={formik.values.owner} label='Owner' 
            />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                    label="Start Date"
                    inputFormat="MM/dd/yyyy"
                    value={formik.values.startDate}
                    // onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider> 
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DesktopDatePicker
                    label="End Date"
                    inputFormat="MM/dd/yyyy"
                    value={formik.values.EndDate}
                    // onChange={handleChange}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider> 
            <Box sx={{ml:3}}>
                
                <TextareaAutosize name='details'
                    label="Details"
                    aria-label="empty textarea"
                    placeholder="Add details about Client or task"
                    style={{ width: 700,height:50 }}
                    value={formik.values.details}
                />
            </Box>       
            
        </FormControl>
    )
}
export default AddForm