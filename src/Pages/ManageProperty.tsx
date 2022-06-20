import React, {useEffect, useState} from "react";
import PropertyCard from "../Components/PropertyCard";
import EditProperty from "../Components/EditProperty";
import axios from "axios";
import {Box, Grid, Typography, Paper, Dialog} from "@mui/material";

export interface IProperty {
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
        FirstName:string;
        LastName:string;
    }
}


const ManageProperty:React.FC=()=>{
    const [properties, setProperties] = useState<Array<IProperty>>([]);
    const [editDialog, setEditDialog] = useState(false);
    const [editPropertyId, setEditPropertyId] = useState(NaN);

    useEffect(()=>{
        //?populate=*
        axios
            .get('http://localhost:1337/api/properties')
            .then(function (response) {
                setProperties(response.data.data);
            });
    });

    return(
        <Box>
            <Grid container spacing={1} alignItems = "stretch">
                {properties.map((property) =>
                    <PropertyCard
                        key = {property.id}
                        propertyName = {property.attributes.PropertyName}
                        id = {property.id}
                        setEditDialog={setEditDialog}
                        setEditPropertyId={setEditPropertyId}
                    />
                )}
            </Grid>
            {editDialog &&
                <EditProperty
                id={editPropertyId}
                editDialog={editDialog}
                setEditDialog={setEditDialog}
                />
            }
        </Box>
    );
}
export default ManageProperty;