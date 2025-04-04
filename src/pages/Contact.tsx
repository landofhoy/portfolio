import React, { useState } from 'react';
import { Container, Typography, Box, TextField, Button, Paper, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import ScrollAnimation from '../components/ScrollAnimation';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

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

      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
        <ScrollAnimation delay={0.1}>
          <Paper
            sx={{
              p: 4,
              flex: 1,
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: '0 8px 16px rgba(0,0,0,0.2)',
              },
            }}
          >
            <Typography variant="h2" sx={{ mb: 4, fontSize: '1.75rem' }}>
              Send a Message
            </Typography>
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                margin="normal"
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                margin="normal"
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Message"
                name="message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange}
                margin="normal"
                sx={{ mb: 3 }}
              />
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{
                  width: '100%',
                  py: 1.5,
                  transition: 'all 0.2s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                  },
                }}
              >
                Send Message
              </Button>
            </form>
          </Paper>
        </ScrollAnimation>

        <ScrollAnimation delay={0.2}>
          <Paper
            sx={{
              p: 4,
              flex: 1,
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
            <Typography variant="h2" sx={{ mb: 4, fontSize: '1.75rem' }}>
              Connect With Me
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mt: 4 }}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<GitHubIcon />}
                href="https://github.com/landofhoy"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </Button>
              <Button
                variant="contained"
                color="primary"
                startIcon={<LinkedInIcon />}
                href="https://www.linkedin.com/in/matthew-hoyland/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Button>
              <Button
                variant="contained"
                color="primary"
                startIcon={<EmailIcon />}
                href="mailto:mthoyland@gmail.com"
              >
                Email
              </Button>
            </Box>
            <Typography variant="body1" align="center" color="text.secondary">
              Feel free to reach out through any of these channels. I'm always open to discussing new opportunities, collaborations, or just having a chat about technology and product management.
            </Typography>
          </Paper>
        </ScrollAnimation>
      </Box>
    </Container>
  );
};

export default Contact; 