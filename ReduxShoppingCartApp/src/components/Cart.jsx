import { useSelector, useDispatch } from "react-redux";

import {
    removeFromCart,
    updateQuantity,
    clearCart
} from "../features/cart/cartSlice";

function Cart() {

    const cartItems = useSelector(
        (state) => state.cart.items
    );

    const dispatch = useDispatch();

    // Calculate total quantity
    const totalQuantity = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    // Calculate total price
    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (

        <div className="cart-section">

            <h2>Shopping Cart</h2>

            <h3>Total Items: {totalQuantity}</h3>

            {cartItems.length === 0 ? (

                <p className="empty-cart">
                    Your cart is empty!
                </p>

            ) : (

                <>

                    {cartItems.map((item) => (

                        <div className="cart-item" key={item.id}>

                            <div>

                                <h3>{item.name}</h3>

                                <p>
                                    Price: ₹{item.price.toLocaleString("en-IN")}
                                </p>

                                <p>
                                    Subtotal: ₹
                                    {(item.price * item.quantity).toLocaleString("en-IN")}
                                </p>

                            </div>

                            <div className="quantity-controls">

                                <button
                                    onClick={() =>
                                        dispatch(
                                            updateQuantity({
                                                id: item.id,
                                                quantity: item.quantity - 1
                                            })
                                        )
                                    }
                                >
                                    -
                                </button>

                                <span>{item.quantity}</span>

                                <button
                                    onClick={() =>
                                        dispatch(
                                            updateQuantity({
                                                id: item.id,
                                                quantity: item.quantity + 1
                                            })
                                        )
                                    }
                                >
                                    +
                                </button>

                            </div>

                            <button
                                className="remove-btn"
                                onClick={() =>
                                    dispatch(removeFromCart(item.id))
                                }
                            >
                                Remove
                            </button>

                        </div>

                    ))}

                    <div className="cart-total">

                        <h2>
                            Total Price: ₹
                            {totalPrice.toLocaleString("en-IN")}
                        </h2>

                        <button
                            className="clear-btn"
                            onClick={() => dispatch(clearCart())}
                        >
                            Clear Cart
                        </button>

                    </div>

                </>

            )}

        </div>

    );

}

export default Cart;