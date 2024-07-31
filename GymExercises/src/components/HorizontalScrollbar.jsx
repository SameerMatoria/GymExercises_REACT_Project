import { Box } from '@mui/material'
import React from 'react'
import Bodypart from './Bodypart'

function HorizontalScrollbar({data ,bodyPart, setBodyPart}) {
  return (
    <div>
        {
        data.forEach((item)=>{
            <Box 
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
            >
                <Bodypart item={item}  bodyPart={bodyPart} setBodyPart={setBodyPart}/>
                
            </Box>
        }      
        )}

    </div>
  )
}

export default HorizontalScrollbar