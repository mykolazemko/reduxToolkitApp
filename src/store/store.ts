import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import charactersSlice, { decrement, increment, incrementByAmount } from "../slices/charactersSlice";

const store = configureStore({
  reducer: {
    characters: charactersSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
