import { useDispatch } from "react-redux";

import { addToCart } from "../features/cart/cartSlice";

import products from "../data/products";

function ProductList() {

    const dispatch = useDispatch();

    const handleAddToCart = (product) => {

        dispatch(addToCart(product));

    };

    return (

        <div className="products-section">

            <h2>Our Products</h2>

            <div className="products-grid">

                {products.map((product) => (

                    <div className="product-card" key={product.id}>

                        <img
                            src={product.image}
                            alt={product.name}
                        />

                        <h3>{product.name}</h3>

                        <p>₹{product.price.toLocaleString("en-IN")}</p>

                        <button
                            onClick={() => handleAddToCart(product)}
                        >
                            Add to Cart
                        </button>

                    </div>

                ))}

            </div>

        </div>

    );

}

export default ProductList;