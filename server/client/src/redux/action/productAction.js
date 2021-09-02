import axios from "axios";
import * as action from "../constants/productConstant";

export const getProducts = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`/products`);
    dispatch({ type: action.GET_PRODUCT_SUCCESS, payload: data });
  } catch (error) {
    console.log({ type: action.GET_PRODUCT_FAIL, payload: error.message });
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/product/${id}`);

    dispatch({ type: action.GET_PRODUCT_DETAIL_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: action.GET_PRODUCT_DETAIL_FAIL, payload: error.response });
  }
};
