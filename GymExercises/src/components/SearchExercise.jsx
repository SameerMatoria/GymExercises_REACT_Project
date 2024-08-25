import React from "react";
import { useEffect, useState } from "react";
import { Box, Typography, TextField, Button, Stack } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/FetchData";
import HorizontalScrollbar from "./HorizontalScrollbar";

function SearchExercise({ setExercises, setBodyPart, bodyPart }) {
  const [search, setSearch] = useState("");

  const [bodyParts, setBodyParts] = useState([
    "all",
    "chest",
    "back",
    "shoulders",
    "legs",
  ]);

  // useEffect(()=>{
  //   const fetchExercisesData = async () => {
  //     const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions);
  //     setBodyParts(['all',...bodyPartsData]);
  //   }
  //   fetchExercisesData();
  // },[])

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      const searchedExercises = exercisesData.filter((exercise) => {
        return (
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search)
        );
      });

      window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      setSearch("");
      setExercises(searchedExercises);
    }
  };

  return (
    <Stack alignItems="center" justifyContent="center" p="20px" id="exercises">
      <Typography
        fontWeight="500"
        sx={{ fontSize: { lg: "44px", xs: "30px" } }}
        textAlign="center"
        mt="100px"
        mb="70px"
      >
        Search for Exercises
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center", // Center items horizontally
          position: "relative", // Required for absolute positioning inside
          height: "100px", // Adjust height as needed
        }}
      >
        <TextField
          sx={{
            input: { fontWeight: 700, border: "none", borderRadius: "40px" },
            width: { lg: "60vw" },
            height: "40px",
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        ></TextField>

        <Button
          className="search-btn"
          onClick={handleSearch}
          sx={{
            bgcolor: "#FF2625",
            color: "#FFF",
            textTransform: "none",
            height: "56px",
            width: "100px",
            fontSize: "15px",
            padding: "10px",
            position: "absolute",
            right: 0,
          }}
        >
          Search
        </Button>
      </Box>

      <Box
        sx={{
          position: "relative",
          p: "20px",
          width: "100%",
        }}
      >
        <HorizontalScrollbar
          data={bodyParts}
          bodyParts
          setBodyPart={setBodyPart}
          bodyPart={bodyPart}
        />
      </Box>
    </Stack>
  );
}

export default SearchExercise;
