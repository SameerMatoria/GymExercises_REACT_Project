import React, { useEffect, useState } from "react";
import { Pagination } from "@mui/material";
import { Stack, Box, Button, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/FetchData";
import ExerciseCard from "./ExerciseCard";

const Exercises = ({ exercises, setExercises, bodypart }) => {
  return (
    <Box id="exercises" sx={{ mt: { lg: "109px" } }} mt="50px" p="20px">
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        mb="46px"
      >
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "50px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {exercises.map((exercise, idx) => (
          <ExerciseCard key={idx} exercise={exercise} />
          // <p>{exercise.name}</p>
        ))}
      </Stack>
      {/* <Stack sx={{ mt: { lg: "114px", xs: "70px" } }} alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack> */}
    </Box>
  );
};

export default Exercises;
