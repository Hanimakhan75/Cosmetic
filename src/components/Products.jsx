import React, { useState, useEffect } from 'react';


const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch('http://makeup-api.herokuapp.com/api/v1/products.json')
      .then((res) => res.json())
      .then((data) => {
        // Slicing different parts to get mixed products
        const slice0 = data.slice(0, 11);
        const slice1 = data.slice(801, 811); 
        const slice2 = data.slice(201, 211); 
        const slice3 = data.slice(301, 311); 
        const slice4 = data.slice(401, 411); 
  
        
        const mixedProducts = [...slice0,...slice1, ...slice2, ...slice3, ...slice4];
  
        setProducts(mixedProducts);
        setFilteredProducts(mixedProducts);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);
  

  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filtered = products.filter((product) =>
      product.name?.toLowerCase().includes(searchTerm)
    );
    setFilteredProducts(filtered);
  };

  const handleViewMore = (id) => {
    localStorage.setItem('productid', id);
    alert(`View more for product ID: ${id}`);
  };

  return (
    <div className="products-container" id='products'>
      <h2 className="title">Explore Our Products</h2>
      <input
        type="text"
        className="search-bar"
        placeholder="Search products..."
        onChange={handleSearch}
      />
      <div id="product_cnt" className="product-grid">
        {isLoading ? (
          <p className="loading-text">Loading products...</p>
        ) : filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div className="product-card" key={product.id}>
              <img
                src={product.api_featured_image}
                alt={product.name}
                className="product-image"
              />
              <div className="product-info">
                <h5 className="product-name">{product.name}</h5>
                <p className="product-brand">Brand: {product.brand || 'Unknown'}</p>
                <p className="product-price">Price: ${product.price || 'N/A'}</p>
                <button className="view-btn" onClick={() => handleViewMore(product.id)}>
                  View More
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="no-products">No products found</p>
        )}
      </div>
    </div>
  );
};

export default Products;
