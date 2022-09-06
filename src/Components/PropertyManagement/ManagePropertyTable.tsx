import React from "react";
import {
  Box,
  Button,
  createTheme,
  Grid,
  Table,
  TableCell,
  TableRow,
  TableBody,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import PropertyTable from "../PropertyTable";
import ManagePropertyTableRow from "./ManagePropertyTableRow";
const theme = createTheme({
  palette: {
    primary: {
      main: "#999999",
    },
  },
});
const ManagePropertyTable: React.FC = (props) => {
  return (
    <Box
      sx={{
        bgcolor: "white",
        height: "68vh",
        mt: 3,
        mb: 4,
        p: 3,
        justifyContent: "center",
      }}
    >
      <Grid container>
        <Grid item xs={9}>
          <Typography variant={"h5"} sx={{ fontWeight: "bold" }}>
            {" "}
            Managing Properties
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <TextField
            size={"small"}
            placeholder={"Property, Owner, Address, Manager"}
            fullWidth={true}
          ></TextField>
        </Grid>
      </Grid>
      <Table sx={{}}>
        <TableBody>
          <ManagePropertyTableRow
            propertyName={"Westfield Apartment"}
            propertyAddress={"1231 Blue Street, Los Angeles, CA90024"}
            owner={"KW Realty Management"}
            manager={"testManager"}
          />
        </TableBody>
      </Table>
      <ThemeProvider theme={theme}>
        <Button
          sx={{ mt: 2, border: "1px dashed #999999" }}
          color={"primary"}
          variant={"outlined"}
          fullWidth={true}
        >
          {" "}
          + Add New Property
        </Button>
      </ThemeProvider>
    </Box>
  );
};

export default ManagePropertyTable;
