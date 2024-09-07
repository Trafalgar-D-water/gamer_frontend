import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Typography, Box, CircularProgress } from "@mui/material";
import axios from "axios";
import apiEndPoints from '../service/apiConfig.js';

const VerifyEmail = () => {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("token");
    console.log('Extracted Token:', token);

    if (token) {
      console.log('This is my token form front end' ,token);
      
      axios
        .get(`http://localhost:3004/api/user/verify-email?token=${token}`)
        .then((response) => {
          console.log('This is my resonse' ,response);
          
          setMessage("Email verified successfully! Redirecting to dashboard...");
          setLoading(false);
          setTimeout(() => navigate("/dashboard"), 3000);
        })
        .catch((error) => {
          setMessage(
            error.response ? error.response.data.message : "Verification failed."
          );
          setLoading(false);
        });
    } else {
      setMessage("Invalid verification link.");
      setLoading(false);
    }
  }, [location.search, navigate]);

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
        {loading ? (
          <CircularProgress />
        ) : (
          <Typography component="h1" variant="h5" color="#FFFFFF">
            {message}
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default VerifyEmail;
