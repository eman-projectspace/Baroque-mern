import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../Context/CartContext";  

const ProductDetails = () => {
  const { id } = useParams(); // It Get product ID from URL
  const { addToCart } = useCart();  // Access addToCart function from context

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);  

  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  console.log("Product ID from URL:", id);  // If any error occur

//INCREASE AND DECREASE
const [quantity, setQuantity] = useState(1);  // State to track quantity
const increaseQuantity = () => {
  setQuantity((prevQuantity) => prevQuantity + 1);
};

const decreaseQuantity = () => {
  if (quantity > 1) {
    setQuantity((prevQuantity) => prevQuantity - 1);
  }
}; 


//SIDE BAR 
  const [isProductDetailsOpen, setProductDetailsOpen] = useState(false);
  const [isDeliveryOpen, setDeliveryOpen] = useState(false);
  const [isreturnOpen, setreturnOpen] = useState(false);
  const [isCareOpen, setCareOpen] = useState(false);



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

  // Now My all hooks are above the conditional return statements
  if (loading) return <p>Loading product details...</p>;
  if (error) return <p className="text-red-500">{error}</p>;
  if (!product) return <p className="text-red-500">Product not found.</p>;

  const handleAddToCart = () => {
    addToCart(product);  // Add the product to the cart
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className="md:flex md:flex-row md:mb-28 md:mt-16">
      <hr />
      <div className="md:w-32 md:h-auto md:flex md:flex-col md:space-y-5 md:ml-6 md:items-center">
        <div className="md:w-20 md:h-20 md:border-2 md:border-black "></div>
        <div className="md:w-20 md:h-20 md:border-2 md:border-black "></div>
        <div className="md:w-20 md:h-20 md:border-2 md:border-black "></div>
        <div className="md:w-20 md:h-20 md:border-2 md:border-black "></div>
        <div className="md:w-20 md:h-20 md:border-2 md:border-black "></div>
      </div>
      <div className=" md:w-2/4 md:flex md:flex-col md:ml-10 ">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="w-80 ml-12 text-left ">
        <p className="text-xl text-gray-500 mt-2">{product.name}</p>
        <p className="mt-2 font-semibold font-serif text-gray-700">PKR {product.price}</p>
        <p className="text-lg text-gray-600 mt-1">Fabric: {product.fabric}</p>
        <p className="text-lg text-gray-600 mt-1">Size: {product.size}</p>
        <p className="text-gray-600 font-semibold mt-2">3 PIECE</p>
        <p className="text-gray-600 font-semibold mt-2 mb-5">Colour : Printed piece</p>
        <hr />
        <p className="text-balck text-left text-xl mt-4 mb-3">Type : </p>
        <button className="border-gray-500 border-2 px-6 py-2">Stitched</button>
        <br />
        <p className="text-balck text-left text-xl mt-2 mb-2">Size : </p>
        {/* SIZE CHART */}
        <div className="size-chart">
          <div className="flex space-x-4 mt-4">
            {sizes.map((size) => (
              <button key={size}
            className={`w-10 h-10 border-black border-1
          ${selectedSize === size ? 'border-black text-black' : 'bg-gray-200'}`}
            onClick={() => handleSizeSelect(size)}>{size}</button>
            ))}
          </div>
          {selectedSize && <p className="mt-2">Selected Size: {selectedSize}</p>}
        </div>
        <br />
        
        {/* INCREASE AND DECREASE BUTTON */}
        <div className="flex items-center space-x-4 ">
        <div className="border-2 border-gray-700 h-10 w-28 flex flex-row  md:ml-28">
  <button onClick={decreaseQuantity} className="mr-5 ml-5">-</button>
  <p className="text-xl">{quantity} </p>
  <button onClick={increaseQuantity} className="mr-5 ml-5">+</button>
  </div>
 </div>
                 {/* ADD TO CART BUTTON */}
    <button onClick={handleAddToCart} 
      className="bg-black text-white px-6 py-2 w-80 mt-10 mb-5 border-2
      hover:!bg-transparent hover:!border-black hover:!border-2 hover:!text-black hover:!duration-500 ease-in-out">
    Add to Cart</button>

    <div className="sticky top-96 h-fit">
        {/* Product Filter */}
        <div>
          <button
            className="w-full text-left text-lg flex justify-between font-serif"
            onClick={() => setProductDetailsOpen(!isProductDetailsOpen)}>
            Product Details<span>{isProductDetailsOpen ? "▲" : "▼"}</span> </button>
          {isProductDetailsOpen && <p className="mt-2 pl-4 font-semibold">lrny laiwr 3 dwrfyc  clu</p>}
        </div>
     <hr/>

        {/* Delivry Filter */}
        <div className="mt-4">
          <button
            className="w-full text-left font-serif text-lg flex justify-between"
            onClick={() => setDeliveryOpen(!isDeliveryOpen)}
          >Delivery<span>{isDeliveryOpen ? "▲" : "▼"}</span></button>
          {isDeliveryOpen && <p className="mt-2 pl-4 font-bold">PKR 5,000 - 30,000</p>}
        </div>
        <hr/>

        {/* Return & Exchange Filter */}
        <div className="mt-4">
          <button
            className="w-full text-left font-serif text-lg flex justify-between"
            onClick={() => setreturnOpen(!isreturnOpen)}
            >Return and Exchange<span>{isreturnOpen ? "▲" : "▼"}</span></button>
          {isreturnOpen && <p className="mt-2 pl-4 font-semibold">Cotton, Silk, Chiffon</p>}
        </div>
        <hr/>

        {/* Care Filter */}
        <div className="mt-4">
          <button
            className="w-full text-left font-serif text-lg flex justify-between"
            onClick={() => setCareOpen(!isCareOpen)}
          > Care <span>{isCareOpen ? "▲" : "▼"}</span> </button>
          {isCareOpen && <p className="mt-2 pl-4 font-semibold"></p>}

        </div>
        <hr/>
      </div>

      </div>
    </div>
  );
};

export default ProductDetails;