import axios from "axios";
import { productActions } from "../slices/productSlice";

export function getProducts() {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/`);
      const data = response.data;
      dispatch(productActions.setProducts(data.products));
    } catch (error) {
      console.error(error);
    }
  };
}

export function getProductDetail(slug) {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/product-detail/${slug}`);
      const data = response.data;
      console.log("Product Detail Data:", data); // Add this line to check the received data
      dispatch(productActions.setLoading());
      dispatch(productActions.setProduct(data.product));
      dispatch(productActions.setProductImages(data.images));
      dispatch(productActions.clearLoading());
    } catch (error) {
      console.error(error);
      dispatch(productActions.clearLoading());

    }
  };
}
