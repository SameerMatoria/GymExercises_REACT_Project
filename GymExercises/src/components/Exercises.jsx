import React, { useEffect, useState } from "react";
import { Pagination } from "@mui/material";
import { Stack, Box, Button, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/FetchData";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  
  
  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];
      if (bodyPart === "all") {
        exercisesData = await fetchData(
          "https://exercisedb.p.rapidapi.com/exercises",
          exerciseOptions
        );
      } else {
        exercisesData = await fetchData(
          `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
          exerciseOptions
        );
      }
      console.log(exercisesData)
      setExercises(exercisesData);
    };
    fetchExercisesData();
  }, [bodyPart]);

  return (
    <Box id="exercises" sx={{ mt: { lg: "109px" } }} mt="50px" p="20px">
      <Typography
        variant="h4"
        fontWeight="bold"
        textAlign="center"
        sx={{ fontSize: { lg: "38px", xs: "30px" } }}
        mb="46px"
      >
        Search to learn exercises
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "50px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {exercises.map((exercise, idx) => (
          <ExerciseCard key={idx} exercise={exercise} />
        ))}
      </Stack>
    </Box>
  );
};

export default Exercises;
