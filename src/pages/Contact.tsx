import React from 'react';
import { Container, Typography, Box, Button, Paper } from '@mui/material';
import ScrollAnimation from '../components/ScrollAnimation';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  return (
    <Container maxWidth="lg">
      <ScrollAnimation>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2rem', md: '2.5rem' },
            mb: 6,
            letterSpacing: '-0.02em',
          }}
        >
          Get in Touch
        </Typography>
      </ScrollAnimation>

      <ScrollAnimation delay={0.1}>
        <Paper
          sx={{
            p: 6,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease-in-out',
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
            },
          }}
        >
          <Typography variant="h2" sx={{ mb: 6, fontSize: '1.75rem' }}>
            Connect With Me
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', mb: 6 }}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<LinkedInIcon />}
              href="https://www.linkedin.com/in/matthewhoyland/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                },
              }}
            >
              LinkedIn
            </Button>
            <Button
              variant="contained"
              color="primary"
              startIcon={<EmailIcon />}
              href="mailto:mthoyland@gmail.com"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                },
              }}
            >
              Email
            </Button>
            <Button
              variant="contained"
              color="primary"
              startIcon={<GitHubIcon />}
              href="https://github.com/landofhoy"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                },
              }}
            >
              GitHub
            </Button>
          </Box>
          
          <Typography variant="body1" align="center" color="text.secondary" sx={{ maxWidth: '600px' }}>
            Feel free to reach out through any of these channels. I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and product management.
          </Typography>
        </Paper>
      </ScrollAnimation>
    </Container>
  );
};

export default Contact; 