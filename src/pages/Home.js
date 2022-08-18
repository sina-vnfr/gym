import React , { useState } from 'react'
import { Box } from '@mui/system'
import HeroBanner from '../components/HeroBanner'
import SerchExercises from '../components/SerchExercises'
import Esercises from '../components/Esercises'

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');
  return (
    <Box>
      <HeroBanner />
      <SerchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Esercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
    </Box>
  )
}

export default Home