/* eslint-disable no-nested-ternary */
import { Alert, Snackbar } from '@mui/material';
import { useEffect, useState } from 'react';
import {
  SMALL_ERROR,
  SMALL_INFO,
  SMALL_SUCCESS,
  SMALL_WARNING,
} from '../../../constants/constants.ts';
import { SnackAction } from '../../../types/types.ts';

interface IAppSnackbarProps {
  payload: SnackAction;
  // setSnackAction: (openSnack: SnackAction) => void;
}

// function AppSnackbar(props: IAppSnackbarProps) {
function AppSnackbar({ payload }: IAppSnackbarProps) {
  const [snackAction, setSnackAction] = useState<SnackAction>({
    openSnack: false,
    snackMsg: '',
    snackType: '',
  });

  useEffect(() => {
    setSnackAction({
      openSnack: payload?.openSnack,
      snackMsg: payload?.snackMsg,
      snackType: payload?.snackType,
    });
  }, [payload]);

  const handleClose = () => {
    setSnackAction({ openSnack: false, snackMsg: '', snackType: '' });
  };

  return (
    <Snackbar
      open={snackAction?.openSnack}
      autoHideDuration={5000}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
    >
      <Alert
        onClose={handleClose}
        severity={
          snackAction?.snackType === SMALL_ERROR
            ? SMALL_ERROR
            : snackAction?.snackType === SMALL_SUCCESS
              ? SMALL_SUCCESS
              : snackAction?.snackType === SMALL_WARNING
                ? SMALL_WARNING
                : SMALL_INFO
        }
        variant="filled"
        sx={{ width: '100%' }}
      >
        {snackAction?.snackMsg}
      </Alert>
    </Snackbar>
  );
}

export default AppSnackbar;
