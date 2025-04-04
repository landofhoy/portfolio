import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ScrollAnimation from '../components/ScrollAnimation';

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <ScrollAnimation>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '3rem', md: '5rem' },
              mb: 2,
              letterSpacing: '-0.02em',
              fontWeight: 700,
              color: 'white',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            }}
          >
            Matthew Hoyland
          </Typography>
        </ScrollAnimation>

        <ScrollAnimation delay={0.2}>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.5rem', md: '2.5rem' },
              mb: 6,
              letterSpacing: '-0.02em',
              color: 'text.secondary',
              fontWeight: 400,
            }}
          >
            Product Manager
          </Typography>
        </ScrollAnimation>

        <ScrollAnimation delay={0.4}>
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Button
              component={Link}
              to="/projects"
              variant="contained"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                backgroundColor: 'white',
                color: 'black',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                },
              }}
            >
              View My Work
            </Button>
            <Button
              component={Link}
              to="/contact"
              variant="outlined"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                borderColor: 'white',
                color: 'white',
                '&:hover': {
                  borderColor: 'white',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                },
              }}
            >
              Get in Touch
            </Button>
          </Box>
        </ScrollAnimation>
      </Box>
    </Container>
  );
};

export default Home; 