import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Box,
  Chip,
  Divider,
} from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import CustomGrid from '../components/CustomGrid';

interface Project {
  title: string;
  description: string;
  githubLink: string;
  demoLink: string;
  tags: string[];
}

const professionalProjects: Project[] = [
  {
    title: 'Quotation Flexibility Initiative',
    description: 'Enabled customers to retain discounted pricing with previously used quotations, achieving a 7% growth in online sales and reducing quote expirations by 30%.',
    githubLink: '#',
    demoLink: '#',
    tags: ['Product Management', 'B2B', 'Sales Growth'],
  },
  {
    title: 'Quantity Contracts Process',
    description: 'Designed and launched a digital order referencing system for customers, saving agents up to 15 hours weekly and resulting in a 10% increase in online sales.',
    githubLink: '#',
    demoLink: '#',
    tags: ['Process Optimization', 'Digital Transformation', 'Efficiency'],
  },
  {
    title: 'AI/OCR Enhanced PO Upload',
    description: 'Implemented an AI/OCR-based system for efficient order processing, projected to boost online sales by 15% through improved accuracy and speed.',
    githubLink: '#',
    demoLink: '#',
    tags: ['AI/ML', 'OCR', 'Automation'],
  },
  {
    title: 'Enhanced Configurators',
    description: 'Managed the expansion of configurator hosting with sales partners, driving a 10% growth in configurable material sales.',
    githubLink: '#',
    demoLink: '#',
    tags: ['Product Configuration', 'Partner Integration', 'Sales Growth'],
  },
  {
    title: 'Distribution Portal Localization',
    description: 'Localized the Distribution Portal for Festo\'s largest B2B segment, centralizing essential customer information and reducing manual efforts.',
    githubLink: '#',
    demoLink: '#',
    tags: ['Localization', 'B2B', 'User Experience'],
  },
  {
    title: 'Material Activation App',
    description: 'Designed and deployed an application that reduced backlog by 70% and cut material activation time from 3 weeks to 1 week.',
    githubLink: '#',
    demoLink: '#',
    tags: ['Process Improvement', 'Efficiency', 'Digital Tools'],
  },
];

const personalProjects: Project[] = [
  // Add personal projects here as they are created
];

const ProjectSection = ({ title, projects }: { title: string; projects: Project[] }) => (
  <Box sx={{ mb: 6 }}>
    <Typography
      variant="h3"
      component={motion.h3}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      gutterBottom
    >
      {title}
    </Typography>
    <CustomGrid container spacing={4}>
      {projects.map((project, index) => (
        <CustomGrid xs={12} sm={6} md={4} item key={project.title}>
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {project.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" paragraph>
                  {project.description}
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 2 }}>
                  {project.tags.map((tag) => (
                    <Chip key={tag} label={tag} size="small" />
                  ))}
                </Box>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  startIcon={<GitHubIcon />}
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </Button>
                <Button
                  size="small"
                  startIcon={<LaunchIcon />}
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Demo
                </Button>
              </CardActions>
            </Card>
          </Box>
        </CustomGrid>
      ))}
    </CustomGrid>
  </Box>
);

const Projects = () => {
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
          Projects & Achievements
        </Typography>
        <ProjectSection title="Professional Projects" projects={professionalProjects} />
        <Divider sx={{ my: 4 }} />
        <ProjectSection title="Personal Projects" projects={personalProjects} />
      </Box>
    </Container>
  );
};

export default Projects; 