import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  counterUpdate,
  decrement,
  increment,
  incrementByAmount,
} from '../redux/counterSlicer';

const Counter = () => {
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();

  const counter = useSelector((state) => {
    return state.counter.count;
  });

  return (
    <div>
      <div>Count: {counter}</div>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <br />
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
      <div>
        <input onChange={(event) => setAmount(event.target.value)} />
        <br />
        <button onClick={() => dispatch(incrementByAmount(Number(amount)))}>
          Increment By Amount
        </button>
      </div>
      <div>
        <button onClick={() => dispatch(counterUpdate())}>
          Increment By Server
        </button>
      </div>
    </div>
  );
};

export default Counter;
