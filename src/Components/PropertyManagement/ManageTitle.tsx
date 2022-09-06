import { Box, Paper, Typography } from "@mui/material";
import React from "react";

interface ManageTitleProps {
  history: string;
  title: string;
}
const ManageTitle: React.FC<ManageTitleProps> = (props) => {
  return (
    <Box
      sx={{
        bgcolor: "white",
        height: "15vh",
        p: 3,
        justifyContent: "center",
      }}
    >
      <Typography color={"#999999"}>History</Typography>
      <Typography variant={"h5"} sx={{ fontWeight: "bold" }}>
        Property Management
      </Typography>
    </Box>
  );
};

export default ManageTitle;
