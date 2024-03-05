import { Paper, TextField } from '@mui/material';
import Notify from './Notify';

function Header({notify, inputValue, handleChangeInput, toggleModal, dateValue, handleChangeDate}) {
  return (
    <Paper sx={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      display: 'flex',
      gap: 2,
      padding: 2,
    }} >
     {
     notify && notify.message !== '' 
      ? (
        <>
          <TextField 
          sx={{width: '100%'}}
          label="Recherche"
          value={inputValue}
          onChange={handleChangeInput}
          onKeyDown={(e) => {
            if(e.key === 'Enter' && inputValue) {
              toggleModal()
            }
          }}
        />
        <TextField
          value={dateValue}
          onChange={handleChangeDate}
          type='date'
          placeholder='none'
        />
      </>
      ) 
      : <Notify message={notify.message} severity={notify.severity} />
     }
    </Paper>
  );
}

export default Header;