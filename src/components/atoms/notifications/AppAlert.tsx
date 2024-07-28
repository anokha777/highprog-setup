import { useEffect, useState } from 'react';
import { Alert, Box, IconButton, Collapse } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface IAppAlertProps {
  openAlert: boolean;
  setOpenAlert: (openAlert: boolean) => void;
  message: string;
}

export default function AppAlert(props: IAppAlertProps) {
  // const handleClose = () => {
  //   props.setOpenAlert(false);
  // };

  const [openAlert, setOpenAlert] = useState(false);

  useEffect(() => {
    setOpenAlert(props.openAlert);
  }, [props.message, props.openAlert]);

  return (
    <Box sx={{ width: '100%' }}>
      <Collapse in={openAlert}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="large"
              onClick={() => {
                props.setOpenAlert(false);
                setOpenAlert(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {props.message}
        </Alert>
      </Collapse>
    </Box>
  );
}
