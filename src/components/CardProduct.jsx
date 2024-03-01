import { Box, Paper, Typography } from "@mui/material";

function CardProduct({onClick, item, value}) {
  const color = value > 0 ? 'green' : value === undefined  ? 'grey' : 'red'

  return (
    <Paper
      onClick={onClick}
      elevation={3} 
      sx={{
      display: 'flex', 
      padding: 2, 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      width: '100%', 
      height: 60,
      marginX: 'auto'
      }} 
    >
      <Typography variant="p" >{item.title}</Typography>
      <Box width={30} height={30} sx={{boxShadow: `inset 1px 2px 5px -1px ${color}`, display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
        {value}
      </Box>
    </Paper>
  );
}

export default CardProduct;