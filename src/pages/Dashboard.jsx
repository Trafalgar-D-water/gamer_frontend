import React from "react";
import { Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

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
        padding: 3,
        backgroundColor: "#f0f0f0",
        height: "100vh",
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: 3 }}>
        
      </Typography>
      {/* Other dashboard components go here */}

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
        <Typography variant=" ">myProfile</Typography>{" "}
        {/* Profile icon or letter */}
      </Button>
    </Box>
  );
};

export default Dashboard;
