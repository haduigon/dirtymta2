import React, { SetStateAction, useEffect, useState } from 'react';
import { Typography, Container, Paper, Box } from '@mui/material';
import { IconBaseProps, IconType } from 'react-icons';
import { iconsLink } from '../../data/iconsArray';

type Props = {
  content?: string | React.ReactNode,
  name?: string,
  icons?: {
    component: React.ComponentType<IconBaseProps>,
    size: number,
    color: string,
    id: number,
  }[];
}

type Icon = {
   component: React.ComponentType<IconBaseProps>,
   size: number,
    color: string,
    id: number,
}

function shuffle(array: Icon[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function PagePattern({ name, content }: Props): JSX.Element {
  const [randomIcons, setRandomIcons] = useState(iconsLink);

  useEffect(() => {
    const shfld = shuffle(iconsLink)
    setRandomIcons(shfld as SetStateAction<{ component: IconType; size: number; color: string; id: number; }[]>);
  }, []);

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
          maxHeight: '92vh',
          width: '95vw',
          position: 'fixed',
          top: 50,
          overflowY: 'auto',
          overflowX: 'hidden'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            margin: '10%',
            justifyContent: 'space-between'
          }}
        >

          {randomIcons.map((icon, indx) => {
            const IconComponent = icon.component;
            return (
              <Box
                sx={{
                  display: {
                    xs: indx < 8 ? 'none': 'flex',
                    sm: indx < 6 ? 'none': 'flex',
                    md: 'flex'
                  },
                  alignItems: 'center',
                }}
                key={icon.id}
          >
            <IconComponent size={icon.size} color={icon.color} />
          </Box>
            )
          })}

        </Box>
        <Typography
          sx={{
            margin: '10%',
            backgroundColor: 'yellow'
          }}
          variant="h6"
        >
          {name}
        </Typography>
        <Typography
          sx={{
            margin: '10%',
          }}
        >
          {content}
        </Typography>
      </Paper>
    </Container>
  )
}

export default PagePattern;