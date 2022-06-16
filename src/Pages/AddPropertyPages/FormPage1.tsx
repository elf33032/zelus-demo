import React from "react";
import {useForm} from "react-hook-form";
import type {IData} from "../AddNewProperty";
import {createTheme, ThemeProvider, Button, TextField, Grid, Box, Typography, Autocomplete,} from "@mui/material";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const schema = yup.object({
    propertyName: yup.string().min(2).max(32).required(),
    street:yup.string().min(2).max(32).matches(/^[a-zA-Z0-9\s,.'-]*/).required(),
    apt:yup.string().max(10).matches(/^\d*$/).notRequired(),
    city:yup.string().min(2).max(32).matches(/^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/).required(),
    state:yup.string().required(),
    zip:yup.string().min(5).max(5).matches(/^\d+$/).required(),
    firstName:yup.string().min(2).max(100).matches(/^[a-zA-Z\s,.'-]*/).required(),
    lastName:yup.string().min(2).max(100).matches(/^[a-zA-Z\s,.'-]*/).required(),
}).required();

interface FromPage1Props{
    onNext:Function,
    default: IData,
}
const theme = createTheme({
    palette: {
        primary: {
            main: '#1976d2',
        },
    },
});

const FormPage1: React.FC <FromPage1Props>=props =>{
    //console.log(props.default)
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });

    const submitHandler = (data:Partial<IData>) =>{
        props.onNext(data);
    }

    return (
        <Box id="page-1">
            <Grid container spacing={1}>
                <Grid item xs={3}>
                    <Typography align="right">Property Name:</Typography>
                </Grid>
                <Grid item xs={9}>
                    <TextField id="property-name"
                               label="Property Name"
                               variant="outlined"
                               size="small"
                               fullWidth
                               {...register('propertyName')}
                               error={Boolean(errors.propertyName)}
                               helperText={errors.propertyName ? 'Enter property name of length 2-32':""}
                    />
                </Grid>
                <Grid item xs={3}>
                    <Typography align="right">Address:</Typography>
                </Grid>
                <Grid item xs={6}>
                    <TextField id="street"
                               label="Street"
                               variant="outlined"
                               size="small"
                               fullWidth
                               {...register('street')}
                               error={Boolean(errors.street)}
                               helperText={errors.street ? 'Enter valid street address':""}
                    />
                </Grid>
                <Grid item xs={3}>
                    <TextField id="apt-number"
                               label="Apt Number"
                               variant="outlined"
                               size="small"
                               fullWidth
                               {...register('apt')}
                               error={errors.apt ? true : false}
                               helperText={errors.apt ? 'Enter apt number below length 10':""}
                    />
                </Grid>
                <Grid item xs={3}>
                    <Typography> </Typography>
                </Grid>
                <Grid item xs={3}>
                    <TextField id="city"
                               label="City"
                               variant="outlined"
                               size="small"
                               fullWidth
                               {...register('city')}
                               error={errors.city ? true : false}
                               helperText={errors.city ? 'Enter valid city name':""}
                    />
                </Grid>
                <Grid item xs={3}>
                    <Autocomplete
                        id="state"
                        disablePortal
                        options={stateList}
                        renderInput={(params) =>
                            <TextField {...params}
                                       label="State"
                                       variant="outlined"
                                       size="small"
                                       fullWidth
                                       {...register('state')}
                                       error={errors.state ? true : false}
                                       helperText={errors.state? 'Enter valid state name':""}
                            />}
                    />

                </Grid>
                <Grid item xs={3}>
                    <TextField id="zip"
                               label="ZIP"
                               variant="outlined"
                               size="small"
                               fullWidth
                               {...register('zip')}
                               error={errors.zip ? true : false}
                               helperText={errors.zip ? 'Enter 5 digit zipcode':""}
                    />
                </Grid>
                <Grid item xs={3}>
                    <Typography align="right">First Name:</Typography>
                </Grid>
                <Grid item xs={9}>
                    <TextField id="first-name"
                               label="First Name"
                               variant="outlined"
                               size="small"
                               fullWidth
                               {...register('firstName')}
                               error={errors.firstName ? true : false}
                               helperText={errors.firstName ? 'Enter valid first name':""}
                    />
                </Grid>
                <Grid item xs={3}>
                    <Typography align="right">Last Name:</Typography>
                </Grid>
                <Grid item xs={9}>
                    <TextField id="last-name"
                               label="Last Name"
                               variant="outlined"
                               size="small"
                               fullWidth
                               {...register('lastName')}
                               error={errors.lastName ? true : false}
                               helperText={errors.lastName ? 'Enter valid last name':""}
                    />
                </Grid>
            </Grid>
            <Box sx={{mt:10,textAlign:"center"}}>
                <Button id="submit" variant="contained" onClick={handleSubmit(submitHandler)}>Next</Button>
            </Box>
        </Box>
    );
}

const stateList = [
    {label:"CA",}
]
export default FormPage1;