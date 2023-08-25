import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    product: null,
    productImages: [],
    cartItems: [],
    loading: false,
  },
  reducers: {
    setLoading(state) {
      state.loading = true;
    },
    clearLoading(state) {
      state.loading = false;
    },
    setProducts(state, action) {
      state.products = action.payload;
    },
    setProduct(state, action) {
      state.product = action.payload;
    },
    setProductImages(state, action) {
      state.productImages = action.payload;
    },
    addProductToCart(state, action) {
      const item = action.payload;
      const existingCartItem = state.cartItems.find(
        (cartItem) => cartItem.id === item.id
      );

      if (existingCartItem) {
        // If product already exists in cart, increment quantity
        existingCartItem.quantity += 1;
      } else {
        // If product doesn't exist in cart, add it
        state.cartItems.push({ ...item, quantity: 1 });
      }
    },
    removeFromCart(state, action) {
      const itemId = action.payload.id;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    updateCartQuantity(state, action) {
      const { id, quantity } = action.payload;
      const cartItem = state.cartItems.find((item) => item.id === id);
      if (cartItem) {
        cartItem.quantity = quantity;
      }
    },
    clearCartItems(state) {
      state.cartItems = [];
    },
  },
});

const { actions: productActions, reducer: productReducer } = productSlice;

export { productActions, productReducer };
