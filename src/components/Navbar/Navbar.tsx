import { Box, Button, Container, IconButton, Paper, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import styles from './Navbar.module.css';
// import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';

const pages = [['Who we are'], ['Services ans benefits'], ['Whom it is needed for'], ['Contact us']]

function Navbar() {
  return (
    <Paper elevation={3}>
      <AppBar
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
              // onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'flex-start' }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
            variant="h6"
            noWrap
            component="a"
            // href="#app-bar-with-responsive-menu"
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
                }
              }}
            >
              <NavLink
              to="/"

              className={({ isActive }) => (isActive ? `${styles.active}` : `${styles.inactive}`)}
            >
                <Button
                >
                  Login
                </Button>
              
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) => (isActive ? `${styles.active}` : `${styles.inactive}`)}
            >
                <Button
                  sx={{
                    color: 'white',                   
                  }}
                >
                  Services & benefits
                </Button>
              
            </NavLink>
            </Box>
            
          </Toolbar>
        </Container>
      </AppBar>
    </Paper>
  );
}

export default Navbar;
