import React from 'react';
import { Card, CardContent, Typography, Chip, Button, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import '../styles/dashboard.css';

const buildings = [
  {
    name: 'Residential Complex',
    icon: '🏠',
    description: 'A modern housing facility for citizens.',
    cost: 1000,
    benefits: { happiness: 20, productivity: 10, sustainability: 15 },
  },
  {
    name: 'Industrial Plant',
    icon: '🏭',
    description: 'A factory for producing goods.',
    cost: 2000,
    benefits: { happiness: 10, productivity: 25, sustainability: 20 },
  },
  {
    name: 'Education Center',
    icon: '🏫',
    description: 'A school for learning and growth.',
    cost: 1500,
    benefits: { happiness: 15, productivity: 20, sustainability: 25 },
  },
  {
    name: 'Medical Facility',
    icon: '🏥',
    description: 'A hospital for healthcare services.',
    cost: 1800,
    benefits: { happiness: 25, productivity: 15, sustainability: 30 },
  },
];

const BuildingCatalogue = () => {
  return (
    <div>
      <Typography variant="h5" fontFamily={"orbitron"} gutterBottom className="glitch-text" data-text="Building Catalogue">
        Building Catalogue
      </Typography>
      <Grid container spacing={2}>
        {buildings.map((building, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                backdropFilter: 'blur(10px)',
                color: 'white',
                border: '1px solid #00FFFF',
                boxShadow: '0 4px 6px rgba(0, 255, 255, 0.3)',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: '0 0 10px #00FFFF, 0 0 20px #00FFFF',
                },
                borderRadius: 2,
              }}
            >
              <CardContent sx={{ flexGrow: 1 }}>
                {/* Animated Icon Next to the Building Name */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 1, ease: 'easeInOut' }}
                  style={{
                    fontSize: '1.5rem',
                    marginRight: '8px',
                    display: 'inline-block',
                    verticalAlign: 'middle',
                    lineHeight: '1',
                  }}
                >
                  {building.icon}
                </motion.div>
                <Typography variant="h6"  sx={{ display: 'inline', verticalAlign: 'middle' }}>
                  {building.name}
                </Typography>
                <Typography variant="body2"  >{building.description}</Typography>
                <Chip label={`Cost: ${building.cost} GP`} color="primary" sx={{ mt: 1 }} />
                <Typography variant="body2" sx={{ mt: 1 }}  >
                  Happiness: {building.benefits.happiness}% | Productivity: {building.benefits.productivity}% | Sustainability: {building.benefits.sustainability}%
                </Typography>
              </CardContent>
              <Button variant="contained" sx={{ m: 2, fontFamily: 'Orbitron',fontSize: '13px', }}>Add to Construction Queue</Button>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default BuildingCatalogue;
