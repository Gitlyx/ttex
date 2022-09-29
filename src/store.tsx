import { configureStore } from "@reduxjs/toolkit";
import { statsReducer } from "./components/Stats/statsSlice";

export const store = configureStore({
  reducer: {
    stats: statsReducer,
  },
});


export type RootState = ReturnType<typeof store.getState>;