import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const MessageSent: React.FC = () => {
  return (
    <Box>
      <Grid container>
        <Grid container item xs={12} justifyContent={"center"}>
          <Box textAlign={"center"} sx={{ mt: 5, maxWidth: "30vw" }}>
            <CheckCircleIcon style={{ color: "green", fontSize: 65 }} />
            <Typography variant={"h6"} sx={{ mt: 3, fontWeight: "bold" }}>
              Your message has been sent
            </Typography>
            <Typography variant={"h6"} sx={{ mt: 1 }}>
              Our sales team will contact you in few days
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Box
        sx={{
          ml: 4,
          bottom: 100,
          width: "70vw",
          position: "absolute",
        }}
      >
        <Grid container>
          <Grid container item xs={12} justifyContent={"center"}>
            <Button
              sx={{ mt: 20 }}
              id="submit"
              variant="contained"
              onClick={() => {}}
            >
              OK
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default MessageSent;
