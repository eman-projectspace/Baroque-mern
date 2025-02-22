import { useEffect, useState } from "react";

const ManageProducts = () => {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [updatedProduct, setUpdatedProduct] = useState({ name: "", price: "" });

  // ✅ Fetch products from API
  const fetchProducts = async () => {
    try {
      const response = await fetch("http://localhost:8888/api/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // ✅ Delete Product
  const deleteProduct = async (productId) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;

    try {
      const response = await fetch(`http://localhost:8888/api/products/${productId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        alert("Product deleted successfully!");
        setProducts(products.filter((product) => product._id !== productId)); // Update UI
      } else {
        alert("Failed to delete product!");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  // ✅ Start Editing Product
  const startEditing = (product) => {
    setEditingProduct(product._id);
    setUpdatedProduct({ name: product.name, price: product.price });
  };

  // ✅ Update Product
  const updateProduct = async (productId) => {
    try {
      const response = await fetch(`http://localhost:8888/api/products/${productId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedProduct),
      });

      if (response.ok) {
        alert("Product updated successfully!");
        setEditingProduct(null);
        fetchProducts(); // Refresh products after update
      } else {
        alert("Failed to update product!");
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Manage Products</h2>
      <table className="min-w-full border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">Image</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Category</th>
            <th className="border px-4 py-2">Price</th>
            <th className="border px-4 py-2">Stock</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product._id} className="text-center">
              <td className="border px-4 py-2">
                <img src={product.image} alt={product.name} className="w-16 h-16 object-cover" />
              </td>
              <td className="border px-4 py-2">{product.name}</td>
              <td className="border px-4 py-2">{product.category}</td>
              <td className="border px-4 py-2">${product.price}</td>
              <td className="border px-4 py-2">{product.stock}</td>
              <td className="border px-4 py-2 flex gap-2 justify-center">
                {/* ✅ Delete Button */}
                <button onClick={() => deleteProduct(product._id)} className="bg-red-500 text-white px-2 py-1 rounded">
                  Delete
                </button>

                {/* ✅ Edit & Save Buttons */}
                {editingProduct === product._id ? (
                  <>
                    <input
                      type="text"
                      value={updatedProduct.name}
                      onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
                      className="border px-2 py-1"
                    />
                    <input
                      type="number"
                      value={updatedProduct.price}
                      onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
                      className="border px-2 py-1"
                    />
                    <button onClick={() => updateProduct(product._id)} className="bg-green-500 text-white px-2 py-1 rounded">
                      Save
                    </button>
                  </>
                ) : (
                  <button onClick={() => startEditing(product)} className="bg-blue-500 text-white px-2 py-1 rounded">
                    Edit
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProducts;