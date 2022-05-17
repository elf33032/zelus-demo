import classes from "./Layout.module.css"
import NavigationBar from "../Components/NavigationBar";
import TopBar from "../Components/TopBar";
import React from "react"

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';



interface LayoutProps{
    children:JSX.Element,
}
const Layout:React.FC<LayoutProps> = (props) => {
    return(
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <TopBar/>
            <NavigationBar/>
            <div className={classes.main}>
                <Box
                    component="main"
                    sx={{bgcolor: 'white', p: 3 , height:1/1, mt:7,}}
                >
                    {props.children}
                </Box>
            </div>
        </Box>
    );
}
export default Layout;
