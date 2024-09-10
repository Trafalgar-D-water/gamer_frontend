import React, { useState } from "react";
import { TextField, Button, Typography, Link, Box, Container } from "@mui/material";
import axios from "axios";
import apiEndPoints from "../service/apiConfig.js";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateSignupForm, resetSignupForm } from "../reducers/signUp";

function SignUpPage() {
  const dispatch = useDispatch();
  const signUpForm = useSelector((state) => state.signUp);
  console.log("Signup form:", signUpForm);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    dispatch(updateSignupForm({ [e.target.name]: e.target.value }));
  }

  const handleSignup = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(apiEndPoints.user.signup, signUpForm)

      console.log("Signup successful:", response.data);
      dispatch(resetSignupForm());

      navigate("/dashboard");
    } catch (error) {
      console.error(
        "Signup failed:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box mt={8}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#36393F",
          padding: 4,
          borderRadius: 2,
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)"
        }}
      >
        <Typography
          component="h1"
          variant="h5"
          color="#FFFFFF"
          sx={{ marginBottom: 2 }}
        >
          Create a new account
        </Typography>
        <Box
          component="form"
          onSubmit={handleSignup}
          sx={{ width: "100%", mt: 1 }}
        >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            value={signUpForm.username}
            onChange={handleInputChange}
            sx={{
              input: { color: "#FFFFFF" },
              label: { color: "#B9BBBE" },
              marginBottom: 2,
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="email"
            label="Email"
            type="email"
            id="email"
            value={signUpForm.email}
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
            value={signUpForm.password}
            onChange={handleInputChange}
            sx={{
              input: { color: "#FFFFFF" },
              label: { color: "#B9BBBE" },
              marginBottom: 2,
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="dob"
            label="Date of Birth"
            name="dob"
            type="date"
            InputLabelProps={{
              shrink: true, // Keeps the label above the input when a value is selected
            }}
            value={signUpForm.dob}
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
            Sign Up
          </Button>
          <Link href="/login" variant="body2" sx={{ color: "#00AFF4" }}>
            Already have an account? Login
          </Link>
        </Box>
      </Box>
    </Container>
  );
}

export default SignUpPage;
