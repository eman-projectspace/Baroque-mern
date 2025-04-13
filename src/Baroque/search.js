import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { ProductContext } from "../Context/ProductContext";

function SearchResults() {
  const { products } = useContext(ProductContext);
  const location = useLocation();

  const query = new URLSearchParams(location.search).get("query") || "";

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-8">
      <h2 className="text-2xl font-serif mb-6">Search Results for "{query}"</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div key={product._id} className="border p-4 rounded shadow-md">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
            <h3 className="mt-2 font-serif">{product.name}</h3>
            <p className="text-gray-600 font-medium">PKR {product.price}</p>
          </div>
        ))}
        {filteredProducts.length === 0 && <p>No matching products found.</p>}
      </div>
    </div>
  );
}

export default SearchResults;
