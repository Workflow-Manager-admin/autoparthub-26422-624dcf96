import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';

import Catalog from './pages/Catalog';
import ProductDetails from './pages/ProductDetails';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Account from './pages/Account';

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
function NavBar() {
  /** Global navigation bar for main container */
  return (
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
  );
}

function App() {
  return (
    <Router>
      <div className="app">
        <NavBar />
        <main>
          <div className="container" style={{ paddingTop: 96 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/product/:productId" element={<ProductDetails />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/account" element={<Account />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;