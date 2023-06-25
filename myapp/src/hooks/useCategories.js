import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../store/categories";
import { API_URL } from "../сonstants/constants";

export const useCategories = () => {
  const allCategories = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  React.useEffect(() => {
    if (!allCategories.length) {
      fetch(`${API_URL}/categories/all`)
        .then((data) => data.json())
        .then((data) => {
          dispatch(update(data));
        });
    }
  }, []);
  return allCategories;
};
