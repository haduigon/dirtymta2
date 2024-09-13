import { Box, Button, Container, IconButton, Paper, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Navbar.module.css';
import { pages } from '../../data/pages';
import Logo from '../Logo';

function Navbar() {
  const router = useRouter();

  return (
    <Paper elevation={3}>
      <AppBar
        position='static'
        sx={{
          backgroundColor: 'primary.light',
          height: '10vh'
        }}
      >
        <Container>
          <Toolbar>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-start' }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              <Box
                sx={{
                  position: {xs: 'absolute', md: 'absolute'},
                  top: { xs: '10%', md: '10%' },
                  left: {xs: '65%', md: '5%'},
                  zIndex: 10,
                }}
              >
                <Logo />
              </Box>
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: 'none',
                  md: 'flex',
                  justifyContent: 'center'
                },
              }}
            >
              {pages.map((page) => (
                <Link
                  href={page[1]}
                  passHref
                  className={router.pathname === page[1] ? styles.active : styles.inactive}
                  key={page[1]}
                >
                <Button
                  
                  sx={{
                    color: router.pathname === page[1] ? 'white' : 'inherit',
                  }}
                >
                  {page[0]}
                </Button>
              </Link>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Paper>
  );
}

export default Navbar;