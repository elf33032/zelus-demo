import React from "react";
import {Box} from "@mui/material";
import PropertyStats from "../../Components/PropertyStats";
import PropertyTable from "../../Components/propertyTable";

interface ManagePage0Props{
    companyId:number;
    setPage:Function;
    setProperty:Function;
}
const ManagePage0:React.FC<ManagePage0Props>=(props)=>{
    return(
        <Box>
            <PropertyStats companyId={props.companyId}/>
            <PropertyTable companyId={props.companyId} setPage={props.setPage} setProperty={props.setProperty}/>
        </Box>
    );
}
export default ManagePage0;