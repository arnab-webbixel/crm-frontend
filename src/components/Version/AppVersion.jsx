// src/components/AppVersion.js
import React from 'react';
import { Box, Typography } from '@mui/material';

const AppVersion = () => {
  // You can import the version directly from package.json
  const version =  "Beta";
  
  return (
    // <Box sx={{ padding: 2, textAlign: 'center', backgroundColor: '#f5f5f5' }}>
    //   <Typography variant="body2" color="textSecondary">
    //     Version: {version}
    //   </Typography>
    // </Box>
    <Typography variant="caption" color="textSecondary" style={{ position: 'absolute', bottom: 10, right: 10 , color: 'white'}}>
    Version: {version}
  </Typography>
  );
};

export default AppVersion;
