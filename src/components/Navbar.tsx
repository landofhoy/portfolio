import React from 'react';
import { Link } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
} from '@mui/material';

const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        background: 'transparent',
        boxShadow: 'none',
      }}
    >
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/home"
          sx={{
            flexGrow: 1,
            textDecoration: 'none',
            color: 'white',
            fontWeight: 400,
          }}
        >
          Matthew Hoyland
        </Typography>
        <Box sx={{ display: 'flex', gap: 4 }}>
          <Button
            component={Link}
            to="/projects"
            sx={{ color: 'white', textTransform: 'none' }}
          >
            Work
          </Button>
          <Button
            component={Link}
            to="/about"
            sx={{ color: 'white', textTransform: 'none' }}
          >
            About
          </Button>
          <Button
            component={Link}
            to="/contact"
            sx={{ color: 'white', textTransform: 'none' }}
          >
            Connect
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 