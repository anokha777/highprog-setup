/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import { Alert, Box, IconButton, Collapse } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface IAppAlertProps {
  openAlert: boolean;
  setOpenAlert: (openAlert: boolean) => void;
  message: string;
}

export default function AppAlert({
  openAlert,
  setOpenAlert,
  message,
}: IAppAlertProps) {
  // const handleClose = () => {
  //   props.setOpenAlert(false);
  // };

  const [openAlert1, setOpenAlert1] = useState(false);

  useEffect(() => {
    setOpenAlert1(openAlert);
  }, [message, openAlert]);

  return (
    <Box sx={{ width: '100%' }}>
      <Collapse in={openAlert1}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="large"
              onClick={() => {
                setOpenAlert(false);
                setOpenAlert1(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {message}
        </Alert>
      </Collapse>
    </Box>
  );
}
