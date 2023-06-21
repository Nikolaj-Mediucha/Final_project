import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem('BASKET') || '') || [];

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
            amount: 1
           });
        }
    },
    removeAllProductById: (state, action) => {
        const itemIndex = state.findIndex((item) => item.id === action.payload); // ['a','b','c'] index 'b' = 1, index 'a' =0
        state.splice(itemIndex, 1); //['a' ,'c', 'b'] splice(2,1,'d') => ['a','c','d']
    },
    updateAmountById: (state, action) => {
      const productItemIndex = state.findIndex((item) => item.id === action.payload.id);

      if (productItemIndex === -1) {
        return;
      } 

      const productItem = state[productItemIndex];

      productItem.amount += action.payload.difference; 
      if (productItem.amount === 0) {
          state.splice(productItemIndex, 1);
      }
    }
  },
});

// Action creators are generated for each case reducer function
export const { addProduct, removeAllProductById, updateAmountById } = basketSlice.actions;

export default basketSlice.reducer;
