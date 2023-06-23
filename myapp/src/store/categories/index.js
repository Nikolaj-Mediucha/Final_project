import { createSlice } from "@reduxjs/toolkit";

export const categoriesSlice = createSlice({
  name: "categories",
  initialState: [],
  reducers: {
    update: (state, action) => action.payload,
  },
});

export const { update } = categoriesSlice.actions;

export default categoriesSlice.reducer;
