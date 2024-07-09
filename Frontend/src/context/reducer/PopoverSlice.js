// redux/popoverSlice.js
import { createSlice } from "@reduxjs/toolkit";

const popoverSlice = createSlice({
  name: "popover",
  initialState: {
    open: false,
    modalType: null,
  },
  reducers: {
    openPopover: (state, action) => {
      state.open = true;
      state.modalType = action.payload;
    },
    closePopover: (state, action) => {
      state.open = false;
      state.modalType = null;
    },
  },
});

export const { openPopover, closePopover } = popoverSlice.actions;

export default popoverSlice.reducer;
