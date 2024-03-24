import React, { useState } from "react";
import { Container, Typography, TextField, Button, Grid } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Image01 from "../../assets/Image01.jpg";
import "../../styles/Signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleName = (event) => {
    setName(event.target.value);
    console.log(name);
  };
  const handleEmail = (event) => {
    setEmail(event.target.value);
    console.log(email);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
    console.log(password);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setEmailError("");
    setPasswordError("");
    setNameError("");
    console.log();
    console.log();
    let valid = true;
    if (!name) {
      setNameError("Name is required");
      valid = false;
    }
    if (!email) {
      setEmailError("Email is required");
      valid = false;
    }
    if (!password) {
      setPasswordError("Password is required");
      valid = false;
    }
    if (valid) {
      navigate("/Signin");
    }
  };
  const handleNavigateBack = () => {
    navigate("/");
  };

  return (
    <div className="Signup_Page">
      <div className="Back_Button">
        <Button sx={{ width: "200px" }} onClick={handleNavigateBack}>
          Back
        </Button>
      </div>
      <div className="Signup_Left_Section">
        <img src={Image01} alt="Image" />
      </div>
      <div className="Signup_Right_Section">
        <Container className="container" maxWidth="sm">
          <Typography variant="h4" align="center" gutterBottom>
            Sign Up
          </Typography>
          <form className="form" onSubmit={handleSubmit}>
            <Grid container spacing={2} justifyContent="center">
              <Grid item xs={12}>
                <TextField
                  className="textField"
                  label="Name"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={handleName}
                  error={!!nameError}
                  helperText={nameError}
                />
              </Grid>
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
                  Sign Up
                </Button>
                <Typography sx={{ mt: "20px" }}>
                  Already have an account? <Link to="/signin">Sign In</Link>
                </Typography>
              </Grid>
            </Grid>
          </form>
        </Container>
      </div>
    </div>
  );
};

export default Signup;
