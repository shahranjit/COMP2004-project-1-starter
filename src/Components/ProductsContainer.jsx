import React from 'react';
import ProductCard from './ProductCard';
import '../App.css';

function ProductsContainer({ products, addToCart }) {
  return (
    <div className="products-container">
      {products.map(product => (
        <ProductCard 
          key={product.id} 
          product={product} 
          addToCart={addToCart} 
        />
      ))}
    </div>
  );
}

export default ProductsContainer;
