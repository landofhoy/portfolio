import React from 'react';
import { Container, Typography, Box, Paper, Button } from '@mui/material';
import ScrollAnimation from '../components/ScrollAnimation';
import DescriptionIcon from '@mui/icons-material/Description';

const skills = [
  'Product Management',
  'User Research',
  'Data Analysis',
  'Agile Development',
  'Cross-functional Leadership'
];

const About = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 8 }}>
        <ScrollAnimation>
          <Typography variant="h2" gutterBottom>
            About Me
          </Typography>
        </ScrollAnimation>

        <ScrollAnimation delay={0.2}>
          <Paper
            sx={{
              p: 4,
              mb: 6,
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <Typography variant="body1" paragraph>
              Hi, I'm Matthew Hoyland — a Product Manager with a passion for building intuitive, data-backed digital experiences that solve real problems.
            </Typography>
            <Typography variant="body1" paragraph>
              Born and raised in Canada, I moved to New York for high school, headed back to Toronto for university, and eventually made my way back to NYC, where I now help shape the future of B2B eCommerce at Festo. My career has grown from intern to Associate Product Manager, and that path has kept me grounded in what matters most: the customer.
            </Typography>
            <Typography variant="body1">
              With an education in Chemistry, I bring a unique lens to product development — one that's curious, methodical, and deeply analytical. Whether it's uncovering friction points in complex order flows or building a new internal tool from the ground up, I use data to inform my decisions and cross-functional collaboration to drive results.
            </Typography>
          </Paper>
        </ScrollAnimation>

        <ScrollAnimation delay={0.4}>
          <Typography variant="h3" gutterBottom>
            Skills
          </Typography>
          <Paper
            sx={{
              p: 4,
              mb: 6,
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
              {skills.map((skill) => (
                <Typography
                  key={skill}
                  variant="body1"
                  sx={{
                    px: 2,
                    py: 1,
                    borderRadius: 1,
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  }}
                >
                  {skill}
                </Typography>
              ))}
            </Box>
          </Paper>
        </ScrollAnimation>

        <ScrollAnimation delay={0.6}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="contained"
              startIcon={<DescriptionIcon />}
              href="/Matthew Hoyland Resume for Website.pdf"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                px: 4,
                py: 1.5,
                fontSize: '1rem',
                backgroundColor: 'white',
                color: 'black',
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.9)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                },
              }}
            >
              View Resume
            </Button>
          </Box>
        </ScrollAnimation>
      </Box>
    </Container>
  );
};

export default About; 