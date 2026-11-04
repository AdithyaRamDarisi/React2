import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "../features/cart/cartSlice";

const reduxStore = configureStore({
    reducer: {
        cart: cartReducer
    }
});

export default reduxStore;