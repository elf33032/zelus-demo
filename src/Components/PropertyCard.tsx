import React from "react";
import {Card, Grid, Typography, CardContent, CardActions, Button} from "@mui/material";

interface IPropertyCardProps{
    id:number;
    propertyName:string;
}
const PropertyCard: React.FC<IPropertyCardProps> = props=>{
    return(
        <Grid item xs={3}>
            <Card>
                <CardContent>
                    <Typography variant = 'h6'> Property </Typography>
                    <Typography>ID: {props.id}</Typography>
                    <Typography>Name: {props.propertyName}</Typography>
                </CardContent>
                <CardActions>
                    <Button> Edit </Button>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default PropertyCard;