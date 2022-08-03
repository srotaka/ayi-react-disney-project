import React from 'react'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const MyFooter = () => {
    const thisYear = new Date().getFullYear();

  return (
    <div>
        {/* Footer */}
      <Box sx={{ bgcolor: '#95b5dc', p: 6, padding: 10}} component="footer">        
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
         ©Copyright 2021-{thisYear} | <b>Silvia Otaka</b> | Programming with ❤
        </Typography>        
      </Box>
      {/* End footer */}
    </div>
  )
}

export default MyFooter