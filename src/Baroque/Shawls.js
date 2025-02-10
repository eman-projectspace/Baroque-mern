// import React from 'react'
// import { useState } from "react";
// function Shawls() {
//    const [openSections, setOpenSections] = useState({});
          
//           const toggleSection = (section) => {
//             setOpenSections((prev) => ({
//               ...prev,
//               [section]: !prev[section],
//             }));
//           };
//   return (
//     <div>
//    <h1 className='text-center mt-20 mb-20 text-4xl font-serif' >SHAWLS</h1>
//       <div className='flex h-10 w-ful p-1 mb-20 border-t-2 border-b-2'>
//       <div className="text-center font-semibold mx-auto ">12 PRODUCTS</div>
//       <div className='mr-8'>SORT BY</div>
//      </div>
//      <div className="mr-10 ml-10 w-64 sticky top-16 text-start text-gray-800 font-serif  ">
//       {[
//         "AVAILABILITY",
//         "PRICE",
//         "PRODUCT TYPE",
//         "TYPE",
//         "FABRIC",
//         "SIZE",
//         "PRODUCT STYLE",
//       ].map((section) => (
//         <div key={section} className="mb-4">
//           <div
//             className="cursor-pointer flex justify-between items-center "
//             onClick={() => toggleSection(section)}
//           >
//             {section}
//             <span className="text-lg">
//               {openSections[section] ? "−" : "+"}
//             </span>
//           </div>
//           <hr />
//           <div
//             className={`overflow-hidden transition-all duration-300 ${
//               openSections[section] ? "max-h-40" : "max-h-0"
//             }`}
//           >
//             {/* Example: Replace with actual filter options */}
//             <div className="p-2 text-sm text-gray-600">
//               <label className="block">
//                 <input className="mr-2" />
//               </label>
//               <label className="block">
//                 <input className="mr-2" />
//               </label>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   <div className='grid grid-cols-2 grid-row-12 gap-4 place-content-evenly ml-96 mr-10 -mt-80 '>
// <div><img src="https://baroque.pk/cdn/shop/files/42_cc75483a-0a30-4024-818d-353dee390cb7.jpg?v=1727772505&width=600" alt=''/>
// <p className='text-center'>EMBROIDERED VELVET SHAWL VS-55<br/><b>PKR 15,990.00</b><br/>SHAWLS</p></div>
// <div><img src="https://baroque.pk/cdn/shop/files/62_dfd100f4-8597-425a-b0d7-9deedd489d7f.jpg?v=1727772337&width=600" alt=''/>
// <p className='text-center'>EMBROIDERED VELVET SHAWL VS-55<br/><b>PKR 15,990.00</b><br/>SHAWLS</p></div>
// <div><img src="https://baroque.pk/cdn/shop/files/31_151832cd-8414-4511-8809-36948db264ac.jpg?v=1727772462&width=600" alt=''/>
// <p className='text-center'>EMBROIDERED VELVET SHAWL VS-55<br/><b>PKR 15,990.00</b><br/>SHAWLS</p></div>
// <div><img src="https://baroque.pk/cdn/shop/files/96_ab1a28e9-4dc3-46af-88c2-e2c4e7c9bf5b.jpg?v=1727772400&width=600" alt=''/>
// <p className='text-center'>EMBROIDERED VELVET SHAWL VS-55<br/><b>PKR 15,990.00</b><br/>SHAWLS</p></div>
// <div><img src="https://baroque.pk/cdn/shop/files/70_4d2e0e1d-9b01-4e26-ae75-66e8be3740a8.jpg?v=1727772369&width=600" alt=''/>
// <p className='text-center'>EMBROIDERED VELVET SHAWL VS-55<br/><b>PKR 15,990.00</b><br/>SHAWLS</p></div>
// <div><img src="https://baroque.pk/cdn/shop/files/54_4ff2b2e0-561d-4389-8df5-34c2693eaef5.jpg?v=1727772295&width=600" alt=''/>
// <p className='text-center'>EMBROIDERED VELVET SHAWL VS-55<br/><b>PKR 15,990.00</b><br/>SHAWLS</p></div>
// <div><img src="https://baroque.pk/cdn/shop/files/50_2a39ef59-ca40-47f1-8041-c6bde0b52427.jpg?v=1727772253&width=600" alt=''/>
// <p className='text-center'>EMBROIDERED VELVET SHAWL VS-55<br/><b>PKR 15,990.00</b><br/>SHAWLS</p></div>
// <div><img src="https://baroque.pk/cdn/shop/products/41_17.jpg?v=1693402721&width=600" alt=''/>
// <p className='text-center'>EMBROIDERED VELVET SHAWL VS-55<br/><b>PKR 15,990.00</b><br/>SHAWLS</p></div>
// <div><img src="https://baroque.pk/cdn/shop/files/81_dc05050c-0be8-4ac6-939f-ef7fbffecc84.jpg?v=1727772611&width=600" alt=''/>
// <p className='text-center'>EMBROIDERED VELVET SHAWL VS-55<br/><b>PKR 15,990.00</b><br/>SHAWLS</p></div>
// <div><img src="https://baroque.pk/cdn/shop/files/78_18f2d4d1-5d28-438a-8313-030a67c0a020.jpg?v=1694854014&width=600" alt=''/>
// <p className='text-center'>EMBROIDERED VELVET SHAWL VS-55<br/><b>PKR 15,990.00</b><br/>SHAWLS</p></div>
// <div><img src="https://baroque.pk/cdn/shop/products/68.jpg?v=1632894665&width=600" alt=''/>
// <p className='text-center'>EMBROIDERED VELVET SHAWL VS-55<br/><b>PKR 15,990.00</b><br/>SHAWLS</p></div>
// <div><img src="https://baroque.pk/cdn/shop/products/50_14.jpg?v=1693402740&width=600" alt=''/>
// <p className='text-center'>EMBROIDERED VELVET SHAWL VS-55<br/><b>PKR 15,990.00</b><br/>SHAWLS</p></div>
// <br/><br/>
// </div>
// </div>
//   )
// }

// export default Shawls

import React,{ useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Shawls = ()=> {
  const[isAvailabilityOpen,setAvailabilityOpen] = useState(false);
  const [isPriceOpen,setPriceOpen] = useState(false);
  const [isFabricOpen,setFabricOpen] =useState(false);
  const[isSizeOpen,setSizeOpen] = useState(false);
  const[products,setProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(()=>{
    fetch("/product.json")
    .then((response)=>response.json())
    .then((data)=>{
      const filteredProducts = data.filter((product)=>product.category === "shawls");
      setProducts(filteredProducts); // Only shows Shawls
    })
    .catch((error)=>console.error("Error fetching product:",error));
  },[]);
  return (
    <div>
    <h1 className='text-center mt-20 mb-20 text-4xl font-serif' >Shawls</h1>
    <div className='flex h-10 w-full p-1 mb-20 border-t-2 border-b-2'>
     <div className="text-center font-semibold mx-auto ">{products.length}PRODUCTS</div>
     <div className='mr-8'>SORT BY</div>
     </div>
     <div className="flex p-8"> {/* Flex container for sidebar & products */}
      
      {/* Left Sidebar (Filter) */}
      <div className="w-1/4 p-6 bg-gray-100 shadow-md rounded-lg sticky top-20 h-fit">
        <h2 className="text-2xl font-semibold mb-4">Filters</h2>

        {/* Availability Filter */}
        <div>
          <button
            className="w-full text-left font-semibold text-lg flex justify-between"
            onClick={() => setAvailabilityOpen(!isAvailabilityOpen)}
          >
            Availability
            <span>{isAvailabilityOpen ? "▲" : "▼"}</span>
          </button>
          {isAvailabilityOpen && <p className="mt-2 pl-4">In Stock</p>}
        </div>

        {/* Price Filter */}
        <div className="mt-4">
          <button
            className="w-full text-left font-semibold text-lg flex justify-between"
            onClick={() => setPriceOpen(!isPriceOpen)}
          >
            Price
            <span>{isPriceOpen ? "▲" : "▼"}</span>
          </button>
          {isPriceOpen && <p className="mt-2 pl-4">PKR 5,000 - 30,000</p>}
        </div>

        {/* Fabric Filter */}
        <div className="mt-4">
          <button
            className="w-full text-left font-semibold text-lg flex justify-between"
            onClick={() => setFabricOpen(!isFabricOpen)}
          >
            Fabric
            <span>{isFabricOpen ? "▲" : "▼"}</span>
          </button>
          {isFabricOpen && <p className="mt-2 pl-4">Cotton, Silk, Chiffon</p>}
        </div>

        {/* Size Filter */}
        <div className="mt-4">
          <button
            className="w-full text-left font-semibold text-lg flex justify-between"
            onClick={() => setSizeOpen(!isSizeOpen)}
          >
            Size
            <span>{isSizeOpen ? "▲" : "▼"}</span>
          </button>
          {isSizeOpen && <p className="mt-2 pl-4">S, M, L, XL</p>}
        </div>
      </div>

      {/* Product Grid */}
      <div className="w-3/4 ml-8">
        <div className="grid grid-cols-2 row-auto gap-8">
          {products.map((product) => (
            <div 
              key={product.id} 
              className="cursor-pointer flex flex-col items-center"
              onClick={() => navigate(`/product/${product.id}`)}
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
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-gray-600 font-medium">PKR {product.price}</p>
                <p className="text-gray-500 text-sm">{product.fabric} - {product.size}</p>
                <p className="text-red-600 font-bold mt-2">3 PIECE</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
    </div>
  );
};
export default Shawls;