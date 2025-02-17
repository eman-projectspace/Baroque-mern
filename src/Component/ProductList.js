// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom"; // ✅ Import Link

// const ProductList = ({ category }) => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetch("http://localhost:8888/api/products") // 🔹 Replace with actual API URL
//       .then((response) => {
//         console.log("Fetch Response:", response); // ✅ Debugging
//         if (!response.ok) {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//         return response.json();
//       })
//       .then((data) => {
//         console.log("Fetched Data:", data); // ✅ Debugging
//         const filteredProducts = data.filter((product) => product.category === category);
//         setProducts(filteredProducts);
//       })
//       .catch((error) => console.error("Fetch error:", error));
//   }, [category]);
  

//   return (
//     <div>
//       <h2>{category.toUpperCase()} Collection</h2>
//       <div className="product-grid">
//         {products.map((product) => (
//             console.log("Product ID in ProductList:", product.id); // ✅ Debugging
//           <Link key={product.id} to={`/products/${product.id}`} className="product-card">

//             {/* ✅ Clicking this Link will navigate to the details page */}
//             <img src={product.image} alt={product.name} />
//             <h3>{product.name}</h3>
//             <p>{product.description}</p>
//             <p>Price: Rs {product.price}</p>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ProductList;
