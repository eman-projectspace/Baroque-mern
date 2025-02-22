import { useState } from "react";

const ManageMore = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    price: "",
    stock: "",
    image: "",
  });

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
      } else {
        alert("Failed to add product!");
      }
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
      <form onSubmit={addProduct} className="mb-6 border p-4">
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