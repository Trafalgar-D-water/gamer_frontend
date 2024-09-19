import React, { useState } from "react";
import { TextField, Button, Typography, Link, Box, Container, Snackbar, Alert } from "@mui/material";
import axios from "axios";
import apiEndPoints from "../service/apiConfig.js";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateloginForm, resetLoginForm } from "../reducers/login";
import { makeStyles, createStyles } from "@mui/styles";

export const LoginPage = () => {
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.login);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const classes = useStyles();

  const handleInputChange = (e) => {
    dispatch(updateloginForm({ [e.target.name]: e.target.value }));
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    setError(""); // Clear previous errors
    setSuccess(""); // Clear previous success messages

    const { email, password } = userDetails; // Get values from Redux state

    try {
      const response = await axios.post(apiEndPoints.user.login, {
        email,
        password,
      });

      console.log("login successful:", response.data);
      setSuccess("Login successful. Redirecting...");
      setTimeout(() => navigate("/dashboard"), 2000); // Redirect after 2 seconds
      dispatch(resetLoginForm());
    } catch (error) {
      console.error("Login failed:", error.response ? error.response.data : error.message);
      setError(error.response ? error.response.data.message : "Login failed. Please try again.");
    }
  };

  return (
    <Container component="main" maxWidth="sm" className={classes.Container}>
      <Box
        mr={8}
      >
        <Typography className={classes.Heading}
          component="h1"
          variant="h5"
          color="#FFFFFF"
          mb={3}
        >
          Login to your account
        </Typography>
        <Box
          component="form"
          onSubmit={handleLogin}
          sx={{ width: "100%", mt: 1 }}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="email"
            label="Email"
            type="email"
            id="email"
            value={userDetails.email}
            onChange={handleInputChange}
            sx={{
              input: { color: "#FFFFFF" },
              label: { color: "#B9BBBE" },
              marginBottom: 3,
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={userDetails.password}
            onChange={handleInputChange}
            sx={{
              input: { color: "#FFFFFF" },
              label: { color: "#B9BBBE" },
              marginBottom: 2,
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: "#5865F2",
              "&:hover": { backgroundColor: "#4752C4" },
              color: "#FFFFFF",
              marginBottom: 2,
            }}
          >
            Login
          </Button>
          <Link href="/signup" variant="body2" sx={{ color: "#00AFF4" }}>
            Don't have an account? Sign Up
          </Link>
        </Box>
        <Snackbar
          open={!!success}
          autoHideDuration={6000}
          onClose={() => setSuccess("")}
        >
          <Alert onClose={() => setSuccess("")} severity="success">
            {success}
          </Alert>
        </Snackbar>
        <Snackbar
          open={!!error}
          autoHideDuration={6000}
          onClose={() => setError("")}
        >
          <Alert onClose={() => setError("")} severity="error">
            {error}
          </Alert>
        </Snackbar>
      </Box>

      <Box sx={{ textAlign: 'center' }}>
        <img src='' alt="QR Code" width='200px' height='200px' />
        <Typography variant="h6" color='white' my={1}>Login with this QR code</Typography>
        <span style={{ color: 'grey' }}>Scan this with a mobile app to login instantly.</span>
      </Box>
    </Container>
  )
}

const useStyles = makeStyles((theme) =>
  createStyles({
    Container: {
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      backgroundColor: "#36393F",
      padding: 4,
      borderRadius: 2,
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    },
    Heading: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    Form: {
      width: "100%",
      marginTop: 1,
    },
    
  })
);

