import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 3,
        backgroundColor: "#f0f0f0",
        height: "100vh",
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: 3 }}>
        Profile Page
      </Typography>
      {/* Profile content goes here */}

      <Button
        onClick={() => navigate("/dasboard")}
        variant="contained"
        sx={{
          borderRadius: "4px",
          backgroundColor: "#5865F2",
          "&:hover": { backgroundColor: "#4752C4" },
          color: "#FFFFFF",
        }}
      >
        Back to Dashboard
      </Button>
    </Box>
  );
};

export default ProfilePage;
