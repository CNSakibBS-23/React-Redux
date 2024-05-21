import { configureStore, createSlice } from "@reduxjs/toolkit";
const intialCounterValues = { counter: 0, showCounter: true };
const counterSlice = createSlice({
  name: "counter",
  initialState: intialCounterValues,
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

const initialAuthValue = { isAuthenticated: false };
const authSlice = createSlice({
  name: "auth",
  initialState: initialAuthValue,
  reducers: {
    isLoggedIn(state) {
      state.isAuthenticated = true;
    },
    isLoggedOut(state) {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});
export const counterAction = counterSlice.actions;
export const authAction = authSlice.actions;
export default store;
