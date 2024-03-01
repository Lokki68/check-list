import { Box, Button, Container, Paper, Skeleton, Stack, TextField, Typography } from "@mui/material";
import CardProduct from "./CardProduct";
import { useContext, useEffect, useState } from "react";
import ModalProduct from "./ModalProduct";
import { DatePicker } from "@mui/x-date-pickers";
import { GlobalStore } from "../context/globalStore";
import isEmpty from "../utils/emptyObject";
import Notify from "./Notify";

export default function LayoutContainer({environment, data, checkProducts}) {
  const {
    storeChecking,
    setstoreChecking,
    handleAddChecking,
    resetStoreChecking
  } = useContext(GlobalStore)
  
  const [showModal, setShowModal] = useState(false)
  const [value, setValue] = useState('')
  const [dateValue, setDateValue] = useState(null)
  const [checkResult, setCheckResult] = useState(storeChecking.products || {})
  const [notify, setNotify] = useState({message: "", severity: "success"})


  const handleProductClick = (item) => {
    setValue(item.title)
    toggleModal()
  }

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  const toggleModal = () => setShowModal(!showModal)

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

  
 
  const title = environment === "store" ? "Magasin" : "Réaprovisionnement"

  const header = 
      (
        notify.message === ''
          ? (
            <>
              <TextField 
              sx={{width: '100%'}}
              label="Recherche"
              value={value}
              onChange={handleChange}
              onKeyDown={(e) => {
                if(e.key === 'Enter' && value) {
                  toggleModal()
                }
              }}
            />
            <DatePicker 
              label="Date" 
              value={dateValue}
              onChange={(newValue) => setDateValue(newValue)}
              disabled={environment === "stock"} 
            />
            </>
          )
          : <Notify message={notify.message} severity={notify.severity} />
      )
  

  return (
    <Stack spacing={2} sx={{paddingY: 10}}  >
      <Paper sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        display: 'flex',
        gap: 2,
        padding: 2,
      }} >
        {header}
      </Paper>
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
