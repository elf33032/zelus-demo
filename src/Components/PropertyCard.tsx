import React from "react";
import {useEffect} from "react";
import {Card, Grid, Typography, CardContent, CardActions, Button, Box} from "@mui/material";

interface IPropertyCardProps{
    id:number;
    propertyName:string;
    setEditDialog:Function;
    setEditPropertyId:Function;
}
const PropertyCard: React.FC<IPropertyCardProps> = props=>{
    const openDialogHandler = () => {
        props.setEditPropertyId(props.id);
        props.setEditDialog(true);
    }
    return(
        <Grid item xs={3}>
            <Card sx={{ height:'100%'}}>
                <CardContent sx={{height: '80px'}}>
                    <Typography variant = 'h6'> Property </Typography>
                    <Typography>ID: {props.id}</Typography>
                    <Typography>Name: {props.propertyName}</Typography>
                </CardContent>
                <CardActions>
                    <Button onClick = {openDialogHandler}> Edit </Button>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default PropertyCard;