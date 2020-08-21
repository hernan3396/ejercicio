import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/numberActionCreators";

function Count() {
  const dispatch = useDispatch();
  const number = useSelector((state) => state.number.number);
  return (
    <>
      <button onClick={(e) => dispatch(increment())}>Increment</button>
      <div>{number}</div>
      <button onClick={(e) => dispatch(decrement())}>Decrement</button>
    </>
  );
}

export default Count;
