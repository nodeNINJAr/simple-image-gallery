import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'primary.main', color: 'white', p: 2, mt: 'auto' }}>
      <Typography variant="body1" align="center">
        © {new Date().getFullYear()} Image Gallery
      </Typography>
    </Box>
  );
};

export default Footer;