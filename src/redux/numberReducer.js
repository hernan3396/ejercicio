import { INCREMENT, DECREMENT } from "./numberActionCreators";

const initialNumber = {
  number: 0,
};

const numberReducer = function (state = initialNumber, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        number: state.number + 1,
      };
    case DECREMENT:
      return {
        ...state,
        number: state.number - 1,
      };
    default:
      break;
  }

  return state;
};

export default numberReducer;
