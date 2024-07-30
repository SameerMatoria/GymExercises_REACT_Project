import { Box } from '@mui/material'
import React from 'react'

function HorizontalScrollbar({data}) {
  return (
    <div>
        {data.map((item)=>{
            <Box 
            key={item.id || item}
            itemId={item.id || item}
            title={item.id || item}
            >
                {item}
            </Box>
        }    
        )}
    </div>
  )
}

export default HorizontalScrollbar