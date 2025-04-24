import React from 'react';
import { Paper, Typography, LinearProgress, Box } from '@mui/material';
import { motion } from 'framer-motion';
import '../styles/dashboard.css';

const mockProjects = [
  {
    name: 'Residential Complex',
    status: 'In Progress',
    progress: 65,
    startDate: '2025-01-01',
    endDate: '2025-06-01',
    workers: 10,
    materials: 'Concrete, Steel',
    icon: '🏠',
  },
  {
    name: 'Industrial Plant',
    status: 'Delayed',
    progress: 30,
    startDate: '2025-02-01',
    endDate: '2025-08-01',
    workers: 15,
    materials: 'Machinery, Pipes',
    icon: '🏭',
  },
  {
    name: 'Education Center',
    status: 'Completed',
    progress: 100,
    startDate: '2024-12-01',
    endDate: '2025-03-01',
    workers: 8,
    materials: 'Books, Furniture',
    icon: '🏫',
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case 'Completed':
      return '#00FF00';
    case 'Delayed':
      return '#FF4444';
    case 'In Progress':
      return '#FFD700';
    default:
      return 'gray';
  }
};

const ConstructionProgressTracker = () => {
  return (
    <Box sx={{ px: 4, py: 3 }}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glitch-text"
        data-text="Progress Tracker"
        style={{
          textAlign: 'center',
          fontSize: '1.5rem',
          fontFamily: 'Orbitron, sans-serif',
          color: '#00FFFF',
          marginBottom: '2rem',
        }}
      >
        Progress Tracker
      </motion.h2>

      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 3,
        }}
      >
        {mockProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            style={{ flex: '1 1 300px', maxWidth: 350 }}
          >
            <Paper
              elevation={3}
              sx={{
                p: 3,
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                backdropFilter: 'blur(10px)',
                color: 'white',
                border: '1px solid #00FFFF',
                boxShadow: '0 4px 6px rgba(0, 255, 255, 0.3)',
                borderRadius: 2,
                transition: 'all 0.3s ease',
                '&:hover': {
                  boxShadow: '0 0 10px #00FFFF, 0 0 20px #00FFFF',
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  fontFamily: 'Orbitron, sans-serif',
                  fontSize: '1rem',
                }}
              >
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  style={{
                    fontSize: '1.8rem',
                    marginRight: '0.5rem',
                  }}
                >
                  {project.icon}
                </motion.div>
                {project.name}
              </Typography>
              <Typography
                variant="subtitle2"
                sx={{
                  color: getStatusColor(project.status),
                  fontWeight: 'bold',
                  fontSize: '0.85rem',
                }}
              >
                {project.status}
              </Typography>
              <LinearProgress
                variant="determinate"
                value={project.progress}
                sx={{
                  my: 1,
                  height: 10,
                  borderRadius: 5,
                  backgroundColor: '#222',
                  '& .MuiLinearProgress-bar': { backgroundColor: '#00FFFF' },
                }}
              />
              <Typography variant="body2" sx={{ fontSize: '0.8rem' }}>
                Progress: {project.progress}%
              </Typography>
              <Typography variant="body2" sx={{ fontSize: '0.8rem' }}>
                Start: {project.startDate}
              </Typography>
              <Typography variant="body2" sx={{ fontSize: '0.8rem' }}>
                End: {project.endDate}
              </Typography>
              <Typography variant="body2" sx={{ fontSize: '0.8rem' }}>
                Workers: {project.workers}
              </Typography>
              <Typography variant="body2" sx={{ fontSize: '0.8rem' }}>
                Materials: {project.materials}
              </Typography>
            </Paper>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
};

export default ConstructionProgressTracker;
