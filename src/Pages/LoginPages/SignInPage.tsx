import React from "react";
import {
  Box,
  Tab,
  Tabs,
  Typography,
  TextField,
  Grid,
  InputAdornment,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Link,
  Button,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
interface SignInPageProps {}

const SignInPage: React.FC<SignInPageProps> = (props) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ maxWidth: "60vh" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="login-control"
        centered
      >
        <Tab label="Sign In" />
        <Tab label="Sign Up" />
      </Tabs>
      {value === 0 && (
        <Grid container spacing={1} sx={{ mt: 3 }} justifyContent="center">
          <Grid container item xs={12} justifyContent="center">
            <TextField
              fullWidth
              id="email"
              label="Email Address"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid container item xs={12} justifyContent="center">
            <TextField
              fullWidth
              type="password"
              id="password"
              label="Password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid container item xs={6} justifyContent="flex-start">
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Remember Me"
              />
            </FormGroup>
          </Grid>
          <Grid container item xs={6} justifyContent="flex-end">
            <Link href="/forget-password">Forget Password? </Link>
          </Grid>
          <Grid container item xs={12} justifyContent="center">
            <Button variant="contained" sx={{ minWidth: "30vh" }}>
              Log In
            </Button>
          </Grid>
        </Grid>
      )}
      {value === 1 && (
        <Grid container spacing={1} sx={{ mt: 3 }}>
          <Grid container item xs={12} justifyContent="center">
            <TextField fullWidth id="email" label="Email Address" />
          </Grid>
          <Grid container item xs={12} justifyContent="center">
            <TextField fullWidth id="password" label="Password" />
          </Grid>
          <Grid container item xs={12} justifyContent="center">
            <TextField fullWidth id="verify_password" label="Password Again" />
          </Grid>
          <Grid container item xs={6} justifyContent="center">
            <TextField fullWidth id="password_verify" label="Password Again" />
          </Grid>
          <Grid container item xs={6} justifyContent="center"></Grid>
          <Grid container item xs={4} justifyContent="flex-start">
            <Button
              variant="contained"
              sx={{ width: "20vh", minWidth: "10vh" }}
            >
              Sign Up
            </Button>
          </Grid>
          <Grid container item xs={8} justifyContent="flex-end">
            <Button variant="text" size="small">
              Have an account? Log In Here
            </Button>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default SignInPage;
