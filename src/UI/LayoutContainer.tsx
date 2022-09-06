import { Box } from "@mui/material";
import React from "react";

interface LayoutContainerProps {
  children: JSX.Element;
}
const LayoutContainer: React.FC<LayoutContainerProps> = (props) => {
  return (
    <Box
      sx={{
        bgcolor: "white",
        mt: 10,
        overflow: "hidden",
        minHeight: "87vh",
      }}
    >
      {props.children}
    </Box>
  );
};
export default LayoutContainer;
