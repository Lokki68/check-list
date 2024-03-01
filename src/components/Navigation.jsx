import { useState } from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import StoreMallDirectoryIcon from '@mui/icons-material/StoreMallDirectory';
import BarChartIcon from '@mui/icons-material/BarChart';
import {  useNavigate } from "react-router-dom";

function Navigation() {
  const navigate = useNavigate()
  const [value, setValue] = useState('store')

  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(newValue);
    navigate(`/${newValue}`)
  }

  return (
    <Paper
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
      }}
      elevation={3}
    >
      <BottomNavigation value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Store"
        value="store"
        icon={<StoreMallDirectoryIcon />}
      />
      <BottomNavigationAction
        label="Stock"
        value="stock"
        icon={<BarChartIcon />}
      />
    </BottomNavigation>
    </Paper>
  );
}

export default Navigation;