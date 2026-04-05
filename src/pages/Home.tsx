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
          pt: { xs: 8, md: 4 },
          pb: { xs: 8, md: 4 },
        }}
      >
        <ScrollAnimation>
          <Box
            sx={{
              width: { xs: 140, md: 190 },
              height: { xs: 140, md: 190 },
              borderRadius: '50%',
              overflow: 'hidden',
              mb: 3,
              border: '3px solid rgba(58, 120, 201, 0.5)',
              flexShrink: 0,
            }}
          >
            <Box
              component="img"
              src="/headshot.jpg"
              alt="Matthew Hoyland"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center 20%',
                display: 'block',
                imageRendering: 'auto',
              }}
            />
          </Box>
        </ScrollAnimation>

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
              fontSize: { xs: '1.25rem', md: '1.75rem' },
              mb: 2,
              letterSpacing: '-0.02em',
              color: 'text.secondary',
              fontWeight: 400,
            }}
          >
            Product Manager - eCommerce Platform
          </Typography>
        </ScrollAnimation>

        <ScrollAnimation delay={0.3}>
          <Typography
            variant="h3"
            sx={{
              fontSize: { xs: '1rem', md: '1.25rem' },
              mb: 6,
              letterSpacing: '-0.01em',
              color: 'text.secondary',
              fontWeight: 400,
              fontStyle: 'italic',
            }}
          >
            Solving customer friction to unlock revenue growth and operational efficiency
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
                backgroundColor: 'primary.main',
                color: 'white',
                '&:hover': {
                  backgroundColor: '#2d67b8',
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