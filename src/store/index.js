import { createStore } from "redux";

const stateCounter = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  } else if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
    };
  } else if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  } else {
    return state;
  }
};

const store = createStore(stateCounter);

export default store;
