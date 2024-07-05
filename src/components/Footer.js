
// Footer.js
import React from 'react';
import { Container, Grid, IconButton } from '@mui/material';
import { Room, Instagram, Facebook, WhatsApp } from '@mui/icons-material';

import { ThemeProvider } from '@mui/material/styles';

import theme from './theme';
import { contactDetails } from './constants';

const Footer = () => (
    <ThemeProvider  theme={theme}>
        <div className='Footer'>
            <Grid container spacing={3} justifyContent="center">
            <Grid item>
                <IconButton href={contactDetails.addresslink} target="_blank" rel="noopener" color='rgb(78,52,46)'>
                <Room fontSize="large" />
                </IconButton>
            </Grid>
            <Grid item>
                <IconButton href={contactDetails.instagram} target="_blank" rel="noopener">
                <Instagram fontSize="large" />
                </IconButton>
            </Grid>
            <Grid item>
                <IconButton href={contactDetails.facebook} target="_blank" rel="noopener">
                <Facebook fontSize="large" />
                </IconButton>
            </Grid>
            <Grid item>
                <IconButton href={contactDetails.whatsapp} target="_blank" rel="noopener">
                <WhatsApp fontSize="large" />
                </IconButton>
            </Grid>
            </Grid>
        </div>
    </ThemeProvider>
);

export default Footer;
