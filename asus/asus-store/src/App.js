import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

// Main App Component
function App() {
  const [history, setHistory] = useState([]);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const handleBuy = () => {
    setHistory([...history, ...cart]);  // Add cart items to buy history
    setCart([]);  // Clear the cart after purchase
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route
          path="/cart"
          element={<Cart cart={cart} removeFromCart={removeFromCart} onBuy={handleBuy} />}
        />
        <Route path="/buyhistory" element={<BuyHistory history={history} />} />
      </Routes>
    </Router>
  );
}

// Navbar Component
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="brand">ASUS Store</div>
        <button className="hamburger" onClick={toggleMenu}>
          <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/cart" className="nav-link">Cart</Link>
          <Link to="/buyhistory" className="nav-link">Buy History</Link>
        </div>
      </div>
    </nav>
  );
};

// Home Component
const Home = ({ addToCart }) => {
  return (
    <div className="home">
      <h1>Welcome to ASUS Store</h1>
      <p>Browse our products and add them to your cart!</p>
      <ProductList addToCart={addToCart} />
    </div>
  );
};

// Product List Component
const ProductList = ({ addToCart }) => {
  const products = [
    { id: 1, name: "ASUS Laptop", price: 1000 },
    { id: 2, name: "ASUS Monitor", price: 300 },
    { id: 3, name: "ASUS Mouse", price: 50 },
  ];

  return (
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product">
          <img src={`https://via.placeholder.com/150`} alt={product.name} />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

// Cart Component
const Cart = ({ cart, removeFromCart, onBuy }) => {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="cart-item">
            <span>{item.name} - ${item.price}</span>
            <button onClick={() => removeFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
      <div className="cart-total">
        <strong>Total: ${cart.reduce((acc, item) => acc + item.price, 0)}</strong>
      </div>
      <button className="buy-btn" onClick={onBuy}>Buy</button>
    </div>
  );
};

// Buy History Component
const BuyHistory = ({ history }) => {
  return (
    <div className="buy-history">
      <h2>Buy History</h2>
      {history.length === 0 ? (
        <p>No purchase history yet.</p>
      ) : (
        history.map((item, index) => (
          <div key={index} className="history-item">
            <span>{item.name} - ${item.price}</span>
          </div>
        ))
      )}
    </div>
  );
};

// Export App component as default
export default App;

