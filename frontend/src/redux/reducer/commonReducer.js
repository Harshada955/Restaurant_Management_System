import { createSlice } from "@reduxjs/toolkit";

export const commonReducer = createSlice({
  name: "common",
  initialState: {
    open: false,
  },
  reducers: {
    dialogOpen: (state) => {
      state.open = true;
    },
    dialogClose: (state) => {
      state.open = false;
    },
  },
});

export const { dialogOpen, dialogClose } = commonReducer.actions;

export default commonReducer.reducer;
