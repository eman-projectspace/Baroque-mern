// import React from 'react'
// import { useState } from "react";

// function Chantelle() {
//     const [openSections, setOpenSections] = useState({});
  
//     const toggleSection = (section) => {
//       setOpenSections((prev) => ({
//         ...prev,
//         [section]: !prev[section],
//       }));
//     };
//   return (
//     <div>
      
//       <h1 className='text-center mt-20 mb-20 text-4xl font-serif' >CHANTELLE</h1>
//       <div className='flex h-10 w-ful p-1 mb-20 border-t-2 border-slate-200 border-b-2'>
//       <div className="text-center font-semibold mx-auto ">88 PRODUCTS</div>
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
// <div><img src="https://baroque.pk/cdn/shop/files/01_0019707b-c8a5-43bb-bbc1-b6cf227c36bb.jpg?v=1731482562&width=600" alt=''/>
// <p className='text-center'>EMBROIDERED NET CH13-01 UNSTITCHED<br/><b>PKR 29,900.00</b><br/>CHANTELLE 13</p></div>
// <div><img src="https://baroque.pk/cdn/shop/files/27_5c2c3cec-1266-442b-8a75-f18c64058527.jpg?v=1731483899&width=600" alt=''/>
// <p className='text-center'>EMBROIDERED NET CH13-01 UNSTITCHED<br/><b>PKR 29,900.00</b><br/>CHANTELLE 13</p></div>
// <div><img src="https://baroque.pk/cdn/shop/files/52_135d276a-c816-4834-b08d-8ef3736d5e72.jpg?v=1731485932&width=600" alt=''/>
// <p className='text-center'>EMBROIDERED NET CH13-01 UNSTITCHED<br/><b>PKR 29,900.00</b><br/>CHANTELLE 13</p></div>
// <div><img src="https://baroque.pk/cdn/shop/files/116_54df7eb3-da36-4089-b6f5-eeb07a0c12f5.jpg?v=1731492797&width=600" alt=''/>
// <p className='text-center'>EMBROIDERED NET CH13-01 UNSTITCHED<br/><b>PKR 29,900.00</b><br/>CHANTELLE 13</p></div>
// <div><img src="https://baroque.pk/cdn/shop/files/88_5c1ad661-f75b-475d-bf3f-ae05701128f1.jpg?v=1731668881&width=600" alt=''/>
// <p className='text-center'>EMBROIDERED NET CH13-01 UNSTITCHED<br/><b>PKR 29,900.00</b><br/>CHANTELLE 13</p></div>
// <div><img src="https://baroque.pk/cdn/shop/files/164_b204a39a-08ef-4735-a673-ba49e07fced1.jpg?v=1731495880&width=1000" alt=''/>
// <p className='text-center'>EMBROIDERED NET CH13-01 UNSTITCHED<br/><b>PKR 29,900.00</b><br/>CHANTELLE 13</p></div>
// <div><img src="https://baroque.pk/cdn/shop/files/140_43dc3951-2d38-4f77-b46d-23dacb5024b8.jpg?v=1731494323&width=1000" alt=''/>
// <p className='text-center'>EMBROIDERED NET CH13-01 UNSTITCHED<br/><b>PKR 29,900.00</b><br/>CHANTELLE 13</p></div>
// <div><img src="https://baroque.pk/cdn/shop/files/75_750c6a1f-b960-4428-a19f-8ce78ae165e5.jpg?v=1731486591&width=1000" alt=''/>
// <p className='text-center'>EMBROIDERED NET CH13-01 UNSTITCHED<br/><b>PKR 29,900.00</b><br/>CHANTELLE 13</p></div>
// <div><img src="https://baroque.pk/cdn/shop/files/04_10e6dd55-f77f-44f2-80e6-78595249eeef.jpg?v=1705664406&width=1000" alt=''/>
// <p className='text-center'>EMBROIDERED NET CH13-01 UNSTITCHED<br/><b>PKR 29,900.00</b><br/>CHANTELLE 13</p></div>
// <div><img src="https://baroque.pk/cdn/shop/files/13_db6af676-9e10-4618-8633-b3aebaca4521.jpg?v=1705663522&width=1000" alt=''/>
// <p className='text-center'>EMBROIDERED NET CH13-01 UNSTITCHED<br/><b>PKR 29,900.00</b><br/>CHANTELLE 13</p></div>
// <div><img src="https://baroque.pk/cdn/shop/files/37_2985eb17-832d-4738-8e32-971c51040675.jpg?v=1705664484&width=600" alt=''/>
// <p className='text-center'>EMBROIDERED NET CH13-01 UNSTITCHED<br/><b>PKR 29,900.00</b><br/>CHANTELLE 13</p></div>
// <div><img src="https://baroque.pk/cdn/shop/files/52_21d554c2-8ef6-4627-9847-3a0ce772f43c.jpg?v=1705564218&width=600" alt=''/>
// <p className='text-center'>EMBROIDERED NET CH13-01 UNSTITCHED<br/><b>PKR 29,900.00</b><br/>CHANTELLE 13</p></div>
// <div><img src="https://baroque.pk/cdn/shop/files/71_734b1969-aebe-442c-a05e-1f7c6add575d.jpg?v=1705736543&width=600" alt=''/>
// <p className='text-center'>EMBROIDERED NET CH13-01 UNSTITCHED<br/><b>PKR 29,900.00</b><br/>CHANTELLE 13</p></div>
// <div><img src="https://baroque.pk/cdn/shop/files/93_d9e554c5-5fa6-47ec-8845-5f1107d03181.jpg?v=1705734823&width=600" alt=''/>
// <p className='text-center'>EMBROIDERED NET CH13-01 UNSTITCHED<br/><b>PKR 29,900.00</b><br/>CHANTELLE 13</p></div>
// <div><img src="https://baroque.pk/cdn/shop/files/114_8d7fa408-df27-479b-b51f-8e011b19a6f2.jpg?v=1705736387&width=600" alt=''/>
// <p className='text-center'>EMBROIDERED NET CH13-01 UNSTITCHED<br/><b>PKR 29,900.00</b><br/>CHANTELLE 13</p></div>
// <div><img src="https://baroque.pk/cdn/shop/files/140_b5d09bc4-aabd-40bb-906a-b954eae81e15.jpg?v=1705736503&width=600" alt=''/>
// <p className='text-center'>EMBROIDERED NET CH13-01 UNSTITCHED<br/><b>PKR 29,900.00</b><br/>CHANTELLE 13</p></div>
// <div><img src="https://baroque.pk/cdn/shop/products/87_36907ca8-ca65-43a3-b140-2c8cf6c09a99.jpg?v=1669115381&width=600" alt=''/>
// <p className='text-center'>EMBROIDERED NET CH13-01 UNSTITCHED<br/><b>PKR 29,900.00</b><br/>CHANTELLE 13</p></div>
// <div><img src="https://baroque.pk/cdn/shop/products/82_5491962c-0861-47a2-ab32-74173b23039f.jpg?v=1669115366&width=600" alt=''/>
// <p className='text-center'>EMBROIDERED NET CH13-01 UNSTITCHED<br/><b>PKR 29,900.00</b><br/>CHANTELLE 13</p></div>
// <div><img src="https://baroque.pk/cdn/shop/products/57_fd253598-1ab5-4938-9888-b602f874c65f.jpg?v=1677322864&width=600" alt=''/>
// <p className='text-center'>EMBROIDERED NET CH13-01 UNSTITCHED<br/><b>PKR 29,900.00</b><br/>CHANTELLE 13</p></div>
// <div><img src="https://baroque.pk/cdn/shop/products/PS1_1.jpg?v=1612432225&width=600" alt=''/>
// <p className='text-center'>EMBROIDERED NET CH13-01 UNSTITCHED<br/><b>PKR 29,900.00</b><br/>CHANTELLE 13</p></div>
// <div><img src="https://baroque.pk/cdn/shop/products/c2_1_71098c76-34e6-405c-84c0-2108d1dfeb16.jpg?v=1669115725&width=600" alt=''/>
// <p className='text-center'>EMBROIDERED NET CH13-01 UNSTITCHED<br/><b>PKR 29,900.00</b><br/>CHANTELLE 13</p></div>
// <div><img src="https://baroque.pk/cdn/shop/products/35_db2598ab-2487-4e65-83e4-ce1e70e744b2.jpg?v=1677314412&width=600" alt=''/>
// <p className='text-center'>EMBROIDERED NET CH13-01 UNSTITCHED<br/><b>PKR 29,900.00</b><br/>CHANTELLE 13</p></div>
// <div><img src="https://baroque.pk/cdn/shop/products/57_1.jpg?v=1687599432&width=600" alt=''/>
// <p className='text-center'>EMBROIDERED NET CH13-01 UNSTITCHED<br/><b>PKR 29,900.00</b><br/>CHANTELLE 13</p></div>
// <div><img src="https://baroque.pk/cdn/shop/products/16_dd0a51cc-052f-4884-b350-19231a69d044.jpg?v=1677313077&width=600" alt=''/>
// <p className='text-center'>EMBROIDERED NET CH13-01 UNSTITCHED<br/><b>PKR 29,900.00</b><br/>CHANTELLE 13</p></div>
// <div><img src="https://baroque.pk/cdn/shop/products/38_5.jpg?v=1669115652&width=600" alt=''/>
// <p className='text-center'>EMBROIDERED NET CH13-01 UNSTITCHED<br/><b>PKR 29,900.00</b><br/>CHANTELLE 13</p></div>
// <div><img src="https://baroque.pk/cdn/shop/products/17.jpg?v=1692857558&width=600" alt=''/>
// <p className='text-center'>EMBROIDERED NET CH13-01 UNSTITCHED<br/><b>PKR 29,900.00</b><br/>CHANTELLE 13</p></div>
// <div><img src="https://baroque.pk/cdn/shop/products/Pearl_luster_2.jpg?v=1594118536&width=600" alt=''/>
// <p className='text-center'>EMBROIDERED NET CH13-01 UNSTITCHED<br/><b>PKR 29,900.00</b><br/>CHANTELLE 13</p></div>
// <div><img src="https://baroque.pk/cdn/shop/products/1Q0A1764.jpg?v=1570388246&width=600" alt=''/>
// <p className='text-center'>EMBROIDERED NET CH13-01 UNSTITCHED<br/><b>PKR 29,900.00</b><br/>CHANTELLE 13</p></div>
// <div><img src="https://baroque.pk/cdn/shop/products/c3_1.jpg?v=1581409907&width=600" alt=''/>
// <p className='text-center'>EMBROIDERED NET CH13-01 UNSTITCHED<br/><b>PKR 29,900.00</b><br/>CHANTELLE 13</p></div>
// <div><img src="https://baroque.pk/cdn/shop/products/C5.jpg?v=1645270201&width=600" alt=''/>
// <p className='text-center'>EMBROIDERED NET CH13-01 UNSTITCHED<br/><b>PKR 29,900.00</b><br/>CHANTELLE 13</p></div>
// <div><img src="https://baroque.pk/cdn/shop/products/24_55f584ce-b20a-4c63-85be-c157c53a960e.jpg?v=1677324694&width=600" alt=''/>
// <p className='text-center'>EMBROIDERED NET CH13-01 UNSTITCHED<br/><b>PKR 29,900.00</b><br/>CHANTELLE 13</p></div>
// <div><img src="https://baroque.pk/cdn/shop/products/12_3c9a7904-74aa-4844-9539-ea0b41d0ae40.jpg?v=1669112365&width=600" alt=''/>
// <p className='text-center'>EMBROIDERED NET CH13-01 UNSTITCHED<br/><b>PKR 29,900.00</b><br/>CHANTELLE 13</p></div>
// <div><img src="https://baroque.pk/cdn/shop/products/48_9f5bbbd1-8914-48c3-9a13-6bb8a37806ac.jpg?v=1665215884&width=600" alt=''/>
// <p className='text-center'>EMBROIDERED NET CH13-01 UNSTITCHED<br/><b>PKR 29,900.00</b><br/>CHANTELLE 13</p></div>
// <div><img src="https://baroque.pk/cdn/shop/products/27_caefaf42-9881-4ab7-9ebe-0272928d2bda.jpg?v=1672743077&width=600" alt=''/>
// <p className='text-center'>EMBROIDERED NET CH13-01 UNSTITCHED<br/><b>PKR 29,900.00</b><br/>CHANTELLE 13</p></div>
// <div><img src="https://baroque.pk/cdn/shop/products/30_6d2cefbb-8949-4632-8bf0-43c90f453a9b.jpg?v=1669115685&width=600" alt=''/>
// <p className='text-center'>EMBROIDERED NET CH13-01 UNSTITCHED<br/><b>PKR 29,900.00</b><br/>CHANTELLE 13</p></div>
// <div><img src="https://baroque.pk/cdn/shop/products/89_bcac18f5-5788-4b97-ae71-4abd47a6ba1d.jpg?v=1672742976&width=600" alt=''/>
// <p className='text-center'>EMBROIDERED NET CH13-01 UNSTITCHED<br/><b>PKR 29,900.00</b><br/>CHANTELLE 13</p></div>
// <div><img src="https://baroque.pk/cdn/shop/products/ST4_1fbcf726-55e9-439e-bba1-c05f00177007.jpg?v=1687599557&width=600" alt=''/>
// <p className='text-center'>EMBROIDERED NET CH13-01 UNSTITCHED<br/><b>PKR 29,900.00</b><br/>CHANTELLE 13</p></div>
// <div><img src="https://baroque.pk/cdn/shop/products/86_77c95ada-8275-4c99-a13e-c7a225323649.jpg?v=1669115405&width=600" alt=''/>
// <p className='text-center'>EMBROIDERED NET CH13-01 UNSTITCHED<br/><b>PKR 29,900.00</b><br/>CHANTELLE 13</p></div>
// <div><img src="https://baroque.pk/cdn/shop/products/03_fd912bc5-7db4-4afc-a077-d2208491432b.jpg?v=1677318671&width=600" alt=''/>
// <p className='text-center'>EMBROIDERED NET CH13-01 UNSTITCHED<br/><b>PKR 29,900.00</b><br/>CHANTELLE 13</p></div>
// <div><img src="https://baroque.pk/cdn/shop/products/43_3a884a2e-ab3a-4a89-b710-bec59cae26bf.jpg?v=1677313250&width=1000" alt=''/>
// <p className='text-center'>EMBROIDERED NET CH13-01 UNSTITCHED<br/><b>PKR 29,900.00</b><br/>CHANTELLE 13</p></div>
// <div><img src="https://baroque.pk/cdn/shop/products/4_3e4d668c-02e2-44b9-89d1-72963af8ec3b.jpg?v=1665215947&width=600" alt=''/>
// <p className='text-center'>EMBROIDERED NET CH13-01 UNSTITCHED<br/><b>PKR 29,900.00</b><br/>CHANTELLE 13</p></div>
// <div><img src="https://baroque.pk/cdn/shop/products/07_d3cf8666-783f-4821-a529-3734fea1226a.jpg?v=1687599049&width=600" alt=''/>
// <p className='text-center'>EMBROIDERED NET CH13-01 UNSTITCHED<br/><b>PKR 29,900.00</b><br/>CHANTELLE 13</p></div>
// <div><img src="https://baroque.pk/cdn/shop/products/1Q0A1887.jpg?v=1570388248&width=600" alt=''/>
// <p className='text-center'>EMBROIDERED NET CH13-01 UNSTITCHED<br/><b>PKR 29,900.00</b><br/>CHANTELLE 13</p></div>
// <div><img src="https://baroque.pk/cdn/shop/files/93_d9e554c5-5fa6-47ec-8845-5f1107d03181.jpg?v=1705734823&width=600" alt=''/>
// <p className='text-center'>EMBROIDERED NET CH13-01 UNSTITCHED<br/><b>PKR 29,900.00</b><br/>CHANTELLE 13</p></div>
// <br/><br/>
// </div>

// </div>
//   )
// }

// export default Chantelle
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Stitched = () => {
  const [isAvailabilityOpen, setAvailabilityOpen] = useState(false);
  const [isPriceOpen, setPriceOpen] = useState(false);
  const [isFabricOpen, setFabricOpen] = useState(false);
  const [isSizeOpen, setSizeOpen] = useState(false);
  const [products, setProducts] = useState([]); // State to store products
  const navigate = useNavigate();

  // Fetch products from JSON
  useEffect(() => {
    fetch("/products.json") // Fetch from public folder
      .then((response) => response.json())
      .then((data) => {
        const filteredProducts = data.filter((product) => product.category === "chantelle");
        setProducts(filteredProducts); // Only show Ready to Wear products
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div>
           <h1 className='text-center mt-20 mb-20 text-4xl font-serif' >CHANTELLE</h1>
         <div className='flex h-10 w-full p-1 mb-20 border-t-2 border-b-2'>
          <div className="text-center font-semibold mx-auto ">{products.length} PRODUCTS</div>
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

export default Stitched;