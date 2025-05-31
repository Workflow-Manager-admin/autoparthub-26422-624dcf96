import React from "react";

// PUBLIC_INTERFACE
function Filters() {
  /** 
   * Filters component - stub for product filtering sidebar
   * To be expanded with real filtering options
   */
  return (
    <div>
      <div style={{ fontWeight: 600, fontSize: 17, marginBottom: 12, color: "#222" }}>
        Filters
      </div>
      <div style={{
        color: "#888",
        fontStyle: "italic",
        fontSize: 14,
        marginBottom: 8
      }}>
        Filtering options coming soon.
      </div>
      {/* Future: Category, price, brand, compatibility, etc. */}
      <ul style={{ margin: 0, paddingLeft: 16, color: "#757575", fontSize: 14 }}>
        <li>Category</li>
        <li>Price</li>
        <li>Brand</li>
        <li>Compatibility</li>
      </ul>
    </div>
  );
}

export default Filters;
