import React, {useEffect, useState} from "react";
import PropertyCard from "../Components/PropertyCard";
import axios from "axios";
import {Box, Grid, Typography} from "@mui/material";

interface IProperties{
    id:number;
    attributes:{
        PropertyName:string;
        Address:{
            Street: string;
            Apt?: string;
            City: string;
            State: string;
            ZIP: string;
        }
    }
}


const ManageProperty:React.FC=()=>{
    const[properties, setProperties] = useState<Array<IProperties>>([]);
    useEffect(()=>{
        axios
            .get('http://localhost:1337/api/properties?populate=*')
            .then(function (response) {
                setProperties(response.data.data);
            });
    });

    return(
        <Box>
            <Grid container spacing={1}>
                {properties.map((property) =>
                    <PropertyCard propertyName = {property.attributes.PropertyName}
                    id = {property.id}/>
                )}
            </Grid>
        </Box>
    );
}
export default ManageProperty;