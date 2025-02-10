import { useState, useEffect } from "react";

const ProductList = ({ category }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const filteredProducts = data.filter(product => product.category === category);
        setProducts(filteredProducts);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, [category]);

  return (
    <div>
      <h2>{category.toUpperCase()} Collection</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Price: Rs {product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
