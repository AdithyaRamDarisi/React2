import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        price: 1999,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400"
    },
    {
        id: 2,
        name: "Smart Watch",
        price: 2499,
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400"
    },
    {
        id: 3,
        name: "Bluetooth Speaker",
        price: 1499,
        image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400"
    },
    {
        id: 4,
        name: "Wireless Mouse",
        price: 799,
        image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=400"
    }
];

function ProductList() {

    const dispatch = useDispatch();

    return (
        <section className="products-section">

            <h2>Available Products</h2>

            <div className="products-grid">

                {products.map((product) => (

                    <div className="product-card" key={product.id}>

                        <img src={product.image} alt={product.name} />

                        <h3>{product.name}</h3>

                        <p>₹{product.price.toLocaleString("en-IN")}</p>

                        <button
                            onClick={() => dispatch(addToCart(product))}
                        >
                            Add to Cart
                        </button>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default ProductList;