import { useReducer } from "react";

export let initialState = {
  products: [],
  total: 0,
};

let shopReducer = (state, action) => {
  let { type, payload } = action;
  switch (type) {
    case "ADD_TO_CART":
      return {
        ...state,
        products: payload.products,
        total: payload.price,
      };
    case "DELETE_PRODUCT":
      return {
        ...state,
        products: payload.products,
        total: payload.price,
      };

    case "INCREESE_QUANTITY":
      return {
        ...state,
        products: payload.products,
        total: payload.price,
      };

    case "DECREESE_QUANTITY":
      return {
        products: payload.products,
        total: payload.price,
      };
    default:
      return state;
  }
};

export default shopReducer;
