import React from "react";
import MyDropZone from "../Components/MyDropZone";
import{useState} from "react";
import Button from "@mui/material/Button";
import classes from "./Page.module.css";
import {FormLabel} from "@mui/material";
import type {IFiles} from "./FormWizard";

interface FromPage2Props{
    onNext: Function;
    updateFiles: Function;
    onBack: Function;
};
const FormPage2: React.FC <FromPage2Props>= (props) =>{
    const [isPassport, setIsPassport] = useState(false);
    const [isSSN, setIsSSN] = useState(false);

    function onSubmitHandler(event:React.FormEvent){
        /*
        When user submit by clicking next button
        We check if all required are satisfied
        */
        event.preventDefault();
        console.log(isPassport, isSSN);
        if(isPassport && isSSN){
            props.onNext();
        }else{
            alert("Please upload both pictures of your Passport and SSN.")
        }
    }
    const onBackHandler = (event: React.MouseEvent<HTMLButtonElement>)=>{
        event.preventDefault();
        props.onBack();
    }
    //Set files state in FormWizard page, and set file loaded conditions
    function setPassport(file:File){
        props.updateFiles({passport:file} as Partial<IFiles>);
        setIsPassport(true);
        console.log(isPassport, isSSN)
    }
    function setSSN(file:File){
        props.updateFiles({ssn:file} as Partial<IFiles>);
        setIsSSN(true);
        console.log(isPassport, isSSN)
    }
    return(
        <form onSubmit={onSubmitHandler}>
            <div className={classes.item}>
                <FormLabel id = "Passport" sx={{mt: 2, mr: 1}} className={classes.label}>* Owner's Passport: </FormLabel>
                <MyDropZone updateFile={setPassport}/>
            </div>
            <div className={classes.item}>
                <FormLabel id = "SSN" sx={{mt: 2, mr: 1}} className={classes.label}>* Owner's SSN: </FormLabel>
                <MyDropZone updateFile={setSSN}/>
            </div>
            {!(isPassport && isSSN) && <p className={classes.comment}>* Please Upload All Documents</p>}
            <div className={classes.buttons}>
                <Button variant = "outlined" onClick={onBackHandler}> Previous </Button>
                <Button variant = "contained" type = "submit"> Next </Button>
            </div>
        </form>
    );
}

export default FormPage2;