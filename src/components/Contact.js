import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme';
import { contactDetails } from './constants';
import { Container, Typography, TextField, Button, Grid, Box } from '@mui/material';
import { Room, Mail, Phone } from '@mui/icons-material';

const Contact = React.forwardRef((props, ref) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateForm = () => {
        let valid = true;
        const newErrors = { name: '', email: '', message: '' };

        if (!formData.name.trim()) {
            newErrors.name = 'Name is required.';
            valid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required.';
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email address is invalid.';
            valid = false;
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message is required.';
            valid = false;
        }

        setErrors(newErrors);
        return valid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
        const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
        const userID = process.env.REACT_APP_EMAILJS_USER_ID;

        try {
            const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Basic ${btoa(`${userID}:`)}`
                },
                body: JSON.stringify({
                    service_id: serviceID,
                    template_id: templateID,
                    user_id: userID,
                    template_params: formData
                }),
            });

            if (response.ok) {
                setStatus('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' });
                setErrors({ name: '', email: '', message: '' });
            } else {
                setStatus('Failed to send message. Please try again.');
            }
        } catch (error) {
            console.error('Error:', error);
            setStatus('Failed to send message. Please try again.');
        }
    };

    return (
        <ThemeProvider theme={theme}>
            <Box className='Contact__container' sx={{ marginTop: '2rem' }}>
                <Container>
                    <Typography ref={ref} variant="h4" gutterBottom>
                        Get In Touch
                    </Typography>
                    <Grid spacing={6}>
                        {/* Right Column - Contact Form */}
                        <Grid item xs={12} md={8}>
                            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    label="Name"
                                    variant="outlined"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    error={!!errors.name}
                                    helperText={errors.name}
                                />
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    label="Email"
                                    variant="outlined"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    error={!!errors.email}
                                    helperText={errors.email}
                                />
                                <TextField
                                    fullWidth
                                    margin="normal"
                                    label="Message"
                                    variant="outlined"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    multiline
                                    rows={4}
                                    required
                                    error={!!errors.message}
                                    helperText={errors.message}
                                />
                                <Button
                                    variant="contained"
                                    color="primary"
                                    style={{ marginTop: '1rem' }}
                                    type="submit"
                                >
                                    Submit
                                </Button>
                                {status && (
                                    <Typography
                                        variant="body2"
                                        style={{ marginTop: '1rem' }}
                                    >
                                        {status}
                                    </Typography>
                                )}
                            </form>
                        </Grid>
                        {/* Left Column - Contact Details */}
                        <Grid item xs={12} md={4} style={{ marginTop: '1rem'}} >
                            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2, flexWrap: 'wrap'  }}>
                                    <Room sx={{ mr: 1 }} />
                                    <Typography variant="body1" sx={{ fontWeight: 'bold', minWidth: '120px' }}>
                                        Address:
                                    </Typography>
                                    <Typography variant="body1" sx={{ flexGrow: 1 }}>
                                        {contactDetails.address}
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2,  flexWrap: 'wrap'  }}>
                                    <Mail sx={{ mr: 1 }} />
                                    <Typography variant="body1" sx={{ fontWeight: 'bold', minWidth: '120px' }}>
                                        Email:
                                    </Typography>
                                    <Typography variant="body1" sx={{ flexGrow: 1 }}>
                                        {contactDetails.email}
                                    </Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'flex-start',  flexWrap: 'wrap'  }}>
                                    <Phone sx={{ mr: 1 }} />
                                    <Typography variant="body1" sx={{ fontWeight: 'bold', minWidth: '120px' }}>
                                        Phone:
                                    </Typography>
                                    <Typography variant="body1" sx={{ flexGrow: 1 }}>
                                        {contactDetails.phone}
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </ThemeProvider>
    );
});

export default Contact;
