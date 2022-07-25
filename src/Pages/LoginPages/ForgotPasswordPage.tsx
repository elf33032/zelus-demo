import React from "react";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";

const ForgotPasswordPage: React.FC = (props) => {
  return (
    <Box maxWidth={"40vh"}>
      <Grid container spacing={1} sx={{ mt: 3 }}>
        <Grid container item xs={12} justifyContent={"center"}>
          <Typography align="center">
            Forget password? Enter your Email address and we will share a link
            to create a new password.
          </Typography>
        </Grid>
        <Grid container item xs={12} justifyContent={"center"} sx={{ mt: 2 }}>
          <TextField fullWidth id="email_reset" label="Email Address" />
        </Grid>
        <Grid container item xs={12} justifyContent={"center"} sx={{ mt: 5 }}>
          <Button variant="contained" size="small">
            Send Code
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
export default ForgotPasswordPage;
