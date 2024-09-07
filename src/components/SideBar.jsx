import React from 'react';
import { Drawer, List, ListItem, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';

const servers = [
  { name: 'S1', path: '/' },
  { name: 'S2', path: '/chat' },
  { name: 'S3', path: '/settings' },
];

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 100,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 100,
          backgroundColor: '#2f3136',
          boxSizing: 'border-box',
          // Create the custom shape
          borderRadius: '0 20px 20px 0', // Curved right border
          overflow: 'hidden', // Prevent content from overflowing
        },
      }}
    >
      {/* This is the sidebar content */}
      <div
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '10px 0',
        }}
      >
        <List>
          {servers.map((server, index) => (
            <ListItem key={index} sx={{ justifyContent: 'center' }}>
              <Link to={server.path}>
                <Avatar
                  sx={{
                    width: 50,
                    height: 50,
                    bgcolor: '#5865F2', // Discord-like blue color
                    cursor: 'pointer',
                    marginBottom: '20px', // Space between circles
                    '&:hover': {
                      backgroundColor: '#7289da', // Darker on hover
                    },
                  }}
                >
                  {server.name[0]} {/* First letter as server name */}
                </Avatar>
              </Link>
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  );
};

export default Sidebar;
