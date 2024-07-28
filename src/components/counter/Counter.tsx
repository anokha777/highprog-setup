import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import { decrement, incrementAsync } from '../../state/counter/counterSlice.ts';
import { AppDispatch, RootState } from '../../state/store.ts';

function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h2>{count}</h2>
      <div>
        <Button
          variant="contained"
          onClick={() => dispatch(incrementAsync(10))}
        >
          Increment
        </Button>
        <Button variant="contained" onClick={() => dispatch(decrement())}>
          Decrement
        </Button>
      </div>
    </div>
  );
}

export default Counter;
