import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { Grid, Card, CardMedia, CardContent, Typography, Container } from '@mui/material';
import theme from './theme'; 

const Stories = ({ stories, ref }) => {
  return (
    <ThemeProvider theme={theme}>
      <div className='Stories__container' ref={ref}>
        <Container>
          <Typography variant="h4" gutterBottom sx={{ padding: '30px 10px 30px 0px;', textAlign: 'left', color: '#3e3e3e', marginBottom: '2.75rem' }}>
            Get to Know Them...
          </Typography>
          <Grid spacing={6}>
            {stories.map((story, index) => (
              <Grid
                container
                key={index}
                spacing={2}
                direction={index % 2 === 0 ? 'row' : 'row-reverse'}
                alignItems="center"
                justifyContent="center"
                padding='16px'
              >
                <Grid item xs={12} md={6}>
                  <CardMedia
                    component="img"
                    height="300"
                    image={story.image}
                    alt={story.title}
                    sx={{
                      borderRadius: 4,
                      objectFit: 'cover',
                      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                    }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Card
                    sx={{
                      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
                      borderRadius: 4,
                      padding: '20px',
                      height: '100%',
                      backgroundColor: '#f5f2ef',
                    }}
                  >
                    <CardContent sx={{ padding: '16px 24px' }}>
                      <Typography
                        gutterBottom
                        variant="h5"
                        component="div"
                        sx={{
                          color: '#2d2d2d',
                          fontWeight: 600,
                          marginBottom: '16px',
                        }}
                      >
                        {story.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        color="text.secondary"
                        sx={{
                          color: '#4a4a4a',
                          lineHeight: 1.6,
                          fontSize: '1rem',
                        }}
                      >
                        {story.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default Stories;
