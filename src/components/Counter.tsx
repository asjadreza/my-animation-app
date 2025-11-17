"use-client"

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "@/store/store";
import { increment, decrement, reset } from "@/store/counterSlice";

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="d-flex flex-column align-items-center justify-content-center py-5 text-center gap-3">
      <h1 className="fw-bold display-5">Counter App</h1>
      <p className="d-flex gap-2">Count: {count}</p>

      <div className="d-flex gap-2">
        <button
          onClick={() => dispatch(increment())}
          className="btn btn-success px-4"
        >
          Increment
        </button>
        <button
          onClick={() => dispatch(decrement())}
          className="btn btn-danger px-4"
        >
          Decrement
        </button>

        <button
          onClick={() => dispatch(reset())}
          className="btn btn-secondary px-4"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
