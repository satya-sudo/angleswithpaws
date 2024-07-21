// GalleryPage.js
import React, { useState } from 'react';
import { Grid, Card, CardMedia, CardContent, Typography, Container, Dialog, DialogContent } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import theme from './theme'; // Import your theme

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    margin: 'auto',
    cursor: 'pointer'
  },
  media: {
    height: 200,
  },
  dialogContent: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0px !important',
    overflow: 'hidden',
    overflowY: 'hidden',

  },
  dialogImage: {
    width: '100%',
    height: 'auto',
    maxWidth: '90vw', // Limit the image to 90% of the viewport width
    maxHeight: '90vh', // Limit the image to 90% of the viewport height
  },
});

const images = [
  { url: `${process.env.PUBLIC_URL}/gallary/pic1.jpg` },
  { url: `${process.env.PUBLIC_URL}/gallary/pic2.jpg` },
  { url: `${process.env.PUBLIC_URL}/gallary/pic3.jpeg` },
  { url: `${process.env.PUBLIC_URL}/gallary/pic4.jpg` },
  { url: `${process.env.PUBLIC_URL}/gallary/pic5.jpg` },
  { url: `${process.env.PUBLIC_URL}/gallary/pic6.jpg` },
  { url: `${process.env.PUBLIC_URL}/gallary/pic7.png` },
  { url: `${process.env.PUBLIC_URL}/gallary/pic8.png` },
  { url: `${process.env.PUBLIC_URL}/gallary/pic9.png` },
  { url: `${process.env.PUBLIC_URL}/gallary/pic10.png` },
  { url: `${process.env.PUBLIC_URL}/gallary/pic11.png` },
  { url: `${process.env.PUBLIC_URL}/gallary/pic12.png` },
  // Add more images as needed as we move to server side , this logic will move to be
];

const GalleryPage =  React.forwardRef((props, ref) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClickOpen = (url) => {
    setSelectedImage(url);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  return (
    <ThemeProvider theme={theme}>
    <div className='Gallary__container' ref={ref}>
      <Container>
        <Typography variant="h4" gutterBottom sx={{padding:'20px 0px'}}>
          A little sneak peak ...
        </Typography>
        <Grid container spacing={4}>
          {images.map((image, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card className={classes.card} onClick={() => handleClickOpen(image.url)}>
                <CardMedia
                  className={classes.media}
                  image={image.url}
                  title={image.title}
                />
              </Card>
            </Grid>
          ))}
        </Grid>
        <Dialog open={open} onClose={handleClose} maxWidth="md">
          <DialogContent className={classes.dialogContent} >
            {selectedImage && (
              <img src={selectedImage} alt="Selected"  className={classes.dialogImage} />
            )}
          </DialogContent>
        </Dialog>
      </Container>
      </div>
    </ThemeProvider>
  );
}
);

export default GalleryPage;
