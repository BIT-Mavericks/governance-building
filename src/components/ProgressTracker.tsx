import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Box, Typography, Paper } from '@mui/material';
import '../styles/dashboard.css';
// ...existing code...

const mockProjects = [
  { name: 'Residential Complex', startDate: '2025-01-01', endDate: '2025-06-01', progress: 45 },
  { name: 'Industrial Plant', startDate: '2025-02-01', endDate: '2025-08-01', progress: 20 },
  { name: 'Education Center', startDate: '2025-03-01', endDate: '2025-05-01', progress: 0 },
];

const ProgressTracker = () => {
  const data = mockProjects.map((project) => ({
    name: project.name,
    start: new Date(project.startDate).getTime(),
    duration: new Date(project.endDate).getTime() - new Date(project.startDate).getTime(),
    progress: project.progress,
  }));

  return (
    <Paper className="progress-card">
      <Typography variant="h6">Construction Progress Tracker</Typography>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} layout="vertical">
          <CartesianGrid strokeDasharray="3 3" stroke="#00FFFF" />
          <XAxis type="number" domain={['dataMin', 'dataMax']} tickFormatter={(time) => new Date(time).toLocaleDateString()} />
          <YAxis dataKey="name" type="category" />
          <Tooltip formatter={(value, name) => {
            if (name === 'progress') {
              return `${value}%`;
            }
            if (typeof value === 'number') {
              return new Date(value).toLocaleDateString();
            }
            return value;
          }} />
          <Bar dataKey="duration" stackId="a" fill="#8884d8" />
          <Bar dataKey="progress" stackId="b" fill="#00FFFF" />
        </BarChart>
      </ResponsiveContainer>
    </Paper>
  );
};

export default ProgressTracker;