import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';

const Home = () => {
  return (
    <Container maxWidth="md">
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        sx={{
          textAlign: 'center',
          py: 8,
        }}
      >
        <Typography
          variant="h1"
          component={motion.h1}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          gutterBottom
        >
          Matthew Hoyland
        </Typography>
        <Typography
          variant="h5"
          component={motion.h5}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          color="text.secondary"
          gutterBottom
        >
          Product Manager
        </Typography>
        <Typography
          variant="body1"
          component={motion.p}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          sx={{ maxWidth: '800px', mx: 'auto', mb: 4 }}
        >
          Innovative Product Manager with a passion for creating intuitive digital experiences and driving growth
          in dynamic environments. Expertise in Product Roadmapping, Data-Driven Decision-Making, and
          Cross-Functional Collaboration, with a proven track record of delivering impactful solutions and
          optimizing user satisfaction in B2B and digital-first platforms.
        </Typography>
        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <Button
            component={RouterLink}
            to="/projects"
            variant="contained"
            size="large"
            sx={{ mr: 2 }}
          >
            View Projects
          </Button>
          <Button
            component={RouterLink}
            to="/contact"
            variant="outlined"
            size="large"
          >
            Contact Me
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Home; 