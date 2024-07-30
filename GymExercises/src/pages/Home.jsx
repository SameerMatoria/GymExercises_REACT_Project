import React from 'react'
import { useState } from 'react'
import { Box } from '@mui/material'
import HeroBanner from '../components/HeroBanner';
import Exercise from '../components/Exercise';
import SearchExercise from '../components/SearchExercise'


function Home() {
  return (
    <Box>
      <HeroBanner />
      <SearchExercise />
      <Exercise />
    </Box>
  )
}

export default Home