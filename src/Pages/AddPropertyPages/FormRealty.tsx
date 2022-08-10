import React from "react";
import { useForm } from "react-hook-form";
import type { IData } from "../AddNewProperty";
import {
  createTheme,
  ThemeProvider,
  Button,
  TextField,
  Grid,
  Box,
  Typography,
  Autocomplete,
} from "@mui/material";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { stateList } from "./FormPage1";

// Below section is Regex rules for input
export const schema = yup
  .object({
    // FILL OUT YUP VALIDATION HERE
  })
  .required();

interface FormRealtyProps {
  next: Function;
}
const FormRealty: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submitHandler = (data: Partial<IData>) => {
    // FILL OUT CODE OF SUBMISSION HANDLING HERE
  };

  return (
    <Box id="page-1" sx={{ p: 5, maxWidth: "70vw" }}>
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <Typography align="right">Your Team's Name:</Typography>
        </Grid>
        <Grid item xs={9}>
          <TextField
            id="team-name"
            label="Name Your Team"
            variant="outlined"
            size="small"
            fullWidth
            {...register("teamName")}
            error={Boolean(errors.propertyName)}
            helperText={
              errors.propertyName ? "Enter team name of length 2-32" : ""
            }
          />
        </Grid>
        <Grid item xs={3}>
          <Typography align="right">Email Address:</Typography>
        </Grid>
        <Grid item xs={9}>
          <TextField
            id="email"
            label="Email Address"
            variant="outlined"
            size="small"
            fullWidth
            {...register("email")}
            error={Boolean(errors.street)}
            helperText={errors.street ? "Enter valid email address" : ""}
          />
        </Grid>
        <Grid item xs={3}>
          <Typography align="right">Phone Number:</Typography>
        </Grid>
        <Grid item xs={9}>
          <TextField
            id="phone-number"
            label="Phone Number"
            variant="outlined"
            size="small"
            fullWidth
            {...register("phoneNumber")}
            error={errors.firstName ? true : false}
            helperText={errors.firstName ? "Enter valid phone number" : ""}
          />
        </Grid>
        <Grid item xs={3}>
          <Typography align="right">Who we should speak with:</Typography>
        </Grid>
        <Grid item xs={9}>
          <TextField
            id="speak-with"
            label="We should speak with"
            variant="outlined"
            size="small"
            fullWidth
            {...register("speakWith")}
            error={errors.lastName ? true : false}
            helperText={errors.lastName ? "Enter valid name" : ""}
          />
        </Grid>
        <Grid item xs={3}>
          <Typography align="right">Content:</Typography>
        </Grid>
        <Grid item xs={9}>
          <TextField
            multiline
            rows={5}
            id="content"
            label="What you want us to know about your team"
            variant="outlined"
            size="small"
            fullWidth
            {...register("content")}
            error={errors.lastName ? true : false}
            helperText={errors.lastName ? "Enter valid content" : ""}
          />
        </Grid>
      </Grid>
      <Box
        sx={{
          ml: 5,
          bottom: 100,
          width: "70vw",
          position: "absolute",
        }}
      >
        <Grid container>
          <Grid container item xs={12} justifyContent={"center"}>
            <Button
              id="submit"
              variant="contained"
              onClick={handleSubmit(submitHandler)}
            >
              Next
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
export default FormRealty;
