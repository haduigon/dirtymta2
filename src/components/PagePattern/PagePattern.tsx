import React, { useEffect, useState } from 'react';
import { Typography, Container, Paper, Box } from '@mui/material';

// import {
//   AiFillMessage,
//   AiFillBank,
// } from "react-icons/ai";
import { FaGoogle } from "react-icons/fa";
// import { TbBrandYahoo } from "react-icons/tb";
// import { MdAlternateEmail, MdMarkEmailRead, MdEuro, MdOutlineTextsms } from "react-icons/md";
// import { SiGmail } from "react-icons/si";
// import { LuDollarSign } from "react-icons/lu";
// import { IoLogoBitcoin } from "react-icons/io";
// import { PiCrown } from "react-icons/pi";
import { IconBaseProps } from 'react-icons';
// import {shuffledIconsArray} from '../../data/iconsArray';
import {iconsLink} from '../../data/iconsArray';


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

function shuffle(array: any[]) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}

function PagePattern({ name, content, icons }: Props): JSX.Element {
  const [randomIcons, setRandomIcons] = useState(iconsLink);

  useEffect(() => {
    const shfld = shuffle(iconsLink)
    setRandomIcons(shfld);
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
          width: '95vw',
          position: 'fixed',
          top: 50
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
                    sm: indx < 8 ? 'none': 'flex',
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
          {/* <Box>
            <AiFillBank size={40} color='wheat' />
          </Box> */}
          
          {/* <Box
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <FaGoogle size={32} color='orange' />
          </Box> */}
{/*          
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <TbBrandYahoo size={40} color='purple' />
          </Box>
          
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <MdAlternateEmail size={40} color='pink' />
          </Box>
          
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <MdMarkEmailRead size={40} color='lightgreen' />
          </Box>
          
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <SiGmail size={38} color='darkyellow' />
          </Box>
          
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <LuDollarSign size={40} color='green' />
          </Box>
          
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <MdEuro size={38} color='blue' />
          </Box>
          
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <IoLogoBitcoin size={40} color='darkgrey' />
          </Box>
          
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <MdOutlineTextsms size={40} color='purple' />
          </Box>
          
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <PiCrown size={40} color='orange' />
          </Box> */}


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