import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1;
    // },
    // decrement: (state) => {
    //   state.value -= 1;
    // },
    // incrementByAmount: (state, action) => {// action: {type :'', payload: any data}
    //   state.value += action.payload;
    // },
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
    //removeProductById findIdex, state[findIndex].amount === 1 => splice else changeitme amount
    //addProductById push + amount += 1
    removeAllProductById: (state, action) => {
        const itemIndex = state.findIndex((item) => item.id === action.payload); // ['a','b','c'] index 'b' = 1, index 'a' =0
        state.splice(itemIndex, 1); //['a' ,'c', 'b'] splice(2,1,'d') => ['a','c','d']
        //state = state.filter((item) => item.id !== action.payload)
    }
  },
});

// Action creators are generated for each case reducer function
export const { addProduct, removeAllProductById } = basketSlice.actions;

export default basketSlice.reducer;
