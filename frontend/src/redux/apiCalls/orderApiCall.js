import axios from "axios";
import { orderActions } from "../slices/orderSlice";

export function updateOrder(orderData) {
  return async (dispatch) => {
    try {
      // Convert the JavaScript object to JSON data
      const jsonData = JSON.stringify(orderData);

      // Make a POST request to update the order
      const response = await axios.post("/order/", jsonData, {
        headers: {
          "Content-Type": "application/json", 
        },
      });

      const data = response.data;

      // Dispatch an action to update the state
      dispatch(orderActions.setOrder(data));
    } catch (error) {
      console.error(error);
    }
  };
}


