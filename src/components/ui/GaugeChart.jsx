import React from 'react';
import { Gauge , gaugeClasses} from '@mui/x-charts/Gauge';
import { Card, CardContent, Typography } from '@mui/material';
const getColorForValue = (value) => {
  if (value <= 30) {
    return '#ff0000'; // Red for low values
  } else if (value <= 70) {
    return '#ff9900'; // Orange for medium values
  } else {
    return '#33cc33'; // Green for high values
  }
};

const GaugeChart = ({ title, value, startAngle, endAngle, innerRadius, outerRadius}) => {
  return (
    <Card sx={{ maxWidth: 380, margin: 2, padding: 2 }}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h6" gutterBottom sx={{ textAlign: 'center', fontWeight: 'bold' }}>
          {title}
        </Typography>
        <div className="flex justify-center items-center h-[300px] w-[250px]"> 
          <Gauge
            value={value}
            startAngle={startAngle}
            endAngle={endAngle}
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            sx={(theme) => ({
              width: '100%', 
              height: '100%', 
              [`& .${gaugeClasses.valueText}`]: {
                fontSize: 40, // Customize font size of value text
              },
              [`& .${gaugeClasses.valueArc}`]: {
                fill: getColorForValue(value), // Dynamically apply color based on value
              },
              [`& .${gaugeClasses.referenceArc}`]: {
                fill: theme.palette.text.disabled, // Set color for the reference arc (background)
              },
            })}
          />
        </div>
      </CardContent>
    </Card>
  );
};

export default GaugeChart;
