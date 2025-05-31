import React from "react";
import { Link } from "react-router-dom";

/**
 * PUBLIC_INTERFACE
 * ProductList - Grid/List display of products
 * @param {Array} products - Array of product objects
 */
function ProductList({ products }) {
  return (
    <div className="product-list-modern-grid">
      {products.map((prod) => (
        <div key={prod.id} className="product-card-modern">
          <div className="product-image-container">
            <img alt={prod.name} src={prod.image} className="product-modern-img" />
            <div className="product-badge">{prod.category}</div>
          </div>
          <div className="product-modern-body">
            <div className="product-modern-top">
              <div className="product-modern-title">{prod.name}</div>
              <div className="product-modern-brand">{prod.brand}</div>
            </div>
            <div className="product-modern-price">${prod.price.toFixed(2)}</div>
            <div className="product-modern-compat">
              <span className="compat-pill">{prod.compat}</span>
            </div>
          </div>
          <Link to={`/product/${prod.id}`} className="btn btn-modern">
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
