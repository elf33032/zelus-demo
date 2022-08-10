import React from "react";
import { Box, FormLabel, Grid } from "@mui/material";
import classes from "./Page.module.css";
import MyDropZone from "../../Components/MyDropZone";
import Button from "@mui/material/Button";

const StatusUpload: React.FC = () => {
  return (
    <Box sx={{ maxWidth: "60vw" }}>
      <Grid container sx={{ mt: 5 }}>
        <Grid item container xs={12} justifyContent={"center"}>
          <FormLabel id="ID" sx={{ mt: 2, mr: 1 }} className={classes.label}>
            * Owner's ID:{" "}
          </FormLabel>
          <MyDropZone
            updateFile={() => {
              /*Put Update file function here*/
            }}
          />
        </Grid>
      </Grid>
      <Box
        sx={{
          ml: 5,
          bottom: 100,
          width: "70vw",
          position: "absolute",
        }}
      >
        <Grid container spacing={1} sx={{ mt: 10 }}>
          <Grid item container xs={6} justifyContent={"flex-end"}>
            <Button id="submit" variant="outlined" onClick={() => {}}>
              Back
            </Button>
          </Grid>
          <Grid item container xs={6} justifyContent={"flex-start"}>
            <Button id="submit" variant="contained" onClick={() => {}}>
              Next
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default StatusUpload;
