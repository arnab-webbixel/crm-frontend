
import {  Typography } from '@mui/material';
import useDarkMode from '@/hooks/useDarkMode';
const AppVersion = () => {
  // You can import the version directly from package.json or set it manually
  const version = "Beta";
  const [darkMode] = useDarkMode(); 

  // Dynamically adjust text color based on the current theme
  const textColor = darkMode ? 'white' : 'black';
  return (
    <Typography
      variant="caption"
      style={{
        position: 'absolute',
        bottom: 10,
        right: 10,
        color: textColor,
      }}
    >
      Version: {version}
    </Typography>
  );
};

export default AppVersion;
