import { CircularProgress, Container } from '@mui/material';

export default function Loader() {

  return (
    <Container sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100vw",
      height: "100vh",
      backgroundColor: "white",
    }} >
      <CircularProgress />
    </Container>
  );
}

