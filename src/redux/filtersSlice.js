import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    name: ''
  },
  reducers: {
    changeFilter: (state, { payload: filter }) => {
      state.name = filter;
    },
  },
});

export const selectNameFilter = ({filter}) => filter.name;

export const { reducer } = filterSlice;
export const { changeFilter } = filterSlice.actions;
