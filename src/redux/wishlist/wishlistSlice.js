import { createSlice } from "@reduxjs/toolkit";
import wig from "assets/images/wig.png";

const ISSERVER = typeof window === "undefined";

// get data from wishlist
const data =
  !ISSERVER && localStorage.getItem("wishlist")
    ? JSON.parse(localStorage.getItem("wishlist"))
    : [];

const initialState = {
  data: [
    {
      name: "lace wig",
      price: 32,
      _id: "35878",
      imageUrl: wig,
    },
    {
      name: "lace wig",
      price: 32,
      _id: "8935878",
      imageUrl: wig,
    },
    {
      name: "lace wig",
      price: 32,
      _id: "35538878",
      imageUrl: wig,
    },
  ],
  loading: false,
  message: null,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist(state, action) {
      const product = action.payload;
      state.data.push(product);
    },
    removeFromWishlist(state, action) {
      state.data = state.data.filter(
        (product) => product._id !== action.payload
      );
    },

    resetWishlist(state, action) {
      state.data = [];
    },
  },
});

export const {
  addToWishlist,
  removeFromWishlist,
  setLocalStorageItems,
  resetWishlist,
} = wishlistSlice.actions;
export default wishlistSlice.reducer;
