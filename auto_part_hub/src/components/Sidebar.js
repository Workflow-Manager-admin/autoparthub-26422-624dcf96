import React from "react";
import { NavLink } from "react-router-dom";

/**
 * PUBLIC_INTERFACE
 * Sidebar - persistent vertical navigation bar for main sections
 */
function Sidebar() {
  return (
    <aside className="sidebar-nav">
      <div className="sidebar-logo">
        <span className="logo-symbol">*</span>
        <span className="sidebar-brand">AutoPartHub</span>
      </div>
      <nav>
        <ul className="sidebar-links">
          <li>
            <NavLink to="/catalog" className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}>Catalog</NavLink>
          </li>
          <li>
            <NavLink to="/cart" className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}>Cart</NavLink>
          </li>
          <li>
            <NavLink to="/account" className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}>Account</NavLink>
          </li>
          <li>
            <NavLink to="/checkout" className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}>Checkout</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
