import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Box } from '@mui/material';



const SizesExample = ({setBodyPart}) => (
    <Box sx={{width:{xs:'10%', lg:'100%'}}}>
      <ButtonGroup  size="lg" className="mb-2">
        <Button onClick={() => B0(setBodyPart)} style={{  background: "#ff2625", color: "#fff",  border:" 2px solid #ff2625" }}>All</Button>
        <Button onClick={() => B1(setBodyPart)} style={{  background: "#ff2625", color: "#fff",  border:" 2px solid #ff2625" }}>back</Button>
        <Button onClick={() => B2(setBodyPart)} style={{  background: "#ff2625", color: "#fff",  border:" 2px solid #ff2625" }}>cardio</Button>
        <Button onClick={() => B3(setBodyPart)} style={{  background: "#ff2625", color: "#fff",  border:" 2px solid #ff2625" }}>chest</Button>
        <Button onClick={() => B6(setBodyPart)} style={{  background: "#ff2625", color: "#fff",  border:" 2px solid #ff2625" }}>neck</Button>
        <Button onClick={() => B7(setBodyPart)} style={{  background: "#ff2625", color: "#fff",  border:" 2px solid #ff2625" }}>shoulders</Button>
      </ButtonGroup>
    </Box>
  );

function B0(setBodyPart){
  
    setBodyPart("all");
    window.scrollTo({ top: 2200, left: 0, behavior: 'smooth' });
}
function B1(setBodyPart){
  
    setBodyPart("back");
    window.scrollTo({ top: 2200, left: 0, behavior: 'smooth' });
}
function B2(setBodyPart){
  
  setBodyPart("cardio");
  window.scrollTo({ top: 2200, left: 0, behavior: 'smooth' });
}
function B3(setBodyPart){
  
  setBodyPart("chest");
  window.scrollTo({ top: 2200, left: 0, behavior: 'smooth' });
}
function B4(setBodyPart){
  
  setBodyPart("lower arms");
  window.scrollTo({ top: 2200, left: 0, behavior: 'smooth' });
}
function B5(setBodyPart){
  
  setBodyPart("lower legs");
  window.scrollTo({ top: 2200, left: 0, behavior: 'smooth' });
}
function B6(setBodyPart){
  
  setBodyPart("neck");
  window.scrollTo({ top: 2200, left: 0, behavior: 'smooth' });
}
function B7(setBodyPart){
  
  setBodyPart("shoulders");
  window.scrollTo({ top: 2200, left: 0, behavior: 'smooth' });
}

export default SizesExample;