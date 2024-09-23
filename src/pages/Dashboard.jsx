import React from "react";
import { Button, Box, Typography, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person"; // Icon for profile button


const Dashboard = () => {
  const navigate = useNavigate();

  const handleProfileClick = () => {
    navigate("/profile");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 3,
        backgroundColor: "#f0f0f0",
        height: "100vh",
      }}
    >
      {/* Dashboard Heading */}
      <Typography variant="h4" sx={{ marginBottom: 3, color: "#333" }}>
        Welcome to Your Dashboard!
      </Typography>

      {/* Rounded Profile Button */}
      <Button
        onClick={handleProfileClick}
        variant="contained"
        sx={{
          borderRadius: "50%",
          width: 100, // Adjust size as needed
          height: 100, // Adjust size as needed
          minWidth: 0, // Remove default minWidth
          padding: 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#5865F2",
          "&:hover": { backgroundColor: "#4752C4" },
          color: "#FFFFFF",
        }}
      >
        <Avatar
          sx={{
            width: 60, 
            height: 60,
            backgroundColor: "#4752C4",
          }}
        >
          <PersonIcon sx={{ fontSize: 40 }} /> {/* Profile icon */}
        </Avatar>
      </Button>

      {/* Label for profile button */}
      <Typography variant="body1" sx={{ marginTop: 2, color: "#333" }}>
        My Profile
      </Typography>

      {/* Other dashboard components or sections can go here */}
      
    </Box>
  );
};

export default Dashboard;
