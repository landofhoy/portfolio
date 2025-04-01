import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          minHeight: '80vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          gap: 4,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              mb: 2,
              letterSpacing: '-0.02em',
            }}
          >
            Matthew Hoyland
          </Typography>
          <Typography
            variant="h2"
            color="text.secondary"
            sx={{
              fontSize: { xs: '1.5rem', md: '2rem' },
              mb: 4,
              letterSpacing: '-0.02em',
            }}
          >
            Product Manager
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              maxWidth: '600px',
              mb: 4,
              lineHeight: 1.8,
            }}
          >
            I specialize in building innovative products that solve real user problems. 
            With experience in product strategy, user research, and agile development, 
            I help teams deliver impactful solutions that drive business growth.
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Box sx={{ display: 'flex', gap: 4 }}>
            <Button
              component={Link}
              to="/projects"
              variant="text"
              color="primary"
              sx={{
                fontSize: '1.125rem',
                fontWeight: 400,
                '&:hover': {
                  backgroundColor: 'transparent',
                  textDecoration: 'underline',
                },
              }}
            >
              View My Work
            </Button>
            <Button
              component={Link}
              to="/about"
              variant="text"
              color="primary"
              sx={{
                fontSize: '1.125rem',
                fontWeight: 400,
                '&:hover': {
                  backgroundColor: 'transparent',
                  textDecoration: 'underline',
                },
              }}
            >
              About Me
            </Button>
          </Box>
        </motion.div>
      </Box>

      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        sx={{
          position: 'absolute',
          bottom: { xs: 4, md: 8 },
          left: { xs: 4, md: 8 },
        }}
      >
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ fontWeight: 400 }}
        >
          Based in Brooklyn, NY
        </Typography>
      </Box>
    </Container>
  );
};

export default Home; 