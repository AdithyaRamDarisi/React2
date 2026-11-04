import ProductList from "./components/ProductList";
import Cart from "./components/Cart";

function App() {

    return (

        <div className="app-container">

            <header>
                <h1>Redux Shopping Cart</h1>
                <p>Shop your favourite products!</p>
            </header>

            <ProductList />

            <Cart />

        </div>

    );
}

export default App;