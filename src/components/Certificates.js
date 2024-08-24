import React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

const CertificateChips = () => {
  const certificates = [
    { name: 'Order for registeration', link: `${process.env.PUBLIC_URL}/certificates/10ac1.pdf` },
    { name: 'Order for approval', link: `${process.env.PUBLIC_URL}/certificates/10ac2.pdf`  },
    { name: 'CSR Activites', link:`${process.env.PUBLIC_URL}/certificates/CSR.pdf`  },
    { name: 'TRUST DEED', link: `${process.env.PUBLIC_URL}/certificates/Trustdeed.pdf`  }    
  ]
  return (
    <Box className="chip-container">
      <Stack
        direction="row"
        spacing={2}
        sx={{ justifyContent: 'center', flexWrap: 'wrap', gap: '10px' }}
      >
        {certificates.map((certificate, index) => (
          <Chip
            key={index}
            label={certificate.name}
            component="a"
            href={certificate.link}
            clickable
            variant="outlined"
            className="chip"
            target="_blank"
            rel="noopener noreferrer"
          />
        ))}
      </Stack>
    </Box>
  );
};

export default CertificateChips;
