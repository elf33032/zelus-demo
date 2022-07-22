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
    <Box sx={{ minWidth: "100vh" }}>
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
        <Grid container spacing={1} sx={{ mt: 3 }}>
          <Grid item xs={12} justifyContent="center" alignItems="center">
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
          <Grid item xs={12}>
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
          <Grid item xs={6}>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Remember Me"
              />
            </FormGroup>
          </Grid>
          <Grid item xs={6}>
            <Link href="/forget-password">Forget Password? </Link>
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" sx={{ minWidth: "30vh" }}>
              Log In
            </Button>
          </Grid>
        </Grid>
      )}
    </Box>
  );
};

export default SignInPage;
