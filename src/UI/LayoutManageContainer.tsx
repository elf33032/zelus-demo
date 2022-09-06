import { Box } from "@mui/material";
import React from "react";

interface LayoutContainerProps {
  children: JSX.Element;
}
const LayoutManageContainer: React.FC<LayoutContainerProps> = (props) => {
  return (
    <Box
      sx={{
        mt: 10,
        overflow: "hidden",
        minHeight: "87vh",
      }}
    >
      {props.children}
    </Box>
  );
};
export default LayoutManageContainer;
