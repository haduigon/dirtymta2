import React from 'react';
import { Typography, Container, Paper } from '@mui/material';

export default function Services() {
  return (
    <Container
      sx={{
        backgroundColor: 'lightgrey',
        display: 'flex',
        justifyContent: 'center',
        

      }}
    >
      <Paper
        elevation={3}
        sx={{
          minHeight: '92vh',
          width: '95vw',
          position: 'fixed',
          top: 50
        }}
      >
        <Typography variant="h4">Welcome to the services Page</Typography>
      </Paper>     
    </Container>
  );
}