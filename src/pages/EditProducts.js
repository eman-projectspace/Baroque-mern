import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const EditProduct = () => {
  const { id } = useParams(); // Get product ID from URL
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    category: "",
    price: "",
    size: "",
    fabric: "",
    image: "",
  });

  useEffect(() => {
    // Fetch the existing product details
    axios.get(`http://localhost:8888/api/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error("Error fetching product:", err));
  }, [id]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:8888/api/products/${id}`, product);
      alert("Product updated successfully!");
      navigate("/"); // Redirect to homepage after update
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div>
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={product.name} onChange={handleChange} required />
        <input type="text" name="category" value={product.category} onChange={handleChange} required />
        <input type="number" name="price" value={product.price} onChange={handleChange} required />
        <input type="text" name="size" value={product.size} onChange={handleChange} required />
        <input type="text" name="fabric" value={product.fabric} onChange={handleChange} required />
        <input type="text" name="image" value={product.image} onChange={handleChange} required />
        <button type="submit">Update Product</button>
      </form>
    </div>
  );
};

export default EditProduct;
