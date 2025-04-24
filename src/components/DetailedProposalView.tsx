import React from 'react';
import { Box, Typography, LinearProgress, Button } from '@mui/material';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { ThumbUp, ThumbDown, Block } from '@mui/icons-material';

interface Proposal {
  id: number;
  title: string;
  description: string;
  status: string;
  votes: { for: number; against: number; abstain: number };
  totalVotes: number;
  deadline: string;
  creator: string;
  createdAt: string;
}

const DetailedProposalView: React.FC<{ proposal: Proposal }> = ({ proposal }) => {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h5">{proposal.title}</Typography>
      <Typography variant="body1">{proposal.description}</Typography>
      <Typography variant="h6">Status: {proposal.status}</Typography>
      <Typography variant="h6">Deadline: {proposal.deadline}</Typography>
      <Typography variant="h6">Creator: {proposal.creator}</Typography>

      {/* AI Analysis Section (Placeholder) */}
      <Typography variant="h6">AI Analysis</Typography>
      <Typography variant="body1">This section would contain AI-generated insights about the proposal.</Typography>

      {/* Projected Impact Chart (Placeholder) */}
      <Typography variant="h6">Projected Impact</Typography>
      <Typography variant="body1">This section would contain a bar chart of projected impact vs. baseline.</Typography>

      {/* Voting Progress */}
      <Typography variant="h6">Voting Progress</Typography>
      <LinearProgress variant="determinate" value={(proposal.votes.for / proposal.totalVotes) * 100} />
      <Typography variant="body2">For: {proposal.votes.for} ({((proposal.votes.for / proposal.totalVotes) * 100).toFixed(2)}%)</Typography>
      <LinearProgress variant="determinate" value={(proposal.votes.against / proposal.totalVotes) * 100} />
      <Typography variant="body2">Against: {proposal.votes.against} ({((proposal.votes.against / proposal.totalVotes) * 100).toFixed(2)}%)</Typography>
      <LinearProgress variant="determinate" value={(proposal.votes.abstain / proposal.totalVotes) * 100} />
      <Typography variant="body2">Abstain: {proposal.votes.abstain} ({((proposal.votes.abstain / proposal.totalVotes) * 100).toFixed(2)}%)</Typography>

      {/* Vote Distribution Pie Chart */}
      <PieChart width={400} height={400}>
        <Pie
          data={[
            { name: 'For', value: proposal.votes.for },
            { name: 'Against', value: proposal.votes.against },
            { name: 'Abstain', value: proposal.votes.abstain },
          ]}
          cx={200}
          cy={200}
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {COLORS.map((color, index) => (
            <Cell key={`cell-${index}`} fill={color} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>

      {/* Voting Controls */}
      <Box sx={{ mt: 2, display: 'flex', gap: 2 }}>
        <Button variant="contained" color="primary" startIcon={<ThumbUp />}>Yes</Button>
        <Button variant="contained" color="secondary" startIcon={<ThumbDown />}>No</Button>
        <Button variant="contained" color="inherit" startIcon={<Block />}>Abstain</Button>
      </Box>
    </Box>
  );
};

export default DetailedProposalView;