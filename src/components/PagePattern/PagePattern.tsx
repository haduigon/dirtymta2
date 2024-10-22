import React, { SetStateAction, useEffect, useState } from 'react';
import {
  // Typography,
  Container, Paper, Box, FormControl, FormHelperText
} from '@mui/material';
import { IconBaseProps, IconType } from 'react-icons';
import { iconsLink } from '../../data/iconsArray';
import ContactForm from '../ContactForm/ContactForm';
import { useRouter } from 'next/router';

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

function PagePattern({ name, content = '' }: Props): JSX.Element {
  const [randomIcons, setRandomIcons] = useState(iconsLink);
  const router = useRouter();
  const isContactsPage = router.pathname === '/contacts';


  useEffect(() => {
    const shfld = shuffle(iconsLink)
    setRandomIcons(shfld as SetStateAction<{ component: IconType; size: number; color: string; id: number; }[]>);
  }, []);

  console.log(name, 'name pagepattern');


  return (
    <Container
      sx={{
        backgroundColor: 'lightgrey',
        display: 'flex',
        justifyContent: 'center',
      }}
      role='main'
      aria-label={`Page content for ${name}`}
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
        role='region'
        aria-labelledby='page-header'
      >
        <Box
          sx={{
            display: 'flex',
            margin: '5%',
            justifyContent: 'space-between'
          }}
        >

          {randomIcons.map((icon, indx) => {
            const IconComponent = icon.component;
            return (
              <Box
                sx={{
                  display: {
                    xs: indx < 8 ? 'none' : 'flex',
                    sm: indx < 6 ? 'none' : 'flex',
                    md: 'flex'
                  },
                  alignItems: 'center',
                }}
                key={icon.id}
                role='group'
                aria-label='Icon representation'
              >
                <IconComponent size={icon.size} color={icon.color} />
              </Box>
            )
          })}

        </Box>

        <Container maxWidth="sm">
          <FormControl>
            <FormHelperText sx={{
              marginLeft: { md: 0, sm: 0 },
              fontSize: 18
            }}>
              {/* <Typography
                // variant="h6"
                component=''
                
                tabIndex={0}
                aria-label='Page content'
            > */}
              {content}
            {/* </Typography> */}
            </FormHelperText>
            
          </FormControl>
        </Container>

        <Container>
          {isContactsPage && <ContactForm />}
        </Container>
      </Paper>
    </Container>
  )
}

export default PagePattern;