import React, { useState } from 'react';
import { Container, Typography, Box, Divider, MobileStepper, IconButton, Card, CardContent } from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import SwipeableViews from 'react-swipeable-views';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import ScrollAnimation from '../components/ScrollAnimation';

const projects = [
  {
    title: 'Quotation Flexibility Initiative',
    role: 'Associate Product Manager',
    company: 'Festo',
    problem: 'Customers frequently lost access to discounted pricing when previously issued quotations expired before purchase, resulting in order abandonment and an overreliance on manual support channels to reinstate pricing.',
    approach: [
      'Identified the issue through a combination of customer support data and direct feedback from sales teams',
      'Drafted an Epic including the business case, success metrics, and detailed requirements',
      'Aligned internal stakeholders (sales, customer service, IT) and collaborated with the APO responsible for the checkout experience to prioritize the initiative',
    ],
    solution: 'Enabled the reuse of quotations at checkout, allowing customers to retain their negotiated pricing even after formal expiration. Supported the creation of user stories, contributed to QA testing, and led internal rollout communications and external feature promotion.',
    outcomes: [
      'Increased online sales by 7%',
      'Reduced quote expirations by 30%',
      'Decreased manual quote reinstatement requests, easing support burden',
    ],
  },
  {
    title: 'Quantity Contracts Digitization',
    role: 'Associate Product Manager',
    company: 'Festo',
    problem: 'Recurring B2B purchases required manual referencing of past orders or contract terms, consuming significant sales agent time and creating friction for repeat buyers.',
    approach: [
      'Analyzed ticket data and gathered input from sales teams highlighting inefficiencies in handling quantity contract orders',
      'Developed an Epic outlining the need for a self-service digital referencing solution, complete with proposed KPIs and customer value justification',
      'Partnered with the APO responsible for account-based pricing to move the Epic into development',
    ],
    solution: 'Digitized the quantity contract referencing process within the eCommerce platform, enabling customers to seamlessly place repeat orders without agent assistance. Participated in story writing, QA testing, and internal/external communication strategies for rollout.',
    outcomes: [
      'Saved agents up to 15 hours per week',
      'Increased online sales by 10%',
      'Improved overall customer satisfaction with order transparency',
    ],
  },
  {
    title: 'Enhanced PO Upload (AI/OCR Integration)',
    role: 'Associate Product Manager',
    company: 'Festo',
    problem: 'Customers submitting purchase orders via PDF or scanned documents often caused delays due to manual processing, misinterpretation, or errors, resulting in slower order fulfillment and higher support load.',
    approach: [
      'Identified order processing inefficiencies through internal data and support feedback',
      'Drafted a business case emphasizing order volume impact and customer friction',
      'Collaborated with the APO for ordering workflow to prioritize the project and integrate AI-based solutions',
    ],
    solution: 'Introduced an AI/OCR-powered upload feature that automatically extracts and validates PO data for faster order entry. Defined success metrics, supported QA, and coordinated cross-functional rollout with marketing and support.',
    outcomes: [
      'Projected to boost online sales by 15%',
      'Reduced order entry errors and processing delays',
      'Improved overall PO-to-fulfillment cycle time',
    ],
  },
  {
    title: 'Enhanced Configurators Expansion',
    role: 'Associate Product Manager',
    company: 'Festo',
    problem: 'Limited access to product configurators was restricting partner sales and customer self-service for configurable components, leading to missed opportunities and increased support queries.',
    approach: [
      'Analyzed configurator usage data and gathered partner feedback highlighting gaps',
      'Created an Epic advocating for extended configurator hosting via partner channels',
      'Aligned key internal stakeholders including IT, product marketing, and sales enablement',
    ],
    solution: 'Expanded configurator hosting to external sales partners and optimized the platform\'s usability. Contributed to user story development, supported testing, and drove partner-facing rollout communications.',
    outcomes: [
      'Increased configurable product sales by 10%',
      'Reduced reliance on manual configuration support',
      'Improved partner enablement and digital sales tools',
    ],
  },
  {
    title: 'Distribution Portal Localization',
    role: 'Associate Product Manager',
    company: 'Festo',
    problem: 'Key distributors lacked access to centralized, localized data resources—resulting in inefficient order tracking, pricing confusion, and heavy dependence on support teams.',
    approach: [
      'Surfaced the issue through distributor feedback and an internal audit of portal usage',
      'Drafted an Epic to localize and optimize the portal experience for North America\'s largest B2B accounts',
      'Coordinated with sales, support, and IT to ensure accuracy and alignment',
    ],
    solution: 'Localized the Distribution Portal with custom user flows, region-specific documentation, and pricing access. Contributed to the build and rollout process across multiple teams.',
    outcomes: [
      'Reduced manual support workload',
      'Improved distributor satisfaction and portal engagement',
      'Accelerated time-to-information for strategic partners',
    ],
  },
  {
    title: 'Strategic Couponing Initiative',
    role: 'Associate Product Manager',
    company: 'Festo',
    problem: 'Customer retention rates plateaued, and specific product groups were underperforming in targeted segments despite competitive pricing.',
    approach: [
      'Analyzed sales performance data and identified segments where strategic incentives could influence purchase behavior',
      'Created an Epic outlining a digital couponing system with personalized targeting and measurable success metrics',
    ],
    solution: 'Launched a promotional couponing feature to incentivize purchases in key product categories. Coordinated A/B testing for offer types and led rollout efforts across CRM, marketing, and sales platforms.',
    outcomes: [
      'Projected to increase sales by 15% in targeted product groups',
      'Improved reactivation of dormant accounts',
      'Strengthened digital-first upsell opportunities',
    ],
  },
  {
    title: 'Material Activation App',
    role: 'Associate Product Manager',
    company: 'Festo',
    problem: 'The manual process of activating new materials in the internal system was backlogged and slow, taking up to three weeks and delaying product availability on the online shop.',
    approach: [
      'Proactively identified the issue through internal workflow analysis and backlog metrics',
      'Independently ideated a digital tool to streamline the activation process',
      'Authored a complete Product Requirements Document (PRD) and collaborated directly with a local software engineer to build the solution',
    ],
    solution: 'Developed and deployed a custom Material Activation App to automate and standardize the material setup process. Led testing, implementation, and change management internally.',
    outcomes: [
      'Reduced activation backlog by 70%',
      'Cut material activation time from 3 weeks to 1 week',
      'Enabled faster product launches and reduced internal coordination friction',
    ],
  },
];

const Projects = () => {
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = projects.length;

  const handleNext = () => {
    setActiveStep((prevStep) => Math.min(prevStep + 1, maxSteps - 1));
  };

  const handleBack = () => {
    setActiveStep((prevStep) => Math.max(prevStep - 1, 0));
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: 8 }}>
        <ScrollAnimation>
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
        </ScrollAnimation>

        <Box sx={{ position: 'relative' }}>
          <IconButton
            onClick={handleBack}
            disabled={activeStep === 0}
            sx={{
              position: 'fixed',
              left: { xs: 16, md: 32 },
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'background.paper',
              boxShadow: 3,
              '&:hover': {
                backgroundColor: 'background.paper',
                transform: 'translateY(-50%) translateX(-2px)',
              },
              transition: 'all 0.2s ease-in-out',
              zIndex: 1000,
            }}
          >
            <KeyboardArrowLeft />
          </IconButton>

          <SwipeableViews
            index={activeStep}
            onChangeIndex={handleStepChange}
            enableMouseEvents
            style={{ overflow: 'hidden' }}
          >
            {projects.map((project, index) => (
              <Box key={index} sx={{ px: { xs: 2, md: 8 }, pb: 8 }}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                  }}
                >
                  <CardContent>
                    <Typography variant="h4" gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography variant="h6" color="text.secondary" gutterBottom>
                      {project.role} at {project.company}
                    </Typography>
                    <Divider sx={{ my: 2 }} />
                    <Typography variant="h6" gutterBottom>
                      Problem
                    </Typography>
                    <Typography variant="body1" paragraph>
                      {project.problem}
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                      Approach
                    </Typography>
                    <Box component="ul" sx={{ pl: 2, mb: 2 }}>
                      {project.approach.map((item, i) => (
                        <Typography key={i} component="li" variant="body1" paragraph>
                          {item}
                        </Typography>
                      ))}
                    </Box>
                    <Typography variant="h6" gutterBottom>
                      Solution
                    </Typography>
                    <Typography variant="body1" paragraph>
                      {project.solution}
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                      Outcomes
                    </Typography>
                    <Box component="ul" sx={{ pl: 2, mb: 2 }}>
                      {project.outcomes.map((outcome, i) => (
                        <Typography key={i} component="li" variant="body1" paragraph>
                          {outcome}
                        </Typography>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Box>
            ))}
          </SwipeableViews>

          <IconButton
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            sx={{
              position: 'fixed',
              right: { xs: 16, md: 32 },
              top: '50%',
              transform: 'translateY(-50%)',
              backgroundColor: 'background.paper',
              boxShadow: 3,
              '&:hover': {
                backgroundColor: 'background.paper',
                transform: 'translateY(-50%) translateX(2px)',
              },
              transition: 'all 0.2s ease-in-out',
              zIndex: 1000,
            }}
          >
            <KeyboardArrowRight />
          </IconButton>
        </Box>

        <Box sx={{ 
          position: 'fixed', 
          bottom: 40, 
          left: '50%', 
          transform: 'translateX(-50%)',
          zIndex: 1000,
        }}>
          <MobileStepper
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            sx={{
              backgroundColor: 'transparent',
              '& .MuiMobileStepper-dot': {
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  transform: 'scale(1.2)',
                },
              },
              '& .MuiMobileStepper-dotActive': {
                backgroundColor: 'primary.main',
                transform: 'scale(1.2)',
              },
            }}
            nextButton={null}
            backButton={null}
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Projects; 