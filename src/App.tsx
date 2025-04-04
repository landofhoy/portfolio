import React from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { theme } from './theme';
import Navbar from './components/Navbar';
import Landing from './pages/Landing';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import ScrollProgress from './components/ScrollProgress';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Landing />}
          />
          <Route
            path="/*"
            element={
              <Box sx={{ minHeight: '100vh' }}>
                <Navbar />
                <ScrollProgress />
                <Box component="main">
                  <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<Navigate to="/home" replace />} />
                  </Routes>
                </Box>
              </Box>
            }
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
