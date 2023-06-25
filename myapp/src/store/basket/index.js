import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("BASKET") || "") || [];
export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const productItem = state.find((item) => item.id === action.payload.id);
      if (productItem) {
        productItem.amount += 1;
      } else {
        state.push({
          ...action.payload,
          amount: 1,
        });
      }
    },
    removeAllProductById: (state, action) => {
      const itemIndex = state.findIndex((item) => item.id === action.payload);
      state.splice(itemIndex, 1);
    },
    updateAmountById: (state, action) => {
      const productItemIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (productItemIndex === -1) {
        return;
      }
      const productItem = state[productItemIndex];
      productItem.amount += action.payload.difference;
      if (productItem.amount === 0) {
        state.splice(productItemIndex, 1);
      }
    },
  },
});
export const { addProduct, removeAllProductById, updateAmountById } =
  basketSlice.actions;
export default basketSlice.reducer;
