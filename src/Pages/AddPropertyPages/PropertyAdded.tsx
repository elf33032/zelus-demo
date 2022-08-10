import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const PropertyAdded: React.FC = () => {
  const placeholderAddress = "[Placeholder Property]";
  return (
    <Box>
      <Grid container spacing={1}>
        <Grid container item xs={12} justifyContent={"center"}>
          <Box textAlign={"center"} sx={{ mt: 5, maxWidth: "30vw" }}>
            <CheckCircleIcon style={{ color: "green", fontSize: 65 }} />
            <Typography variant={"h6"} sx={{ mt: 3, fontWeight: "bold" }}>
              {`Your Property ${placeholderAddress} has successfully enrolled`}
            </Typography>
            <Typography variant={"h6"} sx={{ mt: 1 }}>
              You need to visit Managing Property page to mange your new
              property
            </Typography>
          </Box>
        </Grid>

        <Grid container item xs={6} justifyContent={"flex-end"}>
          <Button
            sx={{ mt: 20 }}
            id="submit"
            variant="outlined"
            onClick={() => {}}
          >
            Back
          </Button>
        </Grid>
        <Grid container item xs={6} justifyContent={"flex-start"}>
          <Button
            sx={{ mt: 20 }}
            id="submit"
            variant="contained"
            onClick={() => {}}
          >
            Manage Now
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
export default PropertyAdded;
