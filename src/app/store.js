import { configureStore } from "@reduxjs/toolkit";

const testReducer = (state = [], action) => {
  return state;
};

const reducer = {
  test: testReducer,
};

export const store = configureStore({ reducer });
