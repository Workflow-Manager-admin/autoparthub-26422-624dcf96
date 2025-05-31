import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

// Placeholder Components for Page Routes
// PUBLIC_INTERFACE
function Home() {
  /** Home page showing landing or featured content */
  return (
    <div className="hero">
      <div className="subtitle">AutoPartHub Home</div>
      <h1 className="title">auto_part_hub</h1>
      <div className="description">
        Welcome! Start building your application.
      </div>
      <button className="btn btn-large">Shop Now</button>
    </div>
  );
}

// PUBLIC_INTERFACE
function Catalog() {
  /** Catalog page for browsing products */
  return (
    <div style={{ paddingTop: 48 }}>
      <h2>Catalog</h2>
      <p>Browse car spare parts here.</p>
    </div>
  );
}

// PUBLIC_INTERFACE
function ProductDetails() {
  /** Product detail for a specific part */
  return (
    <div style={{ paddingTop: 48 }}>
      <h2>Product Details</h2>
      <p>Details for selected spare part (mocked).</p>
    </div>
  );
}

// PUBLIC_INTERFACE
function Cart() {
  /** Shopping cart page */
  return (
    <div style={{ paddingTop: 48 }}>
      <h2>Cart</h2>
      <p>Your selected items appear here.</p>
    </div>
  );
}

// PUBLIC_INTERFACE
function Checkout() {
  /** Checkout page for placing order */
  return (
    <div style={{ paddingTop: 48 }}>
      <h2>Checkout</h2>
      <p>Checkout process (mocked).</p>
    </div>
  );
}

// PUBLIC_INTERFACE
function UserAccount() {
  /** User Account/Profile page */
  return (
    <div style={{ paddingTop: 48 }}>
      <h2>Account</h2>
      <p>Manage your account and orders (mocked).</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <div className="logo">
                <span className="logo-symbol">*</span>
                <span>KAVIA AI</span>
              </div>
              <div style={{ display: 'flex', gap: 16 }}>
                <Link className="btn" to="/">Home</Link>
                <Link className="btn" to="/catalog">Catalog</Link>
                <Link className="btn" to="/cart">Cart</Link>
                <Link className="btn" to="/checkout">Checkout</Link>
                <Link className="btn" to="/account">Account</Link>
              </div>
            </div>
          </div>
        </nav>
        <main>
          <div className="container" style={{ paddingTop: 96 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/product/:productId" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/account" element={<UserAccount />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;