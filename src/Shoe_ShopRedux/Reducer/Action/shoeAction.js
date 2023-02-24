import { ADD_TO_CART, DELETE_TO_CART } from "../constants/constants";

export const addToCartAction = (shoe) => {
  return {
    type: ADD_TO_CART,
    payload: shoe,
  };
};

export const deleteToCartAction = (shoe) => {
  return {
    type: DELETE_TO_CART,
    payload: shoe,
  };
};
