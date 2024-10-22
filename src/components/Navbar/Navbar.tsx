import { Box, Button, Container, IconButton, Paper, Typography } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Navbar.module.css';
import { pages } from '../../data/pages';
import Logo from '../Logo';
import { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

function Navbar() {
  const router = useRouter();

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  // const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  }
  
  // const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
  //   setAnchorElUser(event.currentTarget);
  // }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  }

  const handleMobileMenuClick = (pagePath: string) => {
    router.push(pagePath);
    setAnchorElNav(null); // Close the mobile menu after navigation
  };
  
  // const handleCloseUserMenu = () => {
  //   setAnchorElUser(null);
  // }

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
              onClick={handleOpenNavMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                '& .MuiPaper-root': {
                  backgroundColor: 'primary.light',
                width: '100%'  
               },
              }}
            >
              {pages.map((page) => (
                <MenuItem 
                  onClick={() => handleMobileMenuClick(page[1])} 
                  key={page[1]}
                  aria-label={`Navigate to ${page[0]}`}
                  tabIndex={0}
                >
                  <Typography sx={{ textAlign: 'center' }}>{page[0]}</Typography>
                </MenuItem>
              ))}
            </Menu>
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
              aria-label='logo'
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
              role='navigation'
              aria-label='primary navigation'
            >
              {pages.map((page) => (
                <Link
                  href={page[1]}
                  passHref
                  className={router.pathname === page[1] ? styles.active : styles.inactive}
                  key={page[1]}
                  aria-current={router.pathname === page[1] ? 'page' : undefined}
                >
                <Button
                  
                  sx={{
                    color: router.pathname === page[1] ? 'white' : 'inherit',
                    }}
                    aria-label={`Navigate to ${page[0]}`}
                    tabIndex={0}
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