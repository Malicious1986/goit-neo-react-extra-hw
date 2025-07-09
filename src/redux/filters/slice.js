import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    query: ''
  },
  reducers: {
    changeFilter: (state, { payload: filter }) => {
      state.query = filter;
    },
  },
});

export const { reducer } = filterSlice;
export const { changeFilter } = filterSlice.actions;
