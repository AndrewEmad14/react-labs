import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cart-slice";
import authenticationReducer from "./reducers/authenticated-slice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    authentication: authenticationReducer,
  },
});

export default store;