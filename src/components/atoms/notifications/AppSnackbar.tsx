import { Alert, Snackbar } from "@mui/material";
import { SMALL_ERROR, SMALL_INFO, SMALL_SUCCESS, SMALL_WARNING } from "../../../constants/constants";
import { SnackAction } from "../../../types/types";
import { useEffect, useState } from "react";

interface IAppSnackbarProps {
  payload: SnackAction;
  // setSnackAction: (openSnack: SnackAction) => void;
}

const AppSnackbar = (props: IAppSnackbarProps) => {

  const [snackAction, setSnackAction] = useState<SnackAction>({
    openSnack: false,
    snackMsg: '',
    snackType: ''
  });

useEffect(() => {
    setSnackAction({
      openSnack: props.payload?.openSnack,
      snackMsg: props.payload?.snackMsg,
      snackType: props.payload?.snackType,
    });
}, [props.payload]);





  const handleClose = () => {
    setSnackAction({openSnack: false, snackMsg: '', snackType: ''});
  };

  return (
    <Snackbar open={snackAction?.openSnack} autoHideDuration={5000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
      <Alert
        onClose={handleClose}
        severity={
          snackAction?.snackType === SMALL_ERROR ? SMALL_ERROR : 
            snackAction?.snackType === SMALL_SUCCESS ? SMALL_SUCCESS :
              snackAction?.snackType === SMALL_WARNING ? SMALL_WARNING :
                SMALL_INFO
        }
        variant="filled"
        sx={{ width: '100%' }}
      >
        {snackAction?.snackMsg}
      </Alert>
    </Snackbar>
  );
};

export default AppSnackbar;
