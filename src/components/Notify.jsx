import { Alert } from '@mui/material';

export default function Notify({message, severity}) {
  return (
    <Alert sx={{width: '100%'}} severity={severity}>
      {message}
    </Alert>
  );
}
