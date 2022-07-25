import React from "react";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LoginLogoTitleLayout from "../../UI/LoginLogoTitleLayout";
import { Box, Grid, Typography, Button } from "@mui/material";

const ConfirmEmailPage: React.FC = (props) => {
  return (
    <Box maxWidth={"60vh"}>
      <Grid container spacing={1} sx={{ mt: 3 }}>
        <Grid item container xs={12} justifyContent={"center"} sx={{ mt: 3 }}>
          <CheckCircleIcon sx={{ color: "#008000", fontSize: "80px" }} />
        </Grid>
        <Grid
          item
          container
          xs={12}
          justifyContent={"center"}
          sx={{ mt: 1, md: 3 }}
        >
          <Typography align="center" variant="h5">
            {" "}
            Confirm Email Sent
          </Typography>
          <Typography align="center">
            Please check your email. And follow the steps to reset your
            password.
          </Typography>
        </Grid>
        <Grid item container xs={6} justifyContent={"center"} sx={{ mt: 3 }}>
          <Button variant="outlined">Send Again</Button>
        </Grid>
        <Grid item container xs={6} justifyContent={"center"} sx={{ mt: 3 }}>
          <Button variant="contained">Back</Button>
        </Grid>
      </Grid>
    </Box>
  );
};
export default ConfirmEmailPage;
