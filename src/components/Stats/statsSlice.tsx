import { createSlice } from "@reduxjs/toolkit";

export interface StatisticsState {
  positive: number;
  neutral: number;
  negative: number;
}

export const statsSlice = createSlice({
  name: 'stats',
  initialState: {
    positive: 0,
    neutral: 0,
    negative: 0,
  },
  reducers: {
    incrementPositive: (state) => {
      state.positive += 1;
    },
    incrementNeutral: (state) => {
      state.neutral += 1;
    },
    incrementNegative: (state) => {
      state.negative += 1;
    },
  },
});


export const { incrementNegative, incrementNeutral, incrementPositive } =
  statsSlice.actions;

export const statsReducer = statsSlice.reducer;