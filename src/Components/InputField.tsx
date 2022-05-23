import React from 'react'
import classes from "../Pages/AddPropertyPages/Page.module.css";
import CSS from 'csstype'
import {FormLabel, TextField} from "@mui/material";

interface IInput{
    id: string,
    label: string,
    defaultVal: string,
    val: string,
    flexSize: string,
    setHandler: Function,
}
const InputField:React.FC<IInput> = props =>{
    const OnChangeHandler = (event:React.FormEvent) =>{
        const target = event.target as HTMLInputElement;
        props.setHandler(target.value);
    }
    return (
        <div className={classes.item}>
            <FormLabel id ={props.id} sx={{mt: 2}} className={classes.label}> Property Name: </FormLabel>
            <div className={classes.input}>
                <TextField inputProps={{
                    'id': props.id
                }}
                           label = "Property Name"
                           variant = "outlined"
                           size = "small"
                           className={props.flexSize}
                           sx={{m: 1}}
                           defaultValue={props.defaultVal}
                ></TextField>
            </div>
        </div>
    );

}

export default InputField;