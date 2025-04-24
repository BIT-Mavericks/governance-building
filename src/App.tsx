import React, { useState } from 'react';
import { Box, Grid, Button } from '@mui/material';
import ProposalBoard from './components/ProposalBoard';
import DAOParticipationStatus from './components/DAOParticipationStatus';
import BuildingCatalogue from './components/BuildingCatalogue';
import ConstructionPlanningPanel from './components/ConstructionPlanningPanel';
import ConstructionProgressTracker from './components/ConstructionProgressTracker';
import './styles/dashboard.css';

function App() {
  const [dashboard, setDashboard] = useState('governance');

  return (
    <Box
      sx={{
        background: 'linear-gradient(to right, #000033, #000000)',
        minHeight: '100vh',
        color: 'white',
        padding: 2,
        fontFamily: 'Orbitron, sans-serif',
      }}
    >
      <Box sx={{ mb: 2 }}>
        <Button
          variant="outlined"
          sx={{ borderColor: '#00FFFF', color: '#00FFFF', mr: 1 }}
          onClick={() => setDashboard('governance')}
        >
          Governance Dashboard
        </Button>
        <Button
          variant="outlined"
          sx={{ borderColor: '#00FFFF', color: '#00FFFF' }}
          onClick={() => setDashboard('construction')}
        >
          Construction Dashboard
        </Button>
      </Box>
      {dashboard === 'governance' ? (
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <ProposalBoard 
              isWalletConnected={true} 
              onSelectProposal={(id: number) => {
                console.log(`Proposal selected with ID: ${id}`);
              }} 
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <DAOParticipationStatus />
          </Grid>
        </Grid>
      ) : (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <BuildingCatalogue />
          </Grid>
          <Grid item xs={12} md={6}>
            <ConstructionPlanningPanel />
          </Grid>
          <Grid item xs={12} md={6}>
            <ConstructionProgressTracker />
          </Grid>
        </Grid>
      )}
    </Box>
  );
}

export default App;