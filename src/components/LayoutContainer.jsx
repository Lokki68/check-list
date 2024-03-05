import { Box, Button, Container, Input, Paper, Skeleton, Stack, TextField, Typography } from "@mui/material";
import CardProduct from "./CardProduct";
import { useContext, useEffect, useState } from "react";
import ModalProduct from "./ModalProduct";
import { DatePicker } from "@mui/x-date-pickers";
import { GlobalStore } from "../context/globalStore";
import isEmpty from "../utils/emptyObject";
import Notify from "./Notify";
import Header from "./Header";

export default function LayoutContainer({title, data, showModal, toggleModal, checkProducts}) {
  
  const [checkResult, setCheckResult] = useState(storeChecking.products || {})


  const handleProductClick = (item) => {
    setValue(item.title)
    toggleModal()
  }

  const handleChange = (e) => {
    setValue(e.target.value)
  }


  const addCheckResult = ({title, qteValue}) => {
    const prevValue = {...checkResult}
    prevValue[title] = qteValue

    setCheckResult(prevValue)
  }

  const handleSubmit = () => {
    if(!isEmpty(checkResult) && !!dateValue?._d) {
      handleAddChecking({date: dateValue.format('DD/MM/YYYY'), products: checkResult})
      setNotify({message: "Liste envoyé avec succès", severity: 'success'})
      setTimeout(() => {
        setNotify({message: '', severity: 'success'})
      }, 3000);
    } else {
      setNotify({message: "Veuillez renseigner une date et un produit", severity: 'warning'})
      setTimeout(() => {
        setNotify({message: '', severity: 'success'})
      }, 3000);
    }
  }

  const handleDelete = () => {
    resetStoreChecking()
  }


  return (
    <Stack spacing={2} sx={{paddingY: 10}}  >
      {
        showModal && (
          <ModalProduct 
            title={value} 
            quantity={checkResult[value] ? checkResult[value] : 0 } 
            showModal={showModal} 
            handleClose={toggleModal} 
            addCheckResult={addCheckResult}
          />
        )
      }
      <Container sx={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2}} >
        
        <Typography variant="h4"  >{title}</Typography>
        {
          data && data.length > 0 ? (
            data.map((item, index) => {

              return (
                <CardProduct 
                  onClick={() => handleProductClick(item)}
                  item={item} 
                  key={index} 
                  value={checkResult[item.title]} 
                />
              )
            })
          ) : <Skeleton variant="rounded"  width="100%" height={60} />
        }
        <Box sx={{mt: 2}}>
          <Button
            onClick={ environment === 'store' ? handleSubmit : handleDelete }
            disabled={isEmpty(checkResult)}
          >Envoyer</Button>
        </Box>
      </Container>
    </Stack>
  );
}
