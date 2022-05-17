import React from 'react'
import Toolbar from "@mui/material/Toolbar";
import AppBar from "@mui/material/AppBar";

const TopBar:React.FC = () =>{
    const drawerWidth = 240;
    return(
        <AppBar
            position="fixed"
            sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
        >
            <Toolbar>
            </Toolbar>
        </AppBar>
    );
}

export default TopBar;