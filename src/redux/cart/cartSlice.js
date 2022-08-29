import { createSlice } from "@reduxjs/toolkit";

const ISSERVER = typeof window === "undefined";

// get data from cart
const data =
  !ISSERVER && localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];

const shippingData =
  !ISSERVER && localStorage.getItem("shippingData")
    ? JSON.parse(localStorage.getItem("shippingData"))
    : null;

const paymentMethod =
  !ISSERVER && localStorage.getItem("paymentMethod")
    ? JSON.parse(localStorage.getItem("paymentMethod"))
    : null;

const initialState = {
  isCartOpen: false,
  data: [
    {
      title: "lace wig",
      price: "32",
      _id: "35878",
      imageUrl: "msqodivuqpùzoeihduspimlyifv sduil",
    },
  ],
  loading: false,
  message: null,
  shippingData,
  paymentMethod,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    openCart(state) {
      state.isCartOpen = !state.isCartOpen;
    },
    addToCart(state, action) {
      const product = action.payload;
      state.data.push(product);
    },
    removeFromCart(state, action) {
      state.data = state.data.filter(
        (product) => product._id !== action.payload
      );
    },
    increment(state, action) {
      const clickedProduct = state.data.find(
        (product) => product._id === action.payload
      );
      clickedProduct.qty++;
    },
    decrement(state, action) {
      const clickedProduct = state.data.find(
        (product) => product._id === action.payload
      );
      // preventing qty from negative values
      if (clickedProduct.qty === 1) return;
      else {
        clickedProduct.qty--;
      }
    },
    resetCart(state, action) {
      state.data = [];
    },
    saveShippingData(state, action) {
      state.shippingData = action.payload;
      localStorage.setItem("shippingData", JSON.stringify(action.payload));
    },
    savePaymentMethod(state, action) {
      state.paymentMethod = action.payload;
      localStorage.setItem("paymentMethod", JSON.stringify(action.payload));
    },
  },
});

export const {
  openCart,
  addToCart,
  increment,
  decrement,
  removeFromCart,
  setLocalStorageItems,
  saveShippingData,
  savePaymentMethod,
  resetCart,
} = cartSlice.actions;
export default cartSlice.reducer;
