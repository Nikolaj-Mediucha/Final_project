import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./basket";
import productsReducer from "./products";
import categoriesReducer from "./categories";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    products: productsReducer,
    categories: categoriesReducer
  },
});
