import { useDispatch, useSelector } from "react-redux";
import { decrement, incrementAsync } from "../../state/counter/counterSlice";
import { AppDispatch, RootState } from "../../state/store";
import { Button } from "@mui/material";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h2>{count}</h2>
      <div>
        <Button variant="contained" onClick={() => dispatch(incrementAsync(10))}>Increment</Button>
        <Button variant="contained" onClick={() => dispatch(decrement())}>Decrement</Button>
      </div>
    </div>
  );
};

export default Counter;