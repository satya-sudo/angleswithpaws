import React from 'react';
import { ThemeProvider } from '@mui/material/styles';

import theme from './theme';
import { contactDetails } from './constants';

import { Container, Typography, TextField, Button, Link, Grid } from '@mui/material';
import { Room, Mail, Phone } from '@mui/icons-material';

const Contact = React.forwardRef((props, ref) => (
    <ThemeProvider theme={theme} >
        <div className='Contact__container'>
            <Container style={{ marginTop: '2rem' }}>
                <Typography ref={ref} variant="h4" gutterBottom>
                Get In Touch...
                </Typography>
                <Grid container spacing={6}>
                {/* Right Column - Contact Form */}
                <Grid item xs={12} md={8}>
                    <form noValidate autoComplete="off">
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Name"
                        variant="outlined"
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Email"
                        variant="outlined"
                    />
                    <TextField
                        fullWidth
                        margin="normal"
                        label="Message"
                        variant="outlined"
                        multiline
                        rows={4}
                    />
                    <Button variant="contained" color="primary" style={{ marginTop: '1rem' }}>
                        Submit
                    </Button>
                    </form>
                </Grid>
                {/* Left Column - Contact Details */}
                <Grid item xs={12} md={4}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem' }}>
                        <Room style={{ marginRight: '0.5rem' }} />
                        <Typography variant="body1" style={{ fontWeight: 'bold', minWidth: '120px' }}>
                        Address:
                        </Typography>
                        <Typography variant="body1" style={{ flexGrow: 1 }}>
                            {contactDetails.address}
                        </Typography>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '1rem' }}>
                        <Mail style={{ marginRight: '0.5rem' }} />
                        <Typography variant="body1" style={{ fontWeight: 'bold', minWidth: '120px' }}>
                        Email:
                        </Typography>
                        <Typography variant="body1" style={{ flexGrow: 1 }}>
                            {contactDetails.email}
                        </Typography>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                        <Phone style={{ marginRight: '0.5rem' }} />
                        <Typography variant="body1" style={{ fontWeight: 'bold', minWidth: '120px' }}>
                        Phone:
                        </Typography>
                        <Typography variant="body1" style={{ flexGrow: 1 }}>
                            {contactDetails.phone}
                        </Typography>
                    </div>
                    </div>
                </Grid>
            </Grid>
        </Container>
        </div>
    </ThemeProvider>

));

export default Contact;
