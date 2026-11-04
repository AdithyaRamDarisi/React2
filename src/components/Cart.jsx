import { useDispatch, useSelector } from "react-redux";

import {
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart
} from "../features/cart/cartSlice";

function Cart() {

    const dispatch = useDispatch();

    const cartItems = useSelector(
        (state) => state.cart.cartItems
    );

    // Calculate total quantity
    const totalItems = cartItems.reduce(
        (total, item) => total + item.quantity,
        0
    );

    // Calculate total price
    const totalPrice = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <section className="cart-section">

            <h2>Shopping Cart ({totalItems} Items)</h2>

            {cartItems.length === 0 ? (

                <p className="empty-cart">Your cart is empty!</p>

            ) : (

                <>

                    {cartItems.map((item) => (

                        <div className="cart-item" key={item.id}>

                            <div>
                                <h3>{item.name}</h3>

                                <p>
                                    ₹{item.price.toLocaleString("en-IN")} × {item.quantity}
                                </p>
                            </div>

                            <div className="quantity-controls">

                                <button
                                    onClick={() =>
                                        dispatch(decreaseQuantity(item.id))
                                    }
                                >
                                    -
                                </button>

                                <span>{item.quantity}</span>

                                <button
                                    onClick={() =>
                                        dispatch(increaseQuantity(item.id))
                                    }
                                >
                                    +
                                </button>

                            </div>

                            <p className="item-total">
                                ₹{(item.price * item.quantity).toLocaleString("en-IN")}
                            </p>

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

                    <div className="cart-summary">

                        <h3>
                            Total Items: {totalItems}
                        </h3>

                        <h2>
                            Total Price: ₹{totalPrice.toLocaleString("en-IN")}
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

        </section>
    );
}

export default Cart;