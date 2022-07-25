import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Logo from "../Assets/Logo.png";
import LoginBackground from "../Assets/LoginBackground.png";

interface LayoutProps {
  children: false | JSX.Element;
}
const styles = {
  backgroundBox: {
    backgroundImage: `url(${LoginBackground})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100vw",
    height: "100vh",
  },
};
const theme = createTheme({
  typography: {
    // In Chinese and Japanese the characters are usually larger,
    // so a smaller fontsize may be appropriate.
    fontSize: 12,
  },
});
const LoginLogoTitleLayout: React.FC<LayoutProps> = (props) => {
  return (
    <Box style={styles.backgroundBox} sx={{ minHeight: "70vh", p: 2 }}>
      <ThemeProvider theme={theme}>
        <Grid container sx={{ md: 3 }}>
          <Grid container item xs={12} justifyContent={"center"}>
            <img alt="Logo" src={Logo} width="70px" height="70px" />
          </Grid>
          <Grid container item xs={12} justifyContent={"center"}>
            <Typography align={"center"} variant={"h4"}>
              {" "}
              Zelus Property Management{" "}
            </Typography>
          </Grid>
        </Grid>
        {props.children}
      </ThemeProvider>
    </Box>
  );
};
export default LoginLogoTitleLayout;
