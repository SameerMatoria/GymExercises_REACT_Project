import { Box } from '@mui/material'
import React from 'react'
import Bodypart from './Bodypart'
import {ScrollMenu , VisibilityContext} from 'react-horizontal-scrolling-menu'

function HorizontalScrollbar({data ,bodyPart, setBodyPart}) {
  
  return (
    <ScrollMenu>
        {
        data.map((item)=>(
            <Box 
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
            >
                <Bodypart item={item}  bodyPart={bodyPart} setBodyPart={setBodyPart}/>
            </Box>
        )        
        )}
      
        
    </ScrollMenu>
  )
}

export default HorizontalScrollbar