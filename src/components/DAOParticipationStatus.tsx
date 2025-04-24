import React from 'react';
import { Card, CardContent, Typography, Box, LinearProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';
import HowToVote from '@mui/icons-material/HowToVote';
import History from '@mui/icons-material/History';
import '../styles/dashboard.css';

const mockVoteHistory = [
  { id: 1, proposalTitle: 'Community Center Renovation', vote: 'Yes', date: '2024-02-01' },
  { id: 2, proposalTitle: 'New Public Library', vote: 'No', date: '2024-01-15' },
];

const totalProposals = 10;
const votedProposals = 2;

const DAOParticipationStatus = () => {
  const getVoteColor = (vote) => {
    switch (vote) {
      case 'Yes': return 'success.main';
      case 'No': return 'error.main';
      case 'Abstain': return 'text.secondary';
      default: return 'text.primary';
    }
  };

  return (
    <Box sx={{ ml: 2, mt: 4 }}>
      <Card
        sx={{
          p: 3,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(10px)',
          width: '90%',
          margin: '100px 0px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          height: '100%',
          
          backgroundSize: 'cover',
          color: 'white',
          border: '1px solid #00FFFF',
          boxShadow: '0 4px 6px rgba(0, 255, 255, 0.3)',
          borderRadius: 2,
          '&:hover': {
            transform: 'translateY(-5px)',
            boxShadow: '0 0 10px #00FFFF, 0 0 20px #00FFFF',
          },
          transition: 'all 0.3s ease',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
          <HowToVote sx={{ mr: 1, color: 'white' }} />
          <Typography 
            variant="h5"
            fontFamily={"orbitron"} 
            className="glitch-text" 
            data-text="Your Participation Status"
            sx={{ color: 'white' }}
          >
            Your Participation Status
          </Typography>
        </Box>
        <Typography color="inherit"  fontSize={"18px"}>
          You've voted on {votedProposals} of {totalProposals} proposals
        </Typography>
        <LinearProgress
          variant="determinate"
          value={(votedProposals / totalProposals) * 100}
          sx={{
            
            my: 2,
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            '& .MuiLinearProgress-bar': {
              background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
              borderRadius: 5,
            },
          }}
        />
        <Typography variant="h6" fontFamily={"orbitron"} sx={{ mt: 2, color: 'white' }}>Vote History</Typography>
        <TableContainer 
          component={Paper} 
          sx={{ 
            fontFamily: 'Orbitron',
    fontSize: '14px',
            mt: 1,
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.18)',
            color: 'white'
          }}
        >
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell sx={{ color: 'inherit' }}>Proposal</TableCell>
                <TableCell sx={{ color: 'inherit' }}>Your Vote</TableCell>
                <TableCell sx={{ color: 'inherit' }}>Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {mockVoteHistory.map((vote) => (
                <TableRow key={vote.id}>
                  <TableCell sx={{ color: 'inherit' }}>{vote.proposalTitle}</TableCell>
                  <TableCell sx={{ color: getVoteColor(vote.vote) }}>{vote.vote}</TableCell>
                  <TableCell sx={{ color: 'inherit' }}>{new Date(vote.date).toLocaleDateString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Button 
          
          variant="outlined" 
          startIcon={<History />} 
          sx={{ 
            fontFamily: 'Orbitron',
    fontSize: '14px',
            mt: 2,
            color: 'white',
            borderColor: 'white',
            '&:hover': {
              borderColor: '#00FFFF',
              boxShadow: '0 0 8px #00FFFF'
            }
          }}
        >
          View Full History
        </Button>
      </Card>
    </Box>
  );
};

export default DAOParticipationStatus;
