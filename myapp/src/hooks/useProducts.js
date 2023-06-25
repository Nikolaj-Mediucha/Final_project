import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../store/products";
import { API_URL } from "../сonstants/constants";

export const useProducts = () => {
  const allProducts = useSelector((state) => state.products);
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (!allProducts.length) {
      fetch(`${API_URL}/products/all`)
        .then((data) => data.json())
        .then((data) => {
          dispatch(update(data));
        });
    }
  }, []);
  return allProducts;
};
