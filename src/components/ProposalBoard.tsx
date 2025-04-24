import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Chip,
  Button,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  Box,
  LinearProgress,
  Tooltip,
  Avatar,
  Stack,
} from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as ReTooltip, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';
import { People, BarChart as BarIcon, ThumbUp, ThumbDown, Block } from '@mui/icons-material';
import '../styles/dashboard.css';

const mockProposals = [
  {
    id: 1,
    title: 'Community Park Renovation',
    description: 'This proposal aims to renovate the local community park, including new playground equipment, landscaping, and accessibility improvements.',
    voteCounts: { yes: 120, no: 30, abstain: 50 },
    aiAnalysis: 'The renovation is likely to increase community happiness by 15% and improve local environment sustainability.',
    joke: 'Why don’t parks ever get lonely? Because they’re always full of trees! 🌳',
  },
  {
    id: 2,
    title: 'Public Transportation Expansion',
    description: 'This proposal seeks to expand the public transportation system by adding new bus routes and increasing service frequency.',
    voteCounts: { yes: 80, no: 60, abstain: 40 },
    aiAnalysis: 'Expansion may reduce traffic congestion by 10% and improve air quality by decreasing car dependency.',
    joke: 'Why did the bus break up with the car? It needed more space! 🚌',
  },
];

interface ProposalBoardProps {
  onSelectProposal: (id: number) => void;
  isWalletConnected: boolean;
}

const ProposalBoard: React.FC<ProposalBoardProps> = ({ onSelectProposal, isWalletConnected }) => {
  const [open, setOpen] = useState(false);
  const [selectedProposal, setSelectedProposal] = useState<any>(null);

  const handleClickOpen = (proposal) => {
    setSelectedProposal(proposal);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProposal(null);
  };

  const calculateYesPercentage = (votes) => {
    const total = votes.yes + votes.no + votes.abstain;
    return ((votes.yes / total) * 100).toFixed(0);
  };

  const calculateNoPercentage = (votes) => {
    const total = votes.yes + votes.no + votes.abstain;
    return ((votes.no / total) * 100).toFixed(0);
  };

  const calculateAbstainPercentage = (votes) => {
    const total = votes.yes + votes.no + votes.abstain;
    return ((votes.abstain / total) * 100).toFixed(0);
  };

  const chartData = selectedProposal
    ? [
        { name: 'Yes', value: selectedProposal.voteCounts.yes },
        { name: 'No', value: selectedProposal.voteCounts.no },
        { name: 'Abstain', value: selectedProposal.voteCounts.abstain },
      ]
    : [];

  return (
    <Box
  className="orbitron-font"
  sx={{
    pt: 10,
    pb: 8,
    pl: 8,
    pr: 8,
    width: '1000%',
    maxWidth: 1400,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 4,
  }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glitch-text"
        data-text="Governance Proposal Board"
      >
        Governance Proposal Board
      </motion.div>

      <Grid container spacing={6} justifyContent="flex-start" sx={{ pl: 2, width: '100%' }}>
        {mockProposals.map((proposal) => (
          <Grid item xs={12} sm={6} md={4} key={proposal.id}>
            <Card
              sx={{
                
                height: '100%',
                backgroundColor: 'rgba(0,0,0,0.6)',
                color: 'white',
                border: '1px solid #00FFFF',
                boxShadow: '0 6px 12px rgba(0,255,255,0.5)',
                borderRadius: 3,
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <CardContent sx={{ flex: 1 }}>
                <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 3 }}>
                  <Avatar sx={{ bgcolor: 'transparent', border: '1px solid #00FFFF', color: '#00FFFF' }}>
                    <People />
                  </Avatar>
                  <Typography variant="h6" sx={{ fontWeight: 'medium' }}>
                    {proposal.title}
                  </Typography>
                </Stack>

                <Typography variant="body1" sx={{ fontStyle: 'italic', color: '#FFFFFF', mb: 3 }}fontSize={"17px"}>
                  {proposal.joke}
                </Typography>

                <Tooltip
                  title={`Yes: ${calculateYesPercentage(proposal.voteCounts)}%, No: ${calculateNoPercentage(proposal.voteCounts)}%, Abstain: ${calculateAbstainPercentage(proposal.voteCounts)}%`}
                >
                  <LinearProgress
                    variant="determinate"
                    value={+calculateYesPercentage(proposal.voteCounts)}
                    sx={{
                      height: 12,
                      borderRadius: 6,
                      backgroundColor: 'rgba(0,255,255,0.2)',
                      '& .MuiLinearProgress-bar': { backgroundColor: '#00FFFF' },
                      mb: 3,
                    }}
                  />
                </Tooltip>

                <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
                  <Chip label={`Yes: ${proposal.voteCounts.yes}`} color="success" />
                  <Chip label={`No: ${proposal.voteCounts.no}`} color="error" />
                  <Chip
                    label={`Abstain: ${proposal.voteCounts.abstain}`}
                    sx={{ backgroundColor: '#0288D1', color: 'white' }}
                  />
                </Box>
              </CardContent>

              <Box sx={{ p: 3, textAlign: 'center' }}>
                <Button
                  variant="contained"
                  onClick={() => handleClickOpen(proposal)}
                  sx={{
                    fontFamily: 'Orbitron',
                    fontSize: '15px',
                    width: '100%',
                    py: 1.5,
                    backgroundColor: '#6A0DAD',
                    
                    fontWeight: 'bold',
                    '&:hover': { backgroundColor: '#4B0082' },
                  }}
                  startIcon={<BarIcon />}
                >
                  View Details
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="lg"
        fullWidth
        PaperProps={{ sx: { backgroundColor: 'rgba(0,0,0,0.9)', border: '2px solid #00FFFF', borderRadius: 4 } }}
      >
        <DialogTitle sx={{ borderBottom: '1px solid #00FFFF', py: 2 }}>
          {selectedProposal?.title}
        </DialogTitle>
        <DialogContent sx={{ p: 3 }}>
          <Typography variant="h6" sx={{ color: '#FFFFFF', mb: 2 }}fontFamily={"orbitron"} fontSize={"18px"}>
            Description
          </Typography>
          <Typography
           fontSize={"18px"}
            variant="body1"
            sx={{
              color: '#FFFFFF',
              mb: 2,
              maxHeight: '2.5em',
              lineHeight: '1.25em',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {selectedProposal?.description}
          </Typography>

          <Typography variant="subtitle1" sx={{ color: '#00FFFF', mb: 2 }}fontFamily={"orbitron"} fontSize={"18px"}>
            AI Analysis
          </Typography>
          <Typography variant="body1" sx={{ mb: 2 }}>
            {selectedProposal?.aiAnalysis}
          </Typography>

          <Box sx={{ height: 300, mb: 2 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid stroke="#00FFFF" strokeDasharray="3 3" />
                <XAxis dataKey="name" tick={{ fill: '#00FFFF' }} axisLine={{ stroke: '#00FFFF' }} />
                <YAxis tick={{ fill: '#00FFFF' }} axisLine={{ stroke: '#00FFFF' }} />
                <ReTooltip contentStyle={{ backgroundColor: 'rgba(0,0,0,0.9)', border: '1px solid #00FFFF', borderRadius: 4 }} />
                <Bar dataKey="value" fill="#00FFFF" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 3,}}>
            <Button variant="contained" color="success" startIcon={<ThumbUp />} disabled={!isWalletConnected} sx={{ px: 4, py: 1.5 }}>
              Yes
            </Button>
            <Button variant="contained" color="error" startIcon={<ThumbDown />} disabled={!isWalletConnected} sx={{ px: 4, py: 1.5 }}>
              No
            </Button>
            <Button variant="outlined" startIcon={<Block />} disabled={!isWalletConnected} sx={{ borderColor: '#00FFFF', color: '#00FFFF', px: 4, py: 1.5 }}>
              Abstain
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default ProposalBoard;