import React from 'react'
import { useEffect,useState } from 'react'
import {Box,Typography,TextField,Button,Stack} from '@mui/material'
import { exerciseOptions,fetchData } from '../utils/FetchData'
import HorizontalScrollbar from './HorizontalScrollbar'

function SearchExercise() {
  const[search,setSearch] = useState('')
  const[exercises,setExercises] = useState([])
  const[bodyParts,setBodyParts] = useState([])
  
  useEffect(()=>{
    const fetchExercisesData = async () => { 
      const bodyPartsData = await fetch('https://exercisedb.p.rapidapi.com/exercises/bodyPartList',exerciseOptions)
      setBodyParts(['all',...bodyPartsData])
    }
  },[])

  const handleSearch = async () => {
    if(search){
      const exercisesData =  await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions);
      const searchedExercises = exercisesData.filter( (exercise) => {
        exercise.name.toLowerCase().includes(search) || 
        exercise.target.toLowerCase().includes(search) ||
        exercise.bodyPart.toLowerCase().includes(search) ||
        exercise.equipment.toLowerCase().includes(search) 
      }) 
    }
  }
  console.log(bodyParts)



  return (
    <Stack alignItems='center' justifyContent='center' p='20px'>
      <Typography fontWeight='500' sx={{fontSize:{lg:'44px' , xs:'30px'}}} textAlign='center' mt="100px" mb='70px'>
        Search for Exercises
      </Typography>
      <Box>
        <TextField 
        sx={{
          input: {fontWeight:700 ,border:'none',borderRadius:'40px' },
          width: {lg: '60vw'},
          height :'40px'
        }} 
        value={search} 
        onChange={(e) => setSearch(e.target.value.toLowerCase())
         }
        placeholder='Search Exercises'
        type='text'>

        </TextField>
      
        <Button className='search-btn' 
        onClick={handleSearch}
        sx={{
          bgcolor:'#FF2625',
          color:"#FFF",
          textTransform:'none',
          height:'56px',
          width:'100px',
          fontSize : '15px',
          padding:'10px',
          position:'absolute',
          right:'1000'
          }}>Search</Button>
      </Box>
      <Box sx={{
        position:'relative',
        p:'20px',
        width:'100%'
      }}>
        <HorizontalScrollbar data={bodyParts} />
        
      </Box>
    </Stack>
  )
}

export default SearchExercise