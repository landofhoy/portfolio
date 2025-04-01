import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Box,
  Snackbar,
  Alert,
  Paper,
} from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import CustomGrid from '../components/CustomGrid';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success' as 'success' | 'error',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    setSnackbar({
      open: true,
      message: 'Message sent successfully!',
      severity: 'success',
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 4 }}>
        <Typography
          variant="h2"
          component={motion.h2}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          gutterBottom
        >
          Contact Me
        </Typography>
        <CustomGrid container spacing={4}>
          <CustomGrid xs={12} md={6} item>
            <Paper
              component={motion.div}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              sx={{ p: 3, height: '100%' }}
            >
              <Typography variant="h5" gutterBottom>
                Get in Touch
              </Typography>
              <form onSubmit={handleSubmit}>
                <TextField
                  fullWidth
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  margin="normal"
                  required
                />
                <TextField
                  fullWidth
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  margin="normal"
                  required
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
                  required
                />
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  sx={{ mt: 2 }}
                >
                  Send Message
                </Button>
              </form>
            </Paper>
          </CustomGrid>
          <CustomGrid xs={12} md={6} item>
            <Paper
              component={motion.div}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              sx={{ p: 3, height: '100%' }}
            >
              <Typography variant="h5" gutterBottom>
                Connect With Me
              </Typography>
              <Box sx={{ mt: 4 }}>
                <Typography variant="body1" paragraph>
                  Email: mthoyland@gmail.com
                </Typography>
                <Typography variant="body1" paragraph>
                  Location: Brooklyn, NY
                </Typography>
                <Typography variant="body1" paragraph>
                  Phone: 631-413-0818
                </Typography>
              </Box>
              <Box sx={{ mt: 4 }}>
                <Typography variant="h6" gutterBottom>
                  Social Links
                </Typography>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Button
                    href="https://www.linkedin.com/in/matthewhoyland/"
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<LinkedInIcon />}
                    variant="outlined"
                  >
                    LinkedIn
                  </Button>
                  <Button
                    href="mailto:mthoyland@gmail.com"
                    startIcon={<EmailIcon />}
                    variant="outlined"
                  >
                    Email
                  </Button>
                </Box>
              </Box>
            </Paper>
          </CustomGrid>
        </CustomGrid>
        <Snackbar
          open={snackbar.open}
          autoHideDuration={6000}
          onClose={handleCloseSnackbar}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbar.severity}
            sx={{ width: '100%' }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Box>
    </Container>
  );
};

export default Contact; 