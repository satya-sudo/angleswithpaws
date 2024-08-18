import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import constants from './constants';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Tooltip from '@mui/material/Tooltip';
import MonthlyReportModal from './MonthlyReportModal'; // Import the modal component

const NavTabs = [
  constants.HOME, constants.GALLARY, constants.MONTHLY, constants.EVENTS, constants.CONTACT
];

function Nav({ scrollToSection }) {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {NavTabs.map(({ text, ref, disabled }) => (
          text === constants.MONTHLY.text ? (
            <ListItem button key={text} onClick={handleModalOpen}>
              <ListItemText primary={text} />
            </ListItem>
          ) : (
            <ListItem button key={text}>
              {disabled ? (
                <Tooltip title="Coming Soon!">
                  <ListItemText primary={text} />
                </Tooltip>
              ) : (
                <ListItemText primary={text} onClick={() => scrollToSection(ref)} />
              )}
            </ListItem>
          )
        ))}
      </List>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Angels with Paws
            </Typography>
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              {NavTabs.map(({ text, ref, disabled }) =>
                text === constants.MONTHLY.text ? (
                  <Button key={text} color="inherit" onClick={handleModalOpen}>
                    {text}
                  </Button>
                ) : disabled ? (
                  <Tooltip title="Coming Soon!" key={text}>
                    <Button sx={{ textTransform: 'capitalize' }} color="inherit" disabled>
                      {text}
                    </Button>
                  </Tooltip>
                ) : (
                  <Button
                    color="inherit"
                    onClick={() => scrollToSection(ref)}
                    key={text}
                  >
                    {text}
                  </Button>
                )
              )}
            </Box>
            <Box sx={{ display: { xs: 'block', md: 'none' } }}>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          {list()}
        </Drawer>
      </Box>
      <MonthlyReportModal open={modalOpen} handleClose={handleModalClose} />
    </ThemeProvider>
  );
}

export default Nav;
