import React from 'react';
import { Container, Typography, Grid, Paper, Box, LinearProgress } from '@mui/material';
import { motion } from 'framer-motion';
import CustomGrid from '../components/CustomGrid';

const skills = [
  { name: 'Product Management', level: 95 },
  { name: 'Agile & Scrum', level: 90 },
  { name: 'A/B Testing', level: 85 },
  { name: 'Product Lifecycle Management', level: 90 },
  { name: 'User-Centered Design', level: 85 },
  { name: 'Project Management', level: 90 },
  { name: 'Technical Tools', level: 85 },
  { name: 'Stakeholder Communication', level: 95 },
];

const About = () => {
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
          About Me
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
                Experience
              </Typography>
              <Typography variant="h6" gutterBottom>
                Festo - Associate Product Manager
              </Typography>
              <Typography variant="subtitle1" color="text.secondary" gutterBottom>
                January 2022 - Present
              </Typography>
              <Typography variant="body1" paragraph>
                • Spearheaded the Quotation Flexibility initiative, enabling customers to retain discounted pricing
                with previously used quotations. Achieved a 7% growth in online sales and reduced quote
                expirations by 30%.
              </Typography>
              <Typography variant="body1" paragraph>
                • Designed and launched the Quantity Contracts process, digitizing order referencing for customers
                and saving agents up to 15 hours weekly. Resulted in a 10% increase in online sales.
              </Typography>
              <Typography variant="body1" paragraph>
                • Implemented AI/OCR-based Enhanced PO Upload for efficient order processing, projected to
                boost online sales by 15%.
              </Typography>
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
                Skills
              </Typography>
              {skills.map((skill, index) => (
                <Box key={skill.name} sx={{ mb: 2 }}>
                  <Typography variant="body1" gutterBottom>
                    {skill.name}
                  </Typography>
                  <LinearProgress
                    variant="determinate"
                    value={skill.level}
                    sx={{
                      height: 8,
                      borderRadius: 4,
                      backgroundColor: 'rgba(0, 0, 0, 0.1)',
                      '& .MuiLinearProgress-bar': {
                        borderRadius: 4,
                      },
                    }}
                  />
                </Box>
              ))}
            </Paper>
          </CustomGrid>
        </CustomGrid>
      </Box>
    </Container>
  );
};

export default About; 