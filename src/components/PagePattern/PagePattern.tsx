import React from 'react';
import { Typography, Container, Paper } from '@mui/material';

type Props = {
  content?: string | React.ReactNode,
  name?: string,
}

function PagePattern({content}: Props): JSX.Element {
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
        <Typography variant="h4">{content}</Typography>
      </Paper>     
    </Container>
  )
}

export default PagePattern;