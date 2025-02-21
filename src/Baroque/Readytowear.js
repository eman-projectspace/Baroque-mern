import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ProductContext } from "../Context/ProductContext"; // Adjust path as needed

const Stitched = () => {
  const [isAvailabilityOpen, setAvailabilityOpen] = useState(false);
  const [isPriceOpen, setPriceOpen] = useState(false);
  const [isFabricOpen, setFabricOpen] = useState(false);
  const [isSizeOpen, setSizeOpen] = useState(false);
  const { products } = useContext(ProductContext); // Get products from context
  const navigate = useNavigate();

 // Filter ready to wear dresses
const readytowearProducts = products.filter(
  (product) => product.category === "readytowear"
);

  return (
    <div>
           <h1 className='text-center mt-20 mb-20 text-4xl font-serif' >READY TO WEAR</h1>
         <div className='flex h-10 w-full p-1 mb-20 border-t-2 border-b-2'>
          <div className="text-center font-semibold mx-auto hidden md:block ">{readytowearProducts.length} PRODUCTS</div>
          <div className='md:mr-8 hidden md:block'>SORT BY</div>
          <div className='mr-20 ml-24 block md:hidden text-gray-500 hover:text-black cursor-pointer '>FILTERS</div>
          <div className="md:block border-r-2 border-gray-400"></div>
          <div className='md:mr-8 block md:hidden text-gray-500 hover:text-black cursor-pointer ml-10'>SORT BY</div>
          </div>
    <div className="flex p-8"> {/* Flex container for sidebar & products */}
      
      {/* Left Sidebar (Filter) */}
      <div className="w-1/4 p-6 bg-gray-100 shadow-md rounded-lg sticky top-20 h-fit hidden md:block">
        
        {/* Availability Filter */}
        <div>
          <button
            className="w-full text-left text-lg flex justify-between font-serif"
            onClick={() => setAvailabilityOpen(!isAvailabilityOpen)}>
                            Availability
            <span>{isAvailabilityOpen ? "▲" : "▼"}</span> </button>
          {isAvailabilityOpen && <p className="mt-2 pl-4 font-semibold">In Stock</p>}
        </div>
     <hr/>
        {/* Price Filter */}
        <div className="mt-4">
          <button
            className="w-full text-left font-serif text-lg flex justify-between"
            onClick={() => setPriceOpen(!isPriceOpen)}
          >
            Price
            <span>{isPriceOpen ? "▲" : "▼"}</span>
          </button>
          {isPriceOpen && <p className="mt-2 pl-4 font-bold">PKR 5,000 - 30,000</p>}
        </div>
        <hr/>
        {/* Fabric Filter */}
        <div className="mt-4">
          <button
            className="w-full text-left font-serif text-lg flex justify-between"
            onClick={() => setFabricOpen(!isFabricOpen)}
          >
            Fabric
            <span>{isFabricOpen ? "▲" : "▼"}</span>
          </button>
          {isFabricOpen && <p className="mt-2 pl-4 font-semibold">Cotton, Silk, Chiffon</p>}
        </div>
        <hr/>
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
        <hr/>
      </div>
  
      {/* Product Grid */}
      <div className="md:w-3/4 md:ml-8 ">
      <div className="grid md:grid-cols-2 row-auto md:gap-8 -mt-16 ">
      {readytowearProducts.map((product) => ( // Use chantelleProducts instead of products
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
                <p className="text-gray-600 md:mb-0 mb-5 text-sm mt-2 md:mt-2">{product.piece}</p>
                {/* <p className="text-gray-500 text-sm">{product.fabric} - {product.size}</p>
                <p className="text-red-600 font-bold mt-2">3 PIECE</p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      
    </div>
    </div>
  );
};

export default Stitched;
// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const ReadyToWear = () => {
//   const [isAvailabilityOpen, setAvailabilityOpen] = useState(false);
//   const [isPriceOpen, setPriceOpen] = useState(false);
//   const [isFabricOpen, setFabricOpen] = useState(false);
//   const [isSizeOpen, setSizeOpen] = useState(false);
//   const [products, setProducts] = useState([]); // State to store products
//   const navigate = useNavigate();

//   // Fetch products from JSON
//   useEffect(() => {
//     fetch("/products.json") 
//       .then((response) => response.json())
//       .then((data) => {
//         const filteredProducts = data.filter((product) => product.category === "readytowear");
//         setProducts(filteredProducts); // Only show Ready to Wear products
//       })
//       .catch((error) => console.error("Error fetching products:", error));
//   }, []);

//   return (
//     <div>
//            <h1 className='text-center mt-20 mb-20 text-4xl font-serif' >READY TO WEAR</h1>
//          <div className='flex h-10 w-ful p-1 mb-20 border-t-2 border-b-2'>
//           <div className="text-center font-semibold mx-auto ">{products.length} PRODUCTS</div>
//           <div className='mr-8'>SORT BY</div>
//           </div>
//     <div className="flex p-8"> {/* Flex container for sidebar & products */}
      
//       {/* Left Sidebar (Filter) */}
//       <div className="w-1/4 p-6 bg-gray-100 shadow-md rounded-lg sticky top-20 h-fit">
       
//         {/* Availability Filter */}
//         <div>
//           <button
//             className="w-full text-left font-serif text-lg flex justify-between"
//             onClick={() => setAvailabilityOpen(!isAvailabilityOpen)}
//           >
//             Availability
//             <span>{isAvailabilityOpen ? "▲" : "▼"}</span>
//           </button>
//           {isAvailabilityOpen && <p className="mt-2 pl-4 font-semibold">In Stock</p>}
//         </div>
//         <hr/>
//         {/* Price Filter */}
//         <div className="mt-4">
//           <button
//             className="w-full text-left font-serif text-lg flex justify-between"
//             onClick={() => setPriceOpen(!isPriceOpen)}
//           >
//             Price
//             <span>{isPriceOpen ? "▲" : "▼"}</span>
//           </button>
//           {isPriceOpen && <p className="mt-2 pl-4 font-semibold">PKR 5,000 - 30,000</p>}
//         </div>
//         <hr/>
//         {/* Fabric Filter */}
//         <div className="mt-4">
//           <button
//             className="w-full text-left font-serif text-lg flex justify-between"
//             onClick={() => setFabricOpen(!isFabricOpen)}
//           >
//             Fabric
//             <span>{isFabricOpen ? "▲" : "▼"}</span>
//           </button>
//           {isFabricOpen && <p className="mt-2 pl-4 font-semibold">Cotton, Silk, Chiffon</p>}
//         </div>
//         <hr/>
//         {/* Size Filter */}
//         <div className="mt-4">
//           <button
//             className="w-full text-left font-serif text-lg flex justify-between"
//             onClick={() => setSizeOpen(!isSizeOpen)}
//           >
//             Size
//             <span>{isSizeOpen ? "▲" : "▼"}</span>
//           </button>
//           {isSizeOpen && <p className="mt-2 pl-4 font-semibold">S, M, L, XL</p>}
//         </div>
//       </div>
//       <hr/>
//       {/* Product Grid */}
//       <div className="w-3/4 ml-8">
//         <div className="grid grid-cols-2 row-auto gap-8">
//           {products.map((product) => (
//             <div 
//               key={product.id} 
//               className="cursor-pointer flex flex-col items-center"
//               onClick={() => navigate(`/product/${product.id}`)}
//             >
//               {/* Image (Full View) */}
//               <div className="w-full h-full">
//                 <img 
//                   src={product.image} 
//                   alt={product.name} 
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               {/* Product Details */}
//               <div className="mt-4 text-center">
//                 <h2 className="text-xl font-semibold">{product.name}</h2>
//                 <p className="text-gray-600 font-medium">PKR {product.price}</p>
//                 <p className="text-gray-500 text-sm">{product.fabric} - {product.size}</p>
//                 <p className="text-red-600 font-bold mt-2">3 PIECE</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
      
//     </div>
//     </div>
//   );
// };

// export default ReadyToWear;