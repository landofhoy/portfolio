import React from 'react';
import { Container, Typography, Box, Button, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';

const projects = [
  {
    title: 'Quotation Flexibility Initiative',
    role: 'Associate Product Manager',
    duration: 'Jan 2022 – Present',
    company: 'Festo',
    problem: 'Customers were losing access to discounted pricing due to the expiration of previously issued quotations, leading to abandoned carts and lost revenue.',
    approach: [
      'Analyzed customer ordering patterns',
      'Collaborated with sales and IT teams',
      'Identified ways to preserve pricing integrity without manual intervention',
    ],
    solution: 'Implemented a system allowing customers to reuse previously issued quotations during checkout.',
    outcomes: [
      'Increased online sales by 7%',
      'Reduced quote expirations by 30%',
    ],
  },
  {
    title: 'Quantity Contracts Digitization',
    role: 'Associate Product Manager',
    duration: 'Jan 2022 – Present',
    company: 'Festo',
    problem: 'Sales agents were spending excessive time manually referencing past orders for recurring purchases.',
    approach: [
      'Gathered feedback from sales teams',
      'Mapped manual workflows',
      'Identified automation opportunities',
    ],
    solution: 'Designed and launched a digital process for referencing quantity contracts directly within the eCommerce platform.',
    outcomes: [
      'Saved agents up to 15 hours per week',
      'Increased online sales by 10%',
    ],
  },
  {
    title: 'Enhanced PO Upload with AI/OCR',
    role: 'Associate Product Manager',
    duration: 'Jan 2022 – Present',
    company: 'Festo',
    problem: 'Manual processing of purchase orders was slow and error-prone, affecting order turnaround time and customer satisfaction.',
    approach: [
      'Explored intelligent document recognition technologies',
      'Coordinated with engineering to test OCR models',
    ],
    solution: 'Implemented an AI/OCR-based tool for purchase order uploads, enabling faster, more accurate processing.',
    outcomes: [
      'Projected to boost online sales by 15%',
    ],
  },
  {
    title: 'Enhanced Configurators Expansion',
    role: 'Associate Product Manager',
    duration: 'Jan 2022 – Present',
    company: 'Festo',
    problem: 'Limited configurator hosting capabilities were restricting partner sales and customer access to customized components.',
    approach: [
      'Partnered with the sales enablement team',
      'Analyzed hosting limitations',
      'Developed expansion strategy for partner channels',
    ],
    solution: 'Scaled the configurator platform to include partner channels.',
    outcomes: [
      'Increased configurable material sales by 10%',
    ],
  },
  {
    title: 'Distribution Portal Localization',
    role: 'Associate Product Manager',
    duration: 'Jan 2022 – Present',
    company: 'Festo',
    problem: 'Key B2B distributors lacked a centralized access point for customer-specific data, leading to inefficiencies.',
    approach: [
      'Worked closely with regional stakeholders',
      'Identified localization requirements',
      'Mapped usability improvements',
    ],
    solution: 'Localized and centralized the Distribution Portal tailored to Festo\'s largest B2B segment.',
    outcomes: [
      'Reduced manual workload for distributors',
      'Improved distributor satisfaction and efficiency',
    ],
  },
  {
    title: 'Strategic Couponing Initiative',
    role: 'Associate Product Manager',
    duration: 'Jan 2022 – Present',
    company: 'Festo',
    problem: 'Retention among strategic customer segments was stagnating, and some high-value product groups were underperforming.',
    approach: [
      'Segmented customer groups',
      'Aligned coupon incentives with underperforming SKUs',
    ],
    solution: 'Launched a couponing initiative targeting specific customer/product combinations.',
    outcomes: [
      'Projected 15% increase in sales within targeted product groups',
    ],
  },
  {
    title: 'Material Activation App',
    role: 'Associate Product Manager',
    duration: 'Jan 2022 – Present',
    company: 'Festo',
    problem: 'Material activation was a bottleneck in product go-to-market, with a backlog and delays up to 3 weeks.',
    approach: [
      'Mapped the manual process',
      'Designed an internal tool to streamline workflows',
      'Reduced lead time through process optimization',
    ],
    solution: 'Developed and deployed a Material Activation App.',
    outcomes: [
      'Reduced backlog by 70%',
      'Cut activation time from 3 weeks to 1 week',
    ],
  },
];

const Projects = () => {
  return (
    <Container maxWidth="lg">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '2rem', md: '2.5rem' },
            mb: 6,
            letterSpacing: '-0.02em',
          }}
        >
          Selected Work
        </Typography>
      </motion.div>

      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
        >
          <Box sx={{ mb: 12 }}>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '1.75rem', md: '2rem' },
                mb: 2,
                letterSpacing: '-0.02em',
              }}
            >
              {project.title}
            </Typography>
            
            <Box sx={{ mb: 4 }}>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                {project.company} – {project.role} | {project.duration}
              </Typography>
            </Box>

            <Box sx={{ mb: 6 }}>
              <Typography variant="h3" sx={{ fontSize: '1.25rem', mb: 2 }}>
                Problem
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                {project.problem}
              </Typography>

              <Typography variant="h3" sx={{ fontSize: '1.25rem', mb: 2 }}>
                Approach
              </Typography>
              <Box component="ul" sx={{ pl: 2, mb: 4 }}>
                {project.approach.map((step, i) => (
                  <Typography
                    key={i}
                    component="li"
                    variant="body1"
                    color="text.secondary"
                    sx={{ mb: 1 }}
                  >
                    {step}
                  </Typography>
                ))}
              </Box>

              <Typography variant="h3" sx={{ fontSize: '1.25rem', mb: 2 }}>
                Solution
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                {project.solution}
              </Typography>

              <Typography variant="h3" sx={{ fontSize: '1.25rem', mb: 2 }}>
                Outcomes
              </Typography>
              <Box component="ul" sx={{ pl: 2, mb: 4 }}>
                {project.outcomes.map((outcome, i) => (
                  <Typography
                    key={i}
                    component="li"
                    variant="body1"
                    color="text.secondary"
                    sx={{ mb: 1 }}
                  >
                    {outcome}
                  </Typography>
                ))}
              </Box>
            </Box>
          </Box>
          {index < projects.length - 1 && (
            <Divider sx={{ my: 8, borderColor: 'rgba(255, 255, 255, 0.1)' }} />
          )}
        </motion.div>
      ))}
    </Container>
  );
};

export default Projects; 