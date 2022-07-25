import React, { useState } from "react";
import { Tabs, Tab, Box, Typography, Grid } from "@mui/material";
import SignInPage from "./LoginPages/SignInPage";
import LoginLogoTitleLayout from "../UI/LoginLogoTitleLayout";
import ConfirmEmailPage from "./LoginPages/ConfirmEmailPage";
import ForgotPasswordPage from "./LoginPages/ForgotPasswordPage";

const Login: React.FC = () => {
  const [state, setState] = useState(0);

  return (
    <LoginLogoTitleLayout>
      <Grid container justifyContent="center">
        <Grid item>
          {state === 0 && <SignInPage />}
          {state === 1 && <ConfirmEmailPage />}
          {state === 2 && <ForgotPasswordPage />}
        </Grid>
      </Grid>
    </LoginLogoTitleLayout>
  );
};

export default Login;
