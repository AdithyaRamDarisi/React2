import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: []
};

const cartSlice = createSlice({

    name: "cart",

    initialState,

    reducers: {

        // Add product to cart
        addToCart: (state, action) => {

            const product = action.payload;

            const existingProduct = state.items.find(
                item => item.id === product.id
            );

            if (existingProduct) {

                existingProduct.quantity += 1;

            } else {

                state.items.push({
                    ...product,
                    quantity: 1
                });

            }

        },

        // Remove product from cart
        removeFromCart: (state, action) => {

            state.items = state.items.filter(
                item => item.id !== action.payload
            );

        },

        // Update product quantity
        updateQuantity: (state, action) => {

            const { id, quantity } = action.payload;

            const product = state.items.find(
                item => item.id === id
            );

            if (product) {

                if (quantity <= 0) {

                    state.items = state.items.filter(
                        item => item.id !== id
                    );

                } else {

                    product.quantity = quantity;

                }

            }

        },

        // Clear entire cart
        clearCart: (state) => {

            state.items = [];

        }

    }

});

// Export actions
export const {
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart
} = cartSlice.actions;

// Export reducer
export default cartSlice.reducer;