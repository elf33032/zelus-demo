import React, { useState } from "react";
import { Tabs, Tab, Box, Typography } from "@mui/material";
import SignInPage from "./LoginPages/SignInPage";

const Login: React.FC = () => {
  const [state, setState] = useState(0);

  return (
    <Box>
      <Typography align={"center"} variant={"h4"}>
        {" "}
        Zelus Property Management{" "}
      </Typography>
      {state === 0 && <SignInPage />}
    </Box>
  );
};

export default Login;
