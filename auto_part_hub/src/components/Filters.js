import React from "react";

// PUBLIC_INTERFACE
function Filters() {
  /** 
   * Modern Filters component - visually distinct, chip/toggle-style filter stubs
   */
  return (
    <div className="filters-modern-section">
      <div className="filters-modern-header">Filter by</div>
      <div className="filters-modern-group">
        <div className="filters-modern-label">Category</div>
        <div className="chip-row">
          <span className="chip">Brakes</span>
          <span className="chip">Filters</span>
          <span className="chip">Engine</span>
          <span className="chip">Electrical</span>
        </div>
      </div>
      <div className="filters-modern-group">
        <div className="filters-modern-label">Brand</div>
        <div className="chip-row">
          <span className="chip">Brembo</span>
          <span className="chip">Bosch</span>
          <span className="chip">NGK</span>
          <span className="chip">Optima</span>
        </div>
      </div>
      <div className="filters-modern-note">
        * Filtering by chips to come soon.
      </div>
    </div>
  );
}

export default Filters;
