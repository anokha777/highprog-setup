import { Backdrop, CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';

interface ILoaderProps {
  isLoading: boolean;
}

export function Loader({ isLoading }: ILoaderProps) {
  const [openLoader, setOpenLoader] = useState(false);

  useEffect(() => {
    setOpenLoader(isLoading);
  }, [isLoading]);

  return (
    <Backdrop
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={openLoader}
    >
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

export default Loader;
