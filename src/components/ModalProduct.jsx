import { AddBoxOutlined } from "@mui/icons-material";
import { Box, Button, IconButton, Modal, TextField, Typography } from "@mui/material";

import { useState } from "react";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: 'none',
  borderRadius: 2,
  boxShadow: 24,
  p: 2,
}

function ModalProduct({
  title, 
  quantity, 
  showModal, 
  handleClose, 
  addCheckResult
}) {
  const [qteValue, setQteValue] = useState(quantity || 0)
  const [error, setError] = useState(null)

  const handleChange = (e) => {
    const checkValue = Number(e.target.value)
    if(isNaN(checkValue)) {
      return setError("Veuillez rentrer une quantité valide")
    }

    if(error) {
      setError(null)
    }

    setQteValue(checkValue)
  }

  const handleValidate = () => {
    addCheckResult({title, qteValue})
    handleClose()
  }

  const checkKey = e => {
    if (e.key === 'Enter') {
      handleValidate()
    }
  }

  return (
    <Modal
      open={showModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          {title}
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }} >
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Quantité en rayon : 
          </Typography>
          <TextField 
            error={error !== null}
            helperText={error}
            value={qteValue}
            onChange={handleChange}
            onKeyDown={e => checkKey(e)}
            variant="outlined" 
            placeholder="0"
          ></TextField>
          <Button
            variant="outlined"
            size="medium"
            sx={{ mt: 2 }}
            onClick={handleValidate}
            startIcon={<AddBoxOutlined />}
          > 
            Ajouter
          </Button>
        </Box>
      </Box>
      
    </Modal>
  );
}

export default ModalProduct;