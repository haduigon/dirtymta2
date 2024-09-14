import React from 'react';
import { Typography, Container, Paper, Box } from '@mui/material';

import {
  AiFillMessage,
  AiFillBank,
} from "react-icons/ai";
import { FaGoogle } from "react-icons/fa";
import { TbBrandYahoo } from "react-icons/tb";
import { MdAlternateEmail, MdMarkEmailRead, MdEuro, MdOutlineTextsms } from "react-icons/md";
import { SiGmail } from "react-icons/si";
import { LuDollarSign } from "react-icons/lu";
import { IoLogoBitcoin } from "react-icons/io";


type Props = {
  content?: string | React.ReactNode,
  name?: string,
}

function PagePattern({ name, content }: Props): JSX.Element {
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
          }}
        >
          <Box>
            <AiFillMessage size={38} color='lightblue' />
          </Box>

          <Box>
            <AiFillBank size={40} color='wheat' />
          </Box>
          
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <FaGoogle size={32} color='orange' />
          </Box>
         
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
            <SiGmail size={40} color='darkyellow' />
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
            <MdEuro size={40} color='blue' />
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