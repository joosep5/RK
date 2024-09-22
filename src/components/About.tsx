// components/About.tsx
import React, { useState } from 'react';
import { Button, Typography, Box } from '@mui/material';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { getCurrentDateTime } from './timeUtils';

const About = () => {
  const [dateTime, setDateTime] = useState<string | null>(null);

  const handleButtonClick = () => {
    const currentDateTime = getCurrentDateTime();
    setDateTime(currentDateTime);
  };

  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>About Me</Typography>
      <Typography variant="h6">Minu hobid on:</Typography>
      <Typography>- Mängimine</Typography>
      <Typography>- Reisimine</Typography>
      <Typography>- Puhkamine</Typography>

      {/* Nupp küsimärgiga */}
      <Button
        variant="contained"
        startIcon={<QuestionMarkIcon />}
        onClick={handleButtonClick}
        sx={{ marginTop: 4 }}
      >
        Kuva
      </Button>

      {/* Kuva kellaaja ja kuupäeva kui nuppu vajutatakse */}
      {dateTime && (
        <Typography variant="body1" sx={{ marginTop: 2 }}>
          {dateTime}
        </Typography>
      )}
    </Box>
  );
};

export default About;
