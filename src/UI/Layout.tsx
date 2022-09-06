import classes from "./Layout.module.css";
import NavigationBar from "../Components/NavigationBar";
import TopBar from "../Components/TopBar";
import React from "react";
import { Container, Box } from "@mui/material";

interface LayoutProps {
  children: JSX.Element;
}
const Layout: React.FC<LayoutProps> = (props) => {
  return (
    <Box sx={{ display: "flex" }}>
      <NavigationBar />
      <TopBar />

      <Container
        maxWidth={false}
        sx={{ bgcolor: "#f0f2f5", minHeight: "100vh" }}
      >
        {props.children}
      </Container>
    </Box>
  );
};
export default Layout;
