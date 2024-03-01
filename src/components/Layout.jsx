import { Container, Input, Stack, Typography } from "@mui/material";

export default function LayoutContainer({environment, data}) {

  const title = environment === "store" ? "Magasin" : "Reserve"

  return (
    <Stack spacing={2}>
      <Input />
      <Container sx={{textAlign: "center"}} >
        <Typography variant="h3" >{title}</Typography>

      </Container>

      
    </Stack>
  );
}
