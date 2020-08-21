import { INCREMENT, DECREMENT } from "./numberActionCreators";

const initialNumber = {
  number: 0,
};

const numberReducer = function (state = initialNumber, action) {
  if (action.type === INCREMENT) {
    return {
      ...state,
      number: state.number + 1,
    };
  }
  if (action.type === DECREMENT) {
    return {
      ...state,
      number: state.number - 1,
    };
  }

  return state;
};

export default numberReducer;
