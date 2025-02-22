import { useEffect, useState } from "react";

const ManageMore = () => {
  const [, setProducts] = useState([]); //i removed products from here
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    image: "",
  });

  // Fetch products from API
  useEffect(() => {
    fetch("http://localhost:8888/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const handleInputChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const addProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8888/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      });

      if (response.ok) {
        alert("Product added successfully!");
        setNewProduct({ name: "", category: "", price: "", stock: "", image: "" });
        window.location.reload(); // Refresh products
      } else {
        alert("Failed to add product!");
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Manage Products</h2>

      {/* Add Product Form */}
      <form onSubmit={addProduct} className="mb-6 border p-4">
        <h3 className="text-lg font-semibold mb-2">Add New Product</h3>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={newProduct.name}
          onChange={handleInputChange}
          className="border p-2 w-full mb-2"
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={newProduct.category}
          onChange={handleInputChange}
          className="border p-2 w-full mb-2"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={newProduct.price}
          onChange={handleInputChange}
          className="border p-2 w-full mb-2"
          required
        />
        <input
          type="number"
          name="stock"
          placeholder="Stock"
          value={newProduct.stock}
          onChange={handleInputChange}
          className="border p-2 w-full mb-2"
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={newProduct.image}
          onChange={handleInputChange}
          className="border p-2 w-full mb-2"
        />
        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default ManageMore;