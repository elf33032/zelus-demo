import React from "react";
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";

const TopBar: React.FC = () => {
  const drawerWidth = 240;
  return (
    <AppBar component="nav">
      <Toolbar></Toolbar>
    </AppBar>
  );
};

export default TopBar;
