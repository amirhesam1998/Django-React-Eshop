import {
  PRODUCT_LIST_FAIL,
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
} from "../constants/productConstants";

export const listProductReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { products: [], loading: true };

    case PRODUCT_LIST_SUCCESS:
      return { products: action.payload, loading: false };

    case PRODUCT_LIST_FAIL:
      return { error: action.payload, loading: false };
    default:
      return state;
  }
};