import React from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
export const WelcomePage = () => {
  // This page contains a login button
  const navigate = useNavigate();
  return (
    <Button variant="contained" onClick={() => navigate("/signup")}>
      Login
    </Button>
  );
};
