import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import './navbar.css';

const pages = ['Home Page', 'Page 1', 'Page 2'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
    id ="appbar"
    position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
          id = "navbartitle"
            variant="h6"
            noWrap
            component="a"
            href="index.html"
            sx={{
              display: { xs: 'none', md: 'flex' },
            }}
          >
            TEST
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton /*DROPDOWN!!! */
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
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
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
                <MenuItem onClick={handleCloseNavMenu}>
                  <ul>
                    <li>
                      <a href="index.html">Index</a>
                    </li>
                    <li>
                      <a href="page2.html">Page 2</a>
                    </li>
                    <li>
                      <a href="page3.html">Page 3</a>
                    </li>
                  </ul>
                </MenuItem>
            </Menu>
          </Box>
           {/*Slutet på dropdown*/}
          <Typography
          id="navbartitlem"
            variant="h5" /*header*/
            noWrap /*Only god knows */
            component="a" /*Link B) */
            href="#index.html" /*Link B) */
            sx={{ /*CSS!!!!!!!!!!!!!!! <3333 */
              display: { xs: 'flex', md: 'none' }, /*FLEXBOX!!! Shoutout!! */
             }}
          >
            TEST
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
            href="index.html">Index
            </Button>
            <Button href="page2.html">
              Page 2
            </Button>
            <Button href="page3.html">
              Page 3
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;