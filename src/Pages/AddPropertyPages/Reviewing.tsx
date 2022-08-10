import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import WatchLaterIcon from "@mui/icons-material/WatchLater";

const Reviewing: React.FC = () => {
  return (
    <Box>
      <Grid container>
        <Grid container item xs={12} justifyContent={"center"}>
          <Box textAlign={"center"} sx={{ mt: 5, maxWidth: "30vw" }}>
            <WatchLaterIcon style={{ color: "Grey", fontSize: 65 }} />
            <Typography variant={"h6"} sx={{ mt: 3, fontWeight: "bold" }}>
              Your property info is being checked
            </Typography>
            <Typography variant={"h6"} sx={{ mt: 1 }}>
              The process of check will take 2-3 business days. The result will
              be sent to your email address.
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
export default Reviewing;
