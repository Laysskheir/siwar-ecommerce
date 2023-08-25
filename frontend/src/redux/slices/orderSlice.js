import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "order",
  initialState: {
    order: null,
    success: false, // Add a success state
  },
  reducers: {
    setOrder(state, action) {
      state.order = action.payload;
      state.success = true; // Set success to true
    },
    clearOrder(state) {
      state.order = null;
      state.success = false; // Reset success
    },
    
  },
});

const { actions: orderActions, reducer: orderReducer } = orderSlice;
export {orderActions, orderReducer };
