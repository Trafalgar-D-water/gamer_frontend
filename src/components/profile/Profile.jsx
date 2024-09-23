import React, { useState, useEffect } from 'react';
import { Box, Button, TextField } from '@mui/material';
import axios from 'axios';
import apiEndPoints from '../../service/apiConfig';

const Profile = () => {
  // State to manage which field is being edited
  const [isEditing, setIsEditing] = useState({
    username: false,
    role: false,
    bio: false,
  });

  // State to manage profile details
  const [profileDetails, setProfileDetails] = useState({
    username: '',
    role: '',
    theme: '',
    bio: '',
  });

  // Retrieve the JWT token (assuming it's stored in localStorage)
  const token = localStorage.getItem('token'); 
  console.log('this is my token for profile', token);

  // Fetch profile data on component load
  useEffect(() => {
    axios
      .get(apiEndPoints.profile.getAllProfile, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        // Populate profileDetails with data from the API
        const profile = response.data;
        setProfileDetails({
          username: profile.username || 'John Doe',
          role: profile.role.isPlayer ? 'Player' : 'Coach',
          theme: profile.preferences.theme || 'light',
          bio: 'Bio unavailable', // Assuming bio is not in the response, default to 'Bio unavailable'
        });
      })
      .catch((error) => {
        console.error('Error fetching profile:', error);
      });
  }, [token]);

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  // Function to toggle editing state for a specific field
  const toggleEditing = (field) => {
    setIsEditing((prevEditing) => ({
      ...prevEditing,
      [field]: !prevEditing[field],
    }));

    // If saving, make the PUT request to update the specific field
    if (isEditing[field]) {
      axios
        .put(
          '/api/profile/@me',
          { [field]: profileDetails[field] }, 
          {
            headers: {
              Authorization: `Bearer ${token}`,
            }
          }
        )
        .then(() => {
          console.log(`${field} updated successfully!`);
        })
        .catch((error) => {
          console.error(`Error updating ${field}:`, error);
        });
    }
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        backgroundColor: '#212121',
        color: 'white',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 2,
      }}
    >
      <Box
        component="img"
        sx={{
          width: '100%',
          maxHeight: '30vh',
          objectFit: 'cover',
          borderRadius: 2,
          marginBottom: 2,
        }}
        src="https://via.placeholder.com/800x200.png"
        alt="Profile Banner"
      />

      <Box
        sx={{
          width: '100%',
          flex: 1,
          display: 'flex',
          justifyContent: 'space-between',
          backgroundColor: '#333',
          borderRadius: 2,
          padding: 2,
        }}
      >
        <Box
          sx={{
            width: '48%',
            backgroundColor: '#424242',
            borderRadius: 2,
            padding: 2,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <h3>Profile Details</h3>

          {/* Username */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
            {isEditing.username ? (
              <TextField
                label="Username"
                variant="outlined"
                name="username"
                value={profileDetails.username}
                onChange={handleInputChange}
                fullWidth
                sx={{ marginRight: 2 }}
              />
            ) : (
              <p>Username: {profileDetails.username}</p>
            )}
            <Button variant="contained" color="primary" onClick={() => toggleEditing('username')}>
              {isEditing.username ? 'Save' : 'Edit'}
            </Button>
          </Box>

          {/* Role */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
            {isEditing.role ? (
              <TextField
                label="Role"
                variant="outlined"
                name="role"
                value={profileDetails.role}
                onChange={handleInputChange}
                fullWidth
                sx={{ marginRight: 2 }}
              />
            ) : (
              <p>Role: {profileDetails.role}</p>
            )}
            <Button variant="contained" color="primary" onClick={() => toggleEditing('role')}>
              {isEditing.role ? 'Save' : 'Edit'}
            </Button>
          </Box>

          {/* Theme */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
            <p>Theme: {profileDetails.theme}</p>
          </Box>

          {/* Bio */}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 2 }}>
            {isEditing.bio ? (
              <TextField
                label="Bio"
                variant="outlined"
                name="bio"
                value={profileDetails.bio}
                onChange={handleInputChange}
                fullWidth
                sx={{ marginRight: 2 }}
              />
            ) : (
              <p>Bio: {profileDetails.bio}</p>
            )}
            <Button variant="contained" color="primary" onClick={() => toggleEditing('bio')}>
              {isEditing.bio ? 'Save' : 'Edit'}
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Profile;
