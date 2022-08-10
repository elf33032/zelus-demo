import React from "react";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#d9dcdb",
    },
  },
});
const TopBar: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <AppBar
          elevation={0}
          component="nav"
          sx={{ bgColor: "#d9dcdb", minHeight: 65 }}
        >
          <Toolbar></Toolbar>
        </AppBar>
      </CssBaseline>
    </ThemeProvider>
  );
};

export default TopBar;
