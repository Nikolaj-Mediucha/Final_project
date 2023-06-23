import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    update: (state, action) => action.payload,
  },
});

export const { update } = productsSlice.actions;

export default productsSlice.reducer;
