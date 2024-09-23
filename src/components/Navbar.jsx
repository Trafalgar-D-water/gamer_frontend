import React, {useState} from 'react'
import { AppBar, Toolbar, Box, Button, Typography, Link, Drawer, List, ListItem, ListItemText } from '@mui/material'
import { createStyles, makeStyles } from '@mui/styles';
import { useMediaQuery,useTheme } from '@mui/material';
import { useNavigate } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';

export const Navbar = () => {
  const classes = useStyles();  
  const navigate = useNavigate();
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const [open, setOpen] = useState(false);

  const handleMenuToggle =() => {
    setOpen(!open)
  }
  const handleClose =() =>[
    setOpen(false)
  ]

  return (
    <AppBar sx={{boxShadow: 'none'}} position='static' color='transparent'>
        <Toolbar>
            <Box sx={{flexGrow: 1}}>
            <img src='logo' alt='logo' />
            </Box>

            {!isSmallScreen 
            ? (
            <Box className={classes.navItems}>
            <Box>
                <Link color='black' underline='none' mr={2} href='/'>Home</Link>
                <Link color='black' underline='none' mr={2} href='/about'>About</Link>
                <Link color='black' underline='none' mr={2} href='/discover'>Discover</Link>
                <Link color='black' underline='none' mr={2} href='/contacts'>Contacts</Link>
                <Link color='black' underline='none' mr={2} href='/careers'>Careers</Link>
            </Box>
            <Button variant="contained" onClick={() => navigate("/signup")}>Login</Button>
            </Box>
            )
            : (
            <MenuIcon onClick={handleMenuToggle} />
            )
            }
        </Toolbar>

        <Drawer
        anchor='right'
        open={open}
        onClose={handleClose}
        sx={{ width: 250, backgroundColor: 'white' }}
      >
        <Box
          sx={{ width: 250, padding: 2, backgroundColor: 'white' }}
          role="presentation"
        >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
            <IconButton onClick={handleClose} color="inherit">
              <CloseIcon />
            </IconButton>
          </Box>

          <List>
            <ListItem button component="a" href="/">Home</ListItem>
            <ListItem button component="a" href="/about">About</ListItem>
            <ListItem button component="a" href="/discover">Discover</ListItem>
            <ListItem button component="a" href="/contacts">Contacts</ListItem>
            <ListItem button component="a" href="/careers">Careers</ListItem>
            <ListItem>
              <Button variant="contained" fullWidth onClick={() => navigate("/signup")}>Login</Button>
            </ListItem>
          </List>
        </Box>
      </Drawer>

    </AppBar>
  )
}

const useStyles = makeStyles(() => {
    return (
        createStyles({    
        navItems:{
            width: '100%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxShadow: 'none'
        },
    })
)
})
