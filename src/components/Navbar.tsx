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
      position="sticky" 
      elevation={0}
      sx={{ 
        backgroundColor: 'transparent',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between' }}>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{
            color: 'text.primary',
            textDecoration: 'none',
            fontWeight: 500,
            '&:hover': {
              color: 'primary.main',
            },
          }}
        >
          Matthew Hoyland
        </Typography>

        <Box sx={{ display: 'flex', gap: 4 }}>
          <Button
            color="inherit"
            component={Link}
            to="/projects"
            sx={{ 
              '&:hover': { color: 'primary.main' },
              textTransform: 'none',
              fontWeight: 400,
            }}
          >
            Work
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/about"
            sx={{ 
              '&:hover': { color: 'primary.main' },
              textTransform: 'none',
              fontWeight: 400,
            }}
          >
            About
          </Button>
          <Button
            color="inherit"
            component={Link}
            to="/contact"
            sx={{ 
              '&:hover': { color: 'primary.main' },
              textTransform: 'none',
              fontWeight: 400,
            }}
          >
            Connect
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar; 