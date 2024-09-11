import React, { useState } from 'react';
import { Box, Typography, Button, Avatar, Card, CardContent, Grid, List, ListItem, ListItemText, TextField } from '@mui/material';

// Dummy data
const initialProfile = {
  username: 'JohnDoe',
  avatar: 'https://via.placeholder.com/100',
  bio: 'Gamer and Coach.',
  gamePreferences: [
    { gameName: 'Valorant', preferredRole: 'Duelist', rank: 'Platinum' },
    { gameName: 'League of Legends', preferredRole: 'Support', rank: 'Gold' },
  ],
  friends: [
    { username: 'Alice', status: 'online', avatar: 'https://via.placeholder.com/50' },
    { username: 'Bob', status: 'offline', avatar: 'https://via.placeholder.com/50' },
  ],
};

const ProfilePage = () => {
  const [profile, setProfile] = useState(initialProfile);
  const [isEditing, setIsEditing] = useState(false);
  
  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // Save profile logic here, such as API calls or dispatching Redux actions
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prevProfile => ({
      ...prevProfile,
      [name]: value
    }));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 3,
        backgroundColor: '#f0f0f0',
        height: '100vh',
      }}
    >
      <Typography variant="h4" sx={{ marginBottom: 3 }}>
        Profile Page
      </Typography>
      <Avatar
        src={profile.avatar}
        sx={{ width: 100, height: 100, marginBottom: 2 }}
      />
      
      {isEditing ? (
        <TextField
          name="username"
          value={profile.username}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
        />
      ) : (
        <Typography variant="h5">{profile.username}</Typography>
      )}
      
      {isEditing ? (
        <TextField
          name="bio"
          value={profile.bio}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
          multiline
          rows={4}
        />
      ) : (
        <Typography variant="body1" sx={{ marginBottom: 2 }}>
          {profile.bio || 'No bio available'}
        </Typography>
      )}
      
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        Game Preferences
      </Typography>
      <Grid container spacing={2} sx={{ marginBottom: 3 }}>
        {profile.gamePreferences.map((game, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{game.gameName}</Typography>
                <Typography variant="body2">Preferred Role: {game.preferredRole || 'N/A'}</Typography>
                <Typography variant="body2">Rank: {game.rank || 'N/A'}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        Friends
      </Typography>
      <List>
        {profile.friends.filter(friend => friend.status === 'online').map((friend, index) => (
          <ListItem key={index}>
            <Avatar src={friend.avatar} sx={{ marginRight: 2 }} />
            <ListItemText primary={friend.username} secondary={`Status: ${friend.status}`} />
          </ListItem>
        ))}
      </List>

      <Button
        onClick={isEditing ? handleSaveClick : handleEditClick}
        variant="contained"
        sx={{
          borderRadius: '4px',
          backgroundColor: '#5865F2',
          '&:hover': { backgroundColor: '#4752C4' },
          color: '#FFFFFF',
        }}
      >
        {isEditing ? 'Save' : 'Edit'}
      </Button>
    </Box>
  );
};

export default ProfilePage;
