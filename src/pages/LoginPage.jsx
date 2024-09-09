import React, { useState } from "react";
import { TextField, Button, Typography, Link, Box, Container, Snackbar, Alert } from "@mui/material";
import axios from "axios";
import apiEndPoints from "../service/apiConfig.js";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (event) => {
    event.preventDefault();
    setError(""); // Clear previous errors
    setSuccess(""); // Clear previous success messages

    try {
      const response = await axios.post(apiEndPoints.user.login, {
      
        email,
        password,
     
      });

      console.log("Signup successful:", response.data);
      setSuccess("Signup successful. Redirecting...");
      setTimeout(() => navigate("/dashboard"), 2000); // Redirect after 2 seconds
    } catch (error) {
      console.error("Signup failed:", error.response ? error.response.data : error.message);
      setError(error.response ? error.response.data.message : "Signup failed. Please try again.");
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
    </Container>
  );
}

export default LoginPage;
