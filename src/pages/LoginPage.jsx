import React, { useState } from "react";
import { TextField, Button, Typography, Link, Box,Container,} from "@mui/material";
import axios from "axios";
import apiEndPoints from '../service/apiConfig.js'

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        apiEndPoints.user.login,
        {
          email,
          password,
        }
      );

      console.log("Login successful:", response.data);
      // Handle successful login response here
    } catch (error) {
      console.error(
        "Login failed:",
        error.response ? error.response.data : error.message
      );
      // Handle error response here
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
          Login to Your Account
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
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            autoFocus
            value={email} // Bind value to email state
            onChange={(e) => setEmail(e.target.value)} // Update email state on change
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
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password} // Bind value to password state
            onChange={(e) => setPassword(e.target.value)} // Update password state on change
            sx={{
              input: { color: "#FFFFFF" },
              label: { color: "#B9BBBE" },
              marginBottom: 3,
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
          <Link href="#" variant="body2" sx={{ color: "#00AFF4" }}>
            First time here? Create an account
          </Link>
        </Box>
      </Box>
    </Container>
  );
}

export default LoginPage;
