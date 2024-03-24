import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Alert,
} from "@mui/material";
import "../../styles/Signin.css";
import { Link, useNavigate } from "react-router-dom";
import Image01 from "../../assets/Image01.jpg";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    setEmailError("");
    setPasswordError("");

    let valid = true;
    if (!email) {
      setEmailError("Email is required");
      valid = false;
    }
    if (!password) {
      setPasswordError("Password is required");
      valid = false;
    }

    if (valid) {
      navigate("/");
    }
  };

  const handleNavigateBack = () => {
    navigate("/");
  };

  const handleEmail = (event) => {
    setEmail(event.target.value);
    setEmailError("");
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
    setPasswordError("");
  };

  return (
    <div className="SignIn_Page">
      <div className="Back_Button">
        <Button sx={{ width: "200px" }} onClick={handleNavigateBack}>
          Back
        </Button>
      </div>
      <div className="Signin_Left_Section">
        <img src={Image01} alt="Image" />
      </div>
      <div className="Signin_Right_Section">
        <Container className="container" maxWidth="sm">
          <Typography variant="h4" align="center" gutterBottom>
            Sign In
          </Typography>
          <form className="form" onSubmit={handleSubmit}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12}>
                <TextField
                  className="textField"
                  label="Email"
                  variant="outlined"
                  fullWidth
                  required
                  type="email"
                  onChange={handleEmail}
                  error={!!emailError}
                  helperText={emailError}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  className="textField"
                  label="Password"
                  variant="outlined"
                  fullWidth
                  required
                  type="password"
                  onChange={handlePassword}
                  error={!!passwordError}
                  helperText={passwordError}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  className="button"
                  variant="contained"
                  color="primary"
                  fullWidth
                  type="submit"
                >
                  Sign In
                </Button>
                <Typography sx={{ mt: "20px" }}>
                  Don't have an Account? <Link to="/Signup"> Sign Up</Link>
                </Typography>
              </Grid>
            </Grid>
          </form>
        </Container>
      </div>
    </div>
  );
};

export default Signin;
