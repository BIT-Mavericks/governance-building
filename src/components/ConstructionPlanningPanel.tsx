import React, { useState } from 'react';
import { Paper, Typography, Stepper, Step, StepLabel, Button, Box, Radio, RadioGroup, FormControlLabel, FormControl } from '@mui/material';
import CheckCircle from '@mui/icons-material/CheckCircle';
import '../styles/dashboard.css';

const steps = ['Select a Building', 'Confirm Cost', 'Mint StructureNFT'];

const buildings = [
  { name: 'Residential Complex', cost: 1000 },
  { name: 'Industrial Plant', cost: 2000 },
  { name: 'Education Center', cost: 1500 },
  { name: 'Medical Facility', cost: 1800 },
];

const ConstructionPlanningPanel = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedBuilding, setSelectedBuilding] = useState(buildings[0]);
  const userBalance = 5000;

  const handleNext = () => setActiveStep((prev) => prev + 1);
  const handleBack = () => setActiveStep((prev) => prev - 1);

  const handleBuildingChange = (event) => {
    const selected = buildings.find(b => b.name === event.target.value);
    setSelectedBuilding(selected);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <FormControl component="fieldset">
            <Typography variant="h6" sx={{ color: 'white', mb: 2 }}>
              Select a Building
            </Typography>
            <RadioGroup value={selectedBuilding.name} onChange={handleBuildingChange}>
              {buildings.map((building) => (
                <FormControlLabel
                  key={building.name}
                  value={building.name}
                  control={
                    <Radio sx={{
                      color: 'white',
                      '&.Mui-checked': { color: '#00FFFF' },
                      '& .MuiSvgIcon-root': { fontSize: 28 },
                      '&.Mui-focusVisible': {
                        outline: '2px solid #00FFFF',
                        boxShadow: '0 0 8px #00FFFF'
                      }
                    }} />
                  }
                  label={
                    <Typography sx={{ color: 'white', fontSize: '1.1rem' }}>
                      {`${building.name} (${building.cost} GP)`}
                    </Typography>
                  }
                />
              ))}
            </RadioGroup>
          </FormControl>
        );

      case 1:
        return (
          <Box>
            <Typography variant="h6" sx={{ color: 'white', mb: 2 }}>
              Confirm Cost
            </Typography>
            <Typography sx={{ color: 'white' }}>Selected: {selectedBuilding.name}</Typography>
            <Typography sx={{ color: 'white' }}>Cost: {selectedBuilding.cost} GP</Typography>
            <Typography sx={{ 
              color: userBalance >= selectedBuilding.cost ? '#00FF00' : '#FF0000',
              mt: 1,
              textShadow: '0 0 8px currentColor'
            }}>
              Balance: {userBalance} GP
            </Typography>
          </Box>
        );

      case 2:
        return (
          <Box>
            <Typography variant="h6" sx={{ color: 'white', mb: 2 }}>
              Mint StructureNFT
            </Typography>
            <Typography sx={{ color: 'white' }}>Building: {selectedBuilding.name}</Typography>
            <Typography sx={{ color: 'white', mb: 2 }}>Cost: {selectedBuilding.cost} GP</Typography>
            <Button 
              variant="contained"
              startIcon={<CheckCircle sx={{ color: 'rgba(0,0,0,0.8)' }} />}
              sx={{
                background: 'linear-gradient(135deg, #3a8dff, #9f44ff)',
                color: '#fff',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                textShadow: '0 1px 2px rgba(0,0,0,0.3)',
                '&:hover': {
                  background: 'linear-gradient(135deg, #5ea6ff, #b562ff)',
                  boxShadow: '0 0 12px #9f44ff',
                }
              }}
            >
              Mint NFT
            </Button>
          </Box>
        );

      default:
        return 'Unknown step';
    }
  };

  return (
    <Paper
      sx={{
        p: 3,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        backdropFilter: 'blur(10px)',
        color: 'white',
        border: '1px solid #00FFFF',
        boxShadow: '0 4px 6px rgba(0, 255, 255, 0.3)',
        borderRadius: 2,
        transition: 'all 0.3s ease',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 0 10px #00FFFF, 0 0 20px #00FFFF',
        },
      }}
    >
      <Typography 
        fontFamily={"orbitron"}
        variant="h5" 
        gutterBottom 
        className="glitch-text" 
        data-text="Construction Planning"
        sx={{ textAlign: 'center', mb: 4 }}
      >
        Construction Planning
      </Typography>

      <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel sx={{
              '& .MuiStepLabel-label': {
                color: 'white !important',
                fontSize: '1rem',
                '&.Mui-active': { fontWeight: 'bold' }
              },
              '& .MuiStepIcon-root': {
                color: 'white',
                '&.Mui-active, &.Mui-completed': { color: '#00FFFF' }
              }
            }}>
              {label}
            </StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box sx={{ minHeight: 200 }}>{getStepContent(activeStep)}</Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
        <Button 
          disabled={activeStep === 0} 
          onClick={handleBack}
          sx={{ 
            color: 'white',
            '&:hover': { textShadow: '0 0 8px #00FFFF' },
            fontSize: '1.1rem'
          }}
        >
          Back
        </Button>
        
        <Button 
          variant="contained" 
          onClick={handleNext}
          sx={{
            background: 'linear-gradient(135deg, #3a8dff, #9f44ff)',
            color: '#fff',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            textShadow: '0 1px 2px rgba(0,0,0,0.3)',
            '&:hover': {
              background: 'linear-gradient(135deg, #5ea6ff, #b562ff)',
              boxShadow: '0 0 12px #9f44ff',
            }
          }}
        >
          {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
        </Button>
      </Box>
    </Paper>
  );
};

export default ConstructionPlanningPanel;
