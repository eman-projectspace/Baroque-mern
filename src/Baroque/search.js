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
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-xl sm:text-2xl font-serif mb-6 mt-20 text-center sm:text-left">
        Search Results for "{query}"
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div key={product._id} className="border p-4 rounded shadow hover:shadow-lg transition duration-300">
            <div className="w-full h-64 sm:h-72 md:h-80 overflow-hidden rounded">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-3 font-serif text-lg truncate">{product.name}</h3>
            <p className="text-gray-600 font-medium">PKR {product.price}</p>
          </div>
        ))}

        {filteredProducts.length === 0 && (
          <p className="text-center col-span-full text-gray-500">No matching products found.</p>
        )}
      </div>
    </div>
  );
}

export default SearchResults;
