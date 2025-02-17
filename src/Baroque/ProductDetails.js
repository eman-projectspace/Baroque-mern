import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../Context/CartContext";  // Import the useCart hook

const ProductDetails = () => {
  const { id } = useParams(); // Get product ID from URL
  const { addToCart } = useCart();  // Access addToCart function from context
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log("Product ID from URL:", id);  // Debugging log

  useEffect(() => {
    if (!id) {
      setError("Product ID is missing");
      setLoading(false);
      return;
    }

    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:8888/api/products/${id}`);
        setProduct(res.data);
        console.log("Fetched Product Data:", res.data);  // Log the fetched data
      } catch (error) {
        console.error("Error fetching product details:", error);
        setError("Failed to fetch product details.");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading product details...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!product) return <p className="text-red-500">Product not found.</p>;

  
  const handleAddToCart = () => {
    addToCart(product);  // Add the product to the cart
  };

  return (
    <div className="flex flex-col items-center p-10">
      <h2 className="text-3xl font-bold">{product.name}</h2>
      <img src={product.image} alt={product.name} className="w-96 h-auto mt-4" />
      <p className="text-xl mt-2 font-semibold text-gray-700">PKR {product.price}</p>
      <p className="text-lg text-gray-600 mt-1">Fabric: {product.fabric}</p>
      <p className="text-lg text-gray-600 mt-1">Size: {product.size}</p>
      <p className="text-red-600 font-bold mt-2">3 PIECE</p>
      <button
        onClick={handleAddToCart}  // Add the onClick event to trigger Add to Cart
        className="mt-4 bg-red-500 text-white px-6 py-2 rounded-lg"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetails;
