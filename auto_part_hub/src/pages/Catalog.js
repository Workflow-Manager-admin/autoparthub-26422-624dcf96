import React, { useState } from "react";
import ProductList from "../components/ProductList";
import Filters from "../components/Filters";

// Mock product data
const MOCK_PRODUCTS = [
  {
    id: "1",
    name: "Brake Pad Set",
    brand: "Brembo",
    price: 49.99,
    image:
      "https://images.unsplash.com/photo-1511918984145-48de785d4c4e?auto=format&fit=crop&w=400&q=80",
    category: "Brakes",
    compat: "Toyota Camry 2015-2020",
  },
  {
    id: "2",
    name: "Oil Filter",
    brand: "Bosch",
    price: 11.49,
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=400&q=80",
    category: "Filters",
    compat: "Ford F-150 2012-2019",
  },
  {
    id: "3",
    name: "Air Filter",
    brand: "Mann-Filter",
    price: 16.99,
    image:
      "https://images.unsplash.com/photo-1455656678494-4d1b5f3e7ad3?auto=format&fit=crop&w=400&q=80",
    category: "Filters",
    compat: "Honda Accord 2013-2017",
  },
  {
    id: "4",
    name: "Spark Plug",
    brand: "NGK",
    price: 8.79,
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    category: "Engine",
    compat: "Chevrolet Malibu 2010-2015",
  },
  {
    id: "5",
    name: "Windshield Wipers",
    brand: "Rain-X",
    price: 15.25,
    image:
      "https://images.unsplash.com/photo-1532298229144-0ec0c57515c7?auto=format&fit=crop&w=400&q=80",
    category: "Accessories",
    compat: "Universal",
  },
  {
    id: "6",
    name: "Headlight Bulb",
    brand: "Philips",
    price: 22.65,
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    category: "Lighting",
    compat: "Toyota Corolla 2016-2019",
  },
  {
    id: "7",
    name: "Car Battery",
    brand: "Optima",
    price: 129.99,
    image:
      "https://images.unsplash.com/photo-1471478333899-39e9d574435d?auto=format&fit=crop&w=400&q=80",
    category: "Electrical",
    compat: "Universal",
  },
  {
    id: "8",
    name: "Alternator",
    brand: "Valeo",
    price: 188.55,
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    category: "Electrical",
    compat: "Nissan Altima 2012-2017",
  },
];

// PUBLIC_INTERFACE
function Catalog() {
  /** Catalog page - browse car spare parts with filters and product grid */
  // Filtering logic stub (could be expanded with query/filter state)
  const [products] = useState(MOCK_PRODUCTS);

  return (
    <div style={{ paddingTop: 48 }}>
      <h2>Catalog</h2>
      <div
        style={{
          display: "flex",
          gap: 32,
          alignItems: "flex-start",
          minHeight: 500,
        }}
      >
        {/* Filters Sidebar */}
        <div
          style={{
            minWidth: 210,
            maxWidth: 250,
            background: "rgba(240,240,240,0.12)",
            borderRadius: 8,
            border: "1px solid var(--border-color)",
            padding: 16,
            color: "#333",
            backgroundColor: "#f5f6fa",
          }}
        >
          <Filters />
        </div>
        {/* Product List */}
        <div style={{ flex: 1 }}>
          <ProductList products={products} />
        </div>
      </div>
    </div>
  );
}

export default Catalog;
