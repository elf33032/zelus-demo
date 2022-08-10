import React from "react";
import { Box, Button, Grid } from "@mui/material";
import { UserType } from "../NewProperty";

interface userSelectionProps {
  setUserType: Function;
}
const UserSelection: React.FC<userSelectionProps> = (props) => {
  const selectHandler = (userType: UserType) => {
    props.setUserType(userType);
  };
  return (
    <Box sx={{ mt: 25 }}>
      <Grid container>
        <Grid item container xs={6} justifyContent={"center"}>
          <Button
            variant={"contained"}
            onClick={() => {
              selectHandler(UserType.Landlord);
            }}
          >
            {" "}
            I am a Landlord
          </Button>
        </Grid>
        <Grid item container xs={6} justifyContent={"center"}>
          <Button
            variant={"contained"}
            onClick={() => {
              selectHandler(UserType.Realty);
            }}
          >
            {" "}
            We are realty
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default UserSelection;
