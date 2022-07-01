import React, {useEffect, useState} from "react";
import { useLocation } from 'react-router-dom';
import axios from "axios";
import {Box, Grid, Typography, Paper, Dialog, Container} from "@mui/material";
import ManagePage0 from "./ManagePropertyPages/ManagePage0";

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
    const companyId = 1;
    const path = useLocation();
    const[page, setPage] = useState(0);
    const[property, setProperty] = useState();

    return(
        <Container maxWidth = {false}>
            <Box sx = {{pt: 2, pb:10}}>
                <Typography color = 'gray'> Property Management {path.pathname} </Typography>
                <Typography variant = 'h5'>Managing Property</Typography>
            </Box>
            {page === 0 && <ManagePage0 companyId={companyId} setPage={setPage} setProperty={setProperty}/>}
            {page === 1}
        </Container>
    );
}
export default ManageProperty;
export const token = "ec1d04b03d4412ea15b9568579a5b1f8ce2567e99728cb78ac401519f988c1ee2b758209c5d1f08338ae6294bfea8e842577922e0f5e16acd54b2bd2a7b16b17d078f0d6c6ae0fb70052a9b57795889b7e3f5cb4359c0312a63ac4d5d1536b62ffcf808508b38784ffb5379e49658ac955a478861480043a72fea896a80efc68";