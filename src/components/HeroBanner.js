import React from 'react'
import { Box, Button, Stack , Typography } from '@mui/material'
import banner from "../assets/images/banner.jpg"



const HeroBanner = () => {
  return (
    <Box sx={{
        mt: {lg: '212px', xs: '70px'},
        ml: {sm: '100px', xs: '100px'}
     }} position="relative">
        <Typography color="#FF2625" 
        fontWeight="600"
        fontSize="26px">
            Red Arm Club
        </Typography>
        <Typography fontWeight={700}
         sx={{ fontSize: {lg:'44px', xs: '40px'}}}
         mt='30px'
         mb='30px'
         >
           Our Motto Is <br/> Fitness And Health 
        </Typography>
        <Typography fontSize="22px"
         lineHeight="35px" mb={3}>
            check out the most effective exercise
        </Typography>
        <Button sx={{backgroundColor:"#FF2625" , padding:'10px'}} color='error' variant="contained" href="#exercises">
            Explor Exercises
        </Button>
        <img src={banner} alt="banner"
        className="hero-banner-img"/>
        <Typography
        fontWeight={600}
        color="#FF2625"
        sx={{ opacity: 0.1 , display: {lg:'block', sm:'none', xs: 'none'} }}
        fontSize="200px">
            Exercise
        </Typography>
    </Box>
  )
}

export default HeroBanner