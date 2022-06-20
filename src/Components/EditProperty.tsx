import React from "react";
import {useEffect, useState, useRef} from "react";
import {useForm} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {schema, stateList} from "../Pages/AddPropertyPages/FormPage1";
import {
    Box,
    Dialog,
    DialogTitle,
    DialogActions,
    DialogContent,
    TextField,
    Grid,
    Typography,
    Autocomplete,
    Button
} from "@mui/material";
import axios from "axios";
import {IProperty} from "../Pages/ManageProperty";

interface IEditPropertyProps{
    id:number;
    editDialog:boolean;
    setEditDialog:Function;
}
const EditProperty: React.FC<IEditPropertyProps> = props=>{
    const { register, handleSubmit, formState:{ errors } } = useForm({
        resolver: yupResolver(schema)
    });
    const closeHandler = () => {
        props.setEditDialog(false);
    }
    const initialState = {
        id:NaN,
        attributes:{
            PropertyName:"",
            Address:{
                Street: "",
                Apt: "",
                City: "",
                State: "",
                ZIP: "",
            },
            FirstName:"",
            LastName:""
        }
    };
    const[defaultProperty, setDefaultProperty] = useState<IProperty>(initialState);
    useEffect(()=>{
        axios
            .get('http://localhost:1337/api/properties/' + props.id.toString() + '?populate=*')
            .then(function (response) {
                console.log(response.data.data)
                setDefaultProperty(response.data.data);
            });
    }, [props.id]);

    return(
        <Dialog open={props.editDialog} onClose={closeHandler}>
            <DialogTitle>Edit Property</DialogTitle>
            <DialogContent>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <TextField id="property-name"
                                   label="Property Name"
                                   variant="standard"
                                   size="small"
                                   fullWidth
                                   value={defaultProperty.attributes.PropertyName}
                                   {...register('propertyName')}
                                   error={Boolean(errors.propertyName)}
                                   helperText={errors.propertyName ? 'Enter property name of length 2-32':""}
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <TextField id="street"
                                   label="Street"
                                   variant="standard"
                                   size="small"
                                   fullWidth
                                   value={defaultProperty.attributes.Address.Street}
                                   {...register('street')}
                                   error={Boolean(errors.street)}
                                   helperText={errors.street ? 'Enter valid street address':""}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField id="apt-number"
                                   label="Apt Number"
                                   variant="standard"
                                   size="small"
                                   fullWidth
                                   value={defaultProperty.attributes.Address.Apt}
                                   {...register('apt')}
                                   error={errors.apt ? true : false}
                                   helperText={errors.apt ? 'Enter apt number below length 10':""}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField id="city"
                                   label="City"
                                   variant="standard"
                                   size="small"
                                   fullWidth
                                   value={defaultProperty.attributes.Address.City}
                                   {...register('city')}
                                   error={errors.city ? true : false}
                                   helperText={errors.city ? 'Enter valid city name':""}
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <Autocomplete
                            id="state"
                            disablePortal
                            options={stateList}
                            renderInput={(params) =>
                                <TextField {...params}
                                           label="State"
                                           variant="standard"
                                           size="small"
                                           fullWidth
                                           value={defaultProperty.attributes.Address.State}
                                           {...register('state')}
                                           error={errors.state ? true : false}
                                           helperText={errors.state? 'Enter valid state name':""}
                                />}
                        />

                    </Grid>
                    <Grid item xs={4}>
                        <TextField id="zip"
                                   label="ZIP"
                                   variant="standard"
                                   size="small"
                                   fullWidth
                                   value={defaultProperty.attributes.Address.ZIP}
                                   {...register('zip')}
                                   error={errors.zip ? true : false}
                                   helperText={errors.zip ? 'Enter 5 digit zipcode':""}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="first-name"
                                   label="First Name"
                                   variant="standard"
                                   size="small"
                                   fullWidth
                                   value={defaultProperty.attributes.FirstName}
                                   {...register('firstName')}
                                   error={errors.firstName ? true : false}
                                   helperText={errors.firstName ? 'Enter valid first name':""}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="last-name"
                                   label="Last Name"
                                   variant="standard"
                                   size="small"
                                   fullWidth
                                   value={defaultProperty.attributes.LastName}
                                   {...register('lastName')}
                                   error={errors.lastName ? true : false}
                                   helperText={errors.lastName ? 'Enter valid last name':""}
                        />
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Box sx={{mt:10,textAlign:"center"}}>
                    <Button id="submit" variant="contained" onClick={handleSubmit(d => {
                        axios
                            .put('http://localhost:1337/api/properties/1',
                                {
                                    "data": {
                                        "data": {
                                            PropertyName: d.propertyName,
                                            Address: {
                                                Street: d.street,
                                                Apt: d.apt,
                                                City: d.city,
                                                State: d.state,
                                                ZIP: d.zip
                                            },
                                            FirstName: d.firstName,
                                            LastName: d.lastName
                                        }
                                    }
                                })
                            .then(function (response) {
                                console.log(response.data);
                            });
                        closeHandler();
                    })}>Next</Button>
                </Box>
            </DialogActions>
        </Dialog>
    );
}
export default EditProperty;