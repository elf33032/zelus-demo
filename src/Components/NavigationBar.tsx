import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import { Grid } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/";
import { CssBaseline } from "@mui/material";
import Logo from "../Assets/Logo.png";

const outerTheme = createTheme({
  palette: {
    background: {
      default: "#061627",
      paper: "#01579b",
    },
  },
  typography: { h5: { color: "whitesmoke" }, body1: { color: "whitesmoke" } },
});

const NavigationBar: React.FC = (props) => {
  const drawerWidth = 240;
  const [addOpen, setAddOpen] = useState(true);
  const addOpenHandler = () => {
    setAddOpen(!addOpen);
  };
  return (
    <ThemeProvider theme={outerTheme}>
      <CssBaseline enableColorScheme={true}>
        <Drawer
          sx={{
            bgColor: "background.default",
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar>
            <Grid container>
              <Grid item xs={4}>
                <img alt="Logo" src={Logo} width="40px" height="40px" />
              </Grid>
              <Grid item xs={8}>
                <Typography
                  variant="h5"
                  noWrap
                  component="a"
                  sx={{ fontWeight: "bold", pt: "100" }}
                >
                  Zelus
                </Typography>
              </Grid>
            </Grid>
          </Toolbar>
          <Divider />
          <List
            sx={{ bgcolor: "background.default", height: "100%" }}
            component="nav"
          >
            <ListItemButton onClick={addOpenHandler}>
              <ListItemText primary="Property Management" />
              {addOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={addOpen} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton
                  sx={{ pl: 4 }}
                  component={Link}
                  to="/new-property"
                >
                  <ListItemText primary="Add New Property" />
                </ListItemButton>
                <ListItemButton
                  sx={{ pl: 4 }}
                  component={Link}
                  to="/managing-property"
                >
                  <ListItemText primary="Manage Property" />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </Drawer>
      </CssBaseline>
    </ThemeProvider>
  );
};
export default NavigationBar;
