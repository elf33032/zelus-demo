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
      <TopBar />
      <NavigationBar />
      <Container
        maxWidth={false}
        sx={{ bgcolor: "#f8f8f8", p: 4, height: "100vh" }}
      >
        <Box
          sx={{
            bgcolor: "white",
            p: 3,
            mt: 7,
            overflow: "hidden",
            minHeight: "70vh",
          }}
        >
          {props.children}
        </Box>
      </Container>
    </Box>
  );
};
export default Layout;
