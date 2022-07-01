import React, {useEffect, useState} from "react";
import {Box, Grid, Divider, Typography} from "@mui/material";
import {token} from "../Pages/ManageProperty";
import axios from "axios";

interface propertyStatsProps{
    companyId:number;
};
const PropertyStats:React.FC<propertyStatsProps>=()=>{
    const companyId = 1
    const[properties, setProperties] = useState();
    const[renting, setRenting] = useState();
    const[room, setRoom] = useState();
    useEffect(()=>{
        const fetchData = async() =>{
            try{
                // find properties with company id
                let response = await axios.get(`http://localhost:1337/api/properties?filters[property_company][id][$eq]=${companyId}`, {
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                })
                setProperties(response.data.data.length);
                // find company property unit with tenant
                response = await axios.get(`http://localhost:1337/api/units?populate=*&filters[$and][0][tenants][id][$notNull]=true&filters[$and][1][property][property_company][id][$eq]=${companyId}`, {
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                })
                setRenting(response.data.data.length);
                response = await axios.get(`http://localhost:1337/api/units?populate=*&filters[property][property_company][id][$eq]=${companyId}`, {
                    headers:{
                        Authorization: `Bearer ${token}`
                    }
                })
                setRoom(response.data.data.length);
            }
            catch(error){
                console.log("Error in fetching data");
            }
        }
        fetchData();
    }, []);
    return(
        <Box>
            <Grid container>
                <Grid item xs = {3}>
                    <Typography variant = 'subtitle1'> My Total Property</Typography>
                    <Typography variant = 'h5'>{properties}</Typography>
                </Grid>
                <Grid item xs={1}
                      container
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                >
                    <Divider orientation="vertical" variant="middle"/>
                </Grid>
                <Grid item xs = {4}>
                    <Typography variant = 'subtitle1'> Renting Rooms </Typography>
                    <Typography variant = 'h5'>{renting}</Typography>
                </Grid>
                <Grid item xs={1}
                      container
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                >
                    <Divider orientation="vertical" variant="middle"/>
                </Grid>
                <Grid item xs = {3}>
                    <Typography variant = 'subtitle1'> Total Rooms</Typography>
                    <Typography variant = 'h5'>{room}</Typography>
                </Grid>
            </Grid>
        </Box>
    );
}

export default PropertyStats;
