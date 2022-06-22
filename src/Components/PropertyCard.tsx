import React from "react";
import {useEffect} from "react";
import {Card, Grid, Typography, CardContent, CardActions, Button, Box} from "@mui/material";
import axios from "axios";

interface IPropertyCardProps{
    id:number;
    propertyName:string;
    setEditDialog:Function;
    setEditPropertyId:Function;
    setNeedUpdate:Function;
}
const PropertyCard: React.FC<IPropertyCardProps> = props=>{
    const openDialogHandler = () => {
        props.setEditPropertyId(props.id);
        props.setEditDialog(true);
    }
    const deleteHandler = () => {
        axios.delete('http://localhost:1337/api/properties/' + props.id.toString())
            .then(response => props.setNeedUpdate(true));
    }
    return(
            <Grid item sm={4} md={3}>
                <Card sx={{ height:'100%'}}>
                    <CardContent sx={{height: '80px'}}>
                        <Typography variant = 'h6'> Property </Typography>
                        <Typography>Name: {props.propertyName}</Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color="error" onClick={deleteHandler}> Delete </Button>
                        <Button size="small" color="primary" onClick = {openDialogHandler}>Edit</Button>
                    </CardActions>
                </Card>
            </Grid>
    );
}

export default PropertyCard;