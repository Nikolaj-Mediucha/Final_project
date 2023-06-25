import React from "react";
import { useSelector } from "react-redux";

export const useLocalStorage = () => {
  const itemsInBasket = useSelector((state) => state.basket);
  React.useEffect(() => {
    localStorage.setItem("BASKET", JSON.stringify(itemsInBasket));
  }, [itemsInBasket]);
};
