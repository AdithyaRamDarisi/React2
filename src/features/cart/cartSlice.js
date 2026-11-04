import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartItems: []
};

const cartSlice = createSlice({
    name: "cart",
    initialState,

    reducers: {

        // Add product to cart
        addToCart: (state, action) => {
            const existingProduct = state.cartItems.find(
                (item) => item.id === action.payload.id
            );

            if (existingProduct) {
                existingProduct.quantity += 1;
            } else {
                state.cartItems.push({
                    ...action.payload,
                    quantity: 1
                });
            }
        },

        // Remove product from cart
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(
                (item) => item.id !== action.payload
            );
        },

        // Increase quantity
        increaseQuantity: (state, action) => {
            const product = state.cartItems.find(
                (item) => item.id === action.payload
            );

            if (product) {
                product.quantity += 1;
            }
        },

        // Decrease quantity
        decreaseQuantity: (state, action) => {
            const product = state.cartItems.find(
                (item) => item.id === action.payload
            );

            if (product && product.quantity > 1) {
                product.quantity -= 1;
            }
        },

        // Clear cart
        clearCart: (state) => {
            state.cartItems = [];
        }
    }
});

export const {
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart
} = cartSlice.actions;

export default cartSlice.reducer;