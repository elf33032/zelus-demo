import React from "react";
import MyDropZone from "../../Components/MyDropZone";
import { useState } from "react";
import Button from "@mui/material/Button";
import classes from "./Page.module.css";
import { Box, FormLabel, Grid } from "@mui/material";
import type { IFiles } from "../AddNewProperty";

interface FromPage2Props {
  next: Function;
  back: Function;
}
const FormPage2: React.FC<FromPage2Props> = (props) => {
  // see if passport is uploaded already
  const [isPassport, setIsPassport] = useState(true);

  function nextHandler(event: React.FormEvent) {
    /*
        When user submit by clicking next button
        We check if all required are satisfied
        */
    event.preventDefault();
    if (isPassport) {
      props.next();
    } else {
      alert("Please upload pictures of your Passport and SSN.");
    }
  }
  const backHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    props.back();
  };

  return (
    <form id="page-2" onSubmit={nextHandler}>
      <div className={classes.item}>
        <FormLabel id="ID" sx={{ mt: 2, mr: 1 }} className={classes.label}>
          * Owner's ID:{" "}
        </FormLabel>
        <MyDropZone
          updateFile={() => {
            /*Put Update file function here*/
          }}
        />
      </div>
      {!isPassport && (
        <p className={classes.comment}>* Please Upload All Documents</p>
      )}
      <Box
        sx={{
          bottom: 100,
          width: "70vw",
          position: "absolute",
        }}
      >
        <Grid container spacing={1} sx={{ mt: 10 }}>
          <Grid item container xs={6} justifyContent={"flex-end"}>
            <Button id="submit" variant="outlined" onClick={backHandler}>
              Back
            </Button>
          </Grid>
          <Grid item container xs={6} justifyContent={"flex-start"}>
            <Button id="submit" variant="contained" onClick={nextHandler}>
              Next
            </Button>
          </Grid>
        </Grid>
      </Box>
    </form>
  );
};

export default FormPage2;
