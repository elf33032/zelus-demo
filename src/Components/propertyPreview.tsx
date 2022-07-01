import React from "react";
import {date} from "yup";
import {TableRow, TableCell,Typography} from "@mui/material";

interface propertyPreviewProps{
    name:string;
    address:string;
    owner:string;
    enrollTime:string;
    setPage:Function;
    setProperty:Function;
};
const PropertyPreview:React.FC<propertyPreviewProps>=(props)=>{
    return(
        <TableRow>
            <TableCell>
                <Typography variant = "body1">{props.name}</Typography>
                <Typography variant = "body2">{props.address}</Typography>
            </TableCell>
            <TableCell>
                <Typography variant = "body2">Owner</Typography>
                <Typography variant = "body2">{props.owner}</Typography>
            </TableCell>
            <TableCell>
                <Typography variant = "body2">Enrolled in</Typography>
                <Typography variant = "body2">{props.enrollTime}</Typography>
            </TableCell>
        </TableRow>
    );
}
export default PropertyPreview;