import React from 'react';
import './ProductListing.css';

function ProductListing({ products }) {
  return (
    <div className="product-listing">
      {products.map(product => (
        <div key={product.id} className="product-item">
          <h3>{product.name}</h3>
          <p>Category: {product.category}</p>
          <p>Condition: {product.condition}</p>
          <p>Price: {product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductListing;
