import React from 'react';
import Grid from '@mui/material/Grid';

type CustomGridProps = {
  item?: boolean;
  container?: boolean;
  spacing?: number;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  children?: React.ReactNode;
};

const CustomGrid: React.FC<CustomGridProps> = ({ children, ...props }) => {
  return <Grid {...props}>{children}</Grid>;
};

export default CustomGrid; 