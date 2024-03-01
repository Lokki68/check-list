import { Container, Input, Skeleton, Stack, Typography } from "@mui/material";
import CardProduct from "./CardProduct";
import { useState } from "react";

export default function LayoutContainer({environment, data}) {
  const [checkResult, setCheckResult] = useState({
    "iPhone 9": 0,
    "iPhone X": 10,
  })

  const addCheckResult = (item) => {
    // setCheckResult({
    //   ...checkResult,
    //   item
    // })
  }

  const title = environment === "store" ? "Magasin" : "Reserve"

  return (
    <Stack spacing={2} sx={{paddingBottom: 15}}  >
      <Input />
      <Container sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2}} >
        <Typography variant="h4"  >{title}</Typography>
        {
          data && data.length > 0 ? (
            data.map((item, index) => {

              return (
                <CardProduct 
                  item={item} 
                  key={index} 
                  value={checkResult[item.title]} 
                />
              )
            })
          ) : <Skeleton variant="rounded"  width="90%" height={60} />
        }

      </Container>
    </Stack>
  );
}
