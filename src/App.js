import React from 'react'
import './App.css'
import {Route, Routes} from 'react-router-dom'
import { Box } from '@mui/system'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import ExerciseDetail from './pages/ExerciseDetail'
import red from './assets/images/red.png'

const App = () => {
  return (
    <>
    <img src={red} style={{position:'absolute', display:'inherit' , opacity:'0.1' , width:'115%' , margin: '-110px  -50px' }} />
    <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/exercise/:id" element={<ExerciseDetail/>}/>
        </Routes>
        <Footer/>
    </Box>
    </>
  )
}

export default App