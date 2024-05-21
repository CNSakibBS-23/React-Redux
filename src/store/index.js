import { configureStore, createSlice } from "@reduxjs/toolkit";
const intialValues = { counter: 0, showCounter: true };
const counterSlice = createSlice({
  name: "counter",
  initialState: intialValues,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});
console.log(counterSlice);
const store = configureStore({
  reducer: { counter: counterSlice.reducer },
});
export const counterAction = counterSlice.actions;
export default store;
