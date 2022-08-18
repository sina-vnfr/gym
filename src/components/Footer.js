import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/logo.png';


const Footer = () => (
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="4px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="4px" pt="2px">
      <img src={Logo} alt="logo" style={{ width: '200px', height: '200px' }} />
    </Stack>
    <Typography variant="h5" sx={{fontFamily:'cursive' , fontSize: { lg: '28px', xs: '20px' } }} mt="0px" textAlign="center" pb="10px">Red Arm Club</Typography>
    <Typography sx={{textAlign:'center' ,fontSize: { lg :'10px' , xs : '10px'}}}> developed by VANNEY</Typography>
  </Box>
);

export default Footer;