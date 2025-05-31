import React from "react";
import { Link } from "react-router-dom";

/**
 * PUBLIC_INTERFACE
 * ProductList - Grid/List display of products
 * @param {Array} products - Array of product objects
 */
function ProductList({ products }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
        gap: 24,
      }}
    >
      {products.map((prod) => (
        <div
          key={prod.id}
          style={{
            background: "#F7F8FA",
            border: "1px solid #e0e0e0",
            borderRadius: 10,
            padding: 16,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            boxShadow: "0 2px 6px rgba(50,50,60,0.05)",
            transition: "box-shadow .15s",
          }}
        >
          <img
            alt={prod.name}
            src={prod.image}
            style={{
              width: 110,
              height: 110,
              objectFit: "cover",
              borderRadius: 6,
              background: "#eee",
              marginBottom: 10,
            }}
          />
          <div style={{ fontWeight: 600, fontSize: 17, margin: "8px 0 4px 0" }}>
            {prod.name}
          </div>
          <div
            style={{
              color: "#757575",
              fontSize: 13,
              marginBottom: 4,
              fontWeight: 500,
            }}
          >
            {prod.brand}
          </div>
          <div style={{ fontSize: 15, color: "#222", marginBottom: 6 }}>
            ${prod.price.toFixed(2)}
          </div>
          <div
            style={{
              color: "#BDBDBD",
              fontSize: 12,
              marginBottom: 10,
              textAlign: "center",
              lineHeight: "1.2",
            }}
          >
            <span>{prod.category}</span>
            <br />
            <span>{prod.compat}</span>
          </div>
          <Link
            to={`/product/${prod.id}`}
            className="btn"
            style={{
              background: "var(--kavia-orange)",
              color: "#fff",
              border: "none",
              padding: "8px 14px",
              borderRadius: 4,
              fontWeight: 500,
              fontSize: 14,
              marginTop: "auto",
              textDecoration: "none",
            }}
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
