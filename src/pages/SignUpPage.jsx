import React, { useState } from "react";
import { TextField, Button, Typography, Link, Box, Container } from "@mui/material";
import axios from "axios";
import apiEndPoints from "../service/apiConfig.js";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(apiEndPoints.user.signup, {
        username,
        email,
        password,
        dob,
      });

      console.log("Signup successful:", response.data);
      navigate("/dashboard");
    } catch (error) {
      console.error(
        "Login failed:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#36393F",
          padding: 4,
          borderRadius: 2,
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
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
          onSubmit={handleLogin}
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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
            value={dob}
            onChange={(e) => setDob(e.target.value)}
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
          <Link href="#" variant="body2" sx={{ color: "#00AFF4" }}>
            First time here? Create an account
          </Link>
        </Box>
      </Box>
    </Container>
  );
}

export default LoginPage;
