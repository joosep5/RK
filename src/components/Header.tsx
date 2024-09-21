// components/Header.tsx
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My App
          </Typography>
          <Button color="inherit" component={NavLink} to="/" sx={{ textDecoration: 'none' }}>
            Home
          </Button>
          <Button color="inherit" component={NavLink} to="/login" sx={{ textDecoration: 'none' }}>
            Login
          </Button>
          <Button color="inherit" component={NavLink} to="/about" sx={{ textDecoration: 'none' }}>
            About
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
