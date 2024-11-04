import React, { useState } from 'react';

function ProductCard({ product, addToCart }) {
  const [quantity, setQuantity] = useState(0);

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart({ ...product, quantity });
      setQuantity(0); // Resetting quantity after adding to cart
    }
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.productName} className="product-image" />
      <h3 className="product-name">{product.productName}</h3>
      <p className="product-brand">{product.brand}</p>
      <p className="product-quantity">Quantity: {product.quantity}</p>
      <p className="product-price">Price: ${Number(product.price.replace('$', '')).toFixed(2)}</p>
      
      <div className="quantity-controls">
        <button 
          className="quantity-btn" 
          onClick={() => setQuantity(Math.max(0, quantity - 1))}
        >
          -
        </button>
        <span className="quantity">{quantity}</span>
        <button 
          className="quantity-btn" 
          onClick={() => setQuantity(quantity + 1)}
        >
          +
        </button>
      </div>
      
      <button 
        className="add-to-cart-btn" 
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;
