import { createSlice } from "@reduxjs/toolkit";

const alertSlice = createSlice({
  name: "alert",
  initialState: {
    open: false,
    message: "",
    severity: "info",
  },
  reducers: {
    showAlert: (state, { payload }) => {
      state.open = true;
      state.message = payload.message;
      state.severity = payload.severity || "info";
    },
    hideAlert: (state) => {
      state.open = false;
      state.message = "";
    },
  },
});

export const { showAlert, hideAlert } = alertSlice.actions;
export const { reducer } = alertSlice;
