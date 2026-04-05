import React from 'react';
import { Container, Typography, Box, Paper, Button } from '@mui/material';
import ScrollAnimation from '../components/ScrollAnimation';
import DescriptionIcon from '@mui/icons-material/Description';

const principles = [
  {
    title: 'Start with the customer problem',
    body: 'Before anything else, I look for where friction actually lives — combining direct customer feedback with behavioral data to understand the real problem, not just the reported one.',
  },
  {
    title: 'Connect problems to business outcomes',
    body: 'Every initiative gets evaluated against measurable goals. If I can\'t draw a clear line from customer pain to business value, I question whether it\'s worth building.',
  },
  {
    title: 'Bring energy to the team',
    body: 'Product is a team sport. I believe genuine enthusiasm, clear communication, and a user-first mindset are what turn good ideas into shipped features people actually use.',
  },
];

const tools = [
  'Figma',
  'CodeBeamer',
  'Notion',
  'PowerBI',
  'MS Office',
  'Econda',
  'Hotjar',
  'SAP',
];

const skills = [
  'Product Discovery',
  'User Research',
  'Data Analysis',
  'Agile / Scrum',
  'Roadmapping',
  'Stakeholder Management',
  'A/B Testing',
  'Cross-functional Leadership',
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
              I'm a Product Manager with 4 years of experience in B2B eCommerce, currently at Festo — a German multinational operating a €1B+ digital commerce platform across 70 countries. I focus on solving customer friction to drive measurable revenue growth and operational efficiency.
            </Typography>
            <Typography variant="body1" paragraph>
              Born and raised in Canada, I moved to New York for high school, headed back to Toronto for university, and eventually made my way back to NYC. My career has grown from intern to Product Manager at Festo, a path that has kept me grounded in what matters most: the customer.
            </Typography>
            <Typography variant="body1">
              I bring a uniquely analytical lens to product development — curious, methodical, and data-driven. Whether uncovering friction points in complex order flows or building internal tools from the ground up, I use data to inform decisions and cross-functional collaboration to drive results.
            </Typography>
          </Paper>
        </ScrollAnimation>

        <ScrollAnimation delay={0.4}>
          <Typography variant="h3" gutterBottom>
            How I Work
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 2, mb: 6 }}>
            {principles.map((p) => (
              <Box
                key={p.title}
                sx={{
                  flex: 1,
                  p: 3,
                  borderRadius: 2,
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1 }}>
                  {p.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {p.body}
                </Typography>
              </Box>
            ))}
          </Box>
        </ScrollAnimation>

        <ScrollAnimation delay={0.6}>
          <Typography variant="h3" gutterBottom>
            Skills & Tools
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
            <Typography variant="overline" sx={{ color: 'text.secondary', letterSpacing: '0.1em' }}>
              Tools
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mt: 1, mb: 3 }}>
              {tools.map((tool) => (
                <Typography
                  key={tool}
                  variant="body2"
                  sx={{
                    px: 2,
                    py: 0.75,
                    borderRadius: 1,
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255,255,255,0.15)',
                  }}
                >
                  {tool}
                </Typography>
              ))}
            </Box>
            <Typography variant="overline" sx={{ color: 'text.secondary', letterSpacing: '0.1em' }}>
              Methods
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mt: 1 }}>
              {skills.map((skill) => (
                <Typography
                  key={skill}
                  variant="body2"
                  sx={{
                    px: 2,
                    py: 0.75,
                    borderRadius: 1,
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                  }}
                >
                  {skill}
                </Typography>
              ))}
            </Box>
          </Paper>
        </ScrollAnimation>

        <ScrollAnimation delay={0.8}>
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