import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../Context/ProductContext";

const Chantelle = () => {

  const [isAvailabilityOpen, setAvailabilityOpen] = useState(false);
  const [isPriceOpen, setPriceOpen] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 30000]);

  const [selectedFabric, setSelectedFabric] = useState("");
  const [isSizeOpen, setSizeOpen] = useState(false);
  const { products } = useContext(ProductContext); // Get products from context
  const navigate = useNavigate();

  const chantelleProducts = products
    .filter((product) => product.category === "chantelle")
    .filter((product) =>
      selectedFabric ? product.fabric === selectedFabric : true
    )
    .filter((product) => product.price >= priceRange[0] && product.price <= priceRange[1]);

  return (
    <div>
      <h1 className='text-center mt-20 mb-20 text-4xl font-serif'>CHANTELLE</h1>
      <div className='flex h-10 w-full p-1 mb-20 border-t-2 border-b-2'>
        <div className="text-center font-semibold mx-auto hidden md:block">{chantelleProducts.length} PRODUCTS</div>
        <div className='md:mr-8 hidden md:block'>SORT BY</div>
        <div className='mr-20 ml-24 block md:hidden text-gray-500 hover:text-black cursor-pointer'>FILTERS</div>
        <div className="md:block border-r-2 border-gray-400"></div>
        <div className='md:mr-8 block md:hidden text-gray-500 hover:text-black cursor-pointer ml-10'>SORT BY</div>
      </div>
      <div className="flex p-8"> {/* Flex container for sidebar & products */}

        {/* Left Sidebar (Filter) */}
        <div className="w-1/4 p-6 bg-gray-100 shadow-md rounded-lg sticky top-20 h-fit hidden md:block">

          {/* Availability Filter */}
          <div>
            <div className="mt-4">
              <button
                className="w-full text-left text-lg flex justify-between font-serif"
                onClick={() => setAvailabilityOpen(!isAvailabilityOpen)}>
                Availability
                <span>{isAvailabilityOpen ? "▲" : "▼"}</span>
              </button>
              {isAvailabilityOpen && <p className="mt-2 pl-4 font-semibold">In Stock</p>}
            </div>
            <hr />
          </div>
          {/* Price Filter */}
          <div className="mt-4">
            <button
              className="w-full text-left font-serif text-lg flex justify-between"
              onClick={() => setPriceOpen(!isPriceOpen)}
            >
              Price
              <span>{isPriceOpen ? "▲" : "▼"}</span>
            </button>

            {isPriceOpen && (
              <div className="mt-2 pl-4">
                <input
                  type="range"
                  min="0"
                  max="30000"
                  step="500"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                  className="w-full"
                />
                <p className="text-center">
                  PKR {priceRange[0]} - PKR {priceRange[1]}
                </p>
              </div>
            )}
          </div>

          <hr />

          {/* Fabric Filter */}
          <div>
            <div className="mt-4">
              <button
                className="w-full text-left text-lg flex justify-between font-serif"
                onClick={() => setSizeOpen(!isSizeOpen)}>
                Fabric
                <span>{isSizeOpen ? "▲" : "▼"}</span>
              </button>
              {isSizeOpen && (
                <div className="mt-10">
                  <select
                    className="w-full mt-2 border p-2 rounded-md"
                    value={selectedFabric}
                    onChange={(e) => setSelectedFabric(e.target.value)}
                  >
                    <option value="">All</option>
                    <option value="Cotton">Cotton</option>
                    <option value="Silk">Silk</option>
                    <option value="Chiffon">Chiffon</option>
                    <option value="Lawn">Lawn</option>
                  </select>
                </div>
              )}
            </div>
          </div>
          <hr />

          {/* Size Filter */}
          <div className="mt-4">
            <button
              className="w-full text-left font-serif text-lg flex justify-between"
              onClick={() => setSizeOpen(!isSizeOpen)}
            >
              Size
              <span>{isSizeOpen ? "▲" : "▼"}</span>
            </button>
            {isSizeOpen && <p className="mt-2 pl-4 font-semibold">S, M, L, XL</p>}
          </div>
          <hr />
        </div>

        {/* Product Grid */}
        <div className="md:w-3/4 md:ml-8 ">
          <div className="grid md:grid-cols-2 row-auto md:gap-8 -mt-16 ">
            {chantelleProducts.map((product) => (
              <div
                key={product.id}
                className="cursor-pointer flex flex-col items-center"
                onClick={() => navigate(`/product/${product._id}`)}
              >
                {/* Image (Full View) */}
                <div className="w-full h-full">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Product Details */}
                <div className="mt-4 text-center">
                  <h2 className="font-thin font-serif">{product.name}</h2>
                  <p className="text-black font-medium font-serif md:mt-0 mt-2">PKR {product.price}</p>
                  <p className="text-gray-600 md:mb-0 mb-5 text-sm mt-2 md:mt-2">{product.chantelle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Chantelle;