import { Box, Button, Container, IconButton, Paper, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Navbar.module.css';

const pages = [['Who we are'], ['Services and benefits'], ['Whom it is needed for'], ['Contact us']];

function Navbar() {
  const router = useRouter(); // Next.js router to handle active link

  return (
    <Paper elevation={3}>
      <AppBar
        position='static'
        sx={{
          backgroundColor: 'primary.light',
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
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              My Navbar
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: 'none',
                  md: 'flex',
                },
              }}
            >
              {/* Using Link from next/link for Next.js navigation */}
              <Link href="/" passHref>
                <Button
                  className={router.pathname === '/' ? styles.active : styles.inactive}
                  sx={{
                    color: router.pathname === '/' ? 'white' : 'inherit',
                  }}
                >
                  Home
                </Button>
              </Link>
              <Link href="/services" passHref>
                <Button
                  className={router.pathname === '/services' ? styles.active : styles.inactive}
                  sx={{
                    color: router.pathname === '/services' ? 'white' : 'inherit',
                  }}
                >
                  Services & benefits
                </Button>
              </Link>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Paper>
  );
}

export default Navbar;