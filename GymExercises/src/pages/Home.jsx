import React from "react";
import { useState } from "react";
import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import Exercises from "../components/Exercises";
import SearchExercise from "../components/SearchExercise";

function Home() {
  const [bodyPart, setBodyPart] = useState('all');
  const [exercises, setExercises] = useState([]);
  return (
    <Box>
      <HeroBanner />
      <SearchExercise
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        exercises={exercises}
      />
    </Box>
  );
}

export default Home;
