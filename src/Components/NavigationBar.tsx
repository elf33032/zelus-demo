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
import { createTheme, ThemeProvider } from "@mui/material/";

const NavigationBar: React.FC = (props) => {
  const drawerWidth = 240;
  const [addOpen, setAddOpen] = useState(true);
  const addOpenHandler = () => {
    setAddOpen(!addOpen);
  };
  return (
    <Drawer
      sx={{
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
        <Typography variant="h6" noWrap component="a">
          Logo
        </Typography>
      </Toolbar>
      <Divider />
      <List sx={{ bgcolor: "background.paper" }} component="nav">
        <ListItemButton onClick={addOpenHandler}>
          <ListItemText primary="Property Management" />
          {addOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={addOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }} component={Link} to="/new-property">
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
  );
};
export default NavigationBar;
