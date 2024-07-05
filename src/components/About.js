
import React from 'react';
import { ThemeProvider } from '@mui/material/styles';

import theme from './theme';

import { Box, Container, Typography, Grid } from '@mui/material';

const About = React.forwardRef((props, ref) => {
  return (
    <ThemeProvider theme={theme}>
    <div className='About__container' ref={ref}>
    <Container maxWidth="lg" sx={{ my: 5 }}>
      <Grid container spacing={5} alignItems="center">
      <Grid item xs={12} md={5}>
          <Box display="flex" justifyContent="center">
            <img src={`${process.env.PUBLIC_URL}/logo.png`} alt="Angels with Paws Logo" style={{ maxWidth: '100%', height: 'auto' }} />
          </Box>
        </Grid>
        <Grid item xs={12} md={7}>
          <Typography variant="h4" gutterBottom>
            About Angels with Paws
          </Typography>
          <Typography variant="body1" paragraph>
            Welcome to Angels with Paws! We are dedicated to providing a safe haven for our furry friends. Our mission is to rescue, rehabilitate, and rehome abandoned and neglected pets, ensuring they find loving families and forever homes.
          </Typography>
          <Typography variant="body1" paragraph>
            Our dedicated team of volunteers works tirelessly to care for animals in need. We believe that every pet deserves a chance at a happy life, and we are committed to making that a reality. From medical care to training and socialization, we provide comprehensive support to ensure our animals are healthy and happy.
          </Typography>
          <Typography variant="body1" paragraph>
            Join us in our mission to create a world where every pet is loved and cared for. Whether you are looking to adopt, foster, volunteer, or donate, there are many ways to get involved and make a difference. Together, we can give these animals the second chance they deserve.
          </Typography>
        </Grid>
        
      </Grid>
    </Container>
    </div>
    
    </ThemeProvider>
  );
}
);

export default About;
