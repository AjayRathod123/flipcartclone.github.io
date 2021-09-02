import axios from "axios";
import * as actionTypes from "../constants/cartConstant";

export const addToCart = (id) => async (dispatch) => {
  try {
    const { data } = await axios.get(`/product/${id}`);
    dispatch({ type: actionTypes.ADD_TO_CART, payload: data });
  } catch (error) {
    console.log("Error while calling add to cart");
  }
};
