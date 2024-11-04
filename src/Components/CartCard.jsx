import React from 'react';

function CartCard({ item, removeFromCart, updateCartQuantity }) {
  const handleQuantityChange = (increment) => {
    const newQuantity = item.quantity + increment;
    if (newQuantity > 0) {
      updateCartQuantity(item.id, newQuantity);
    } else {
      removeFromCart(item.id); // Removing item if quantity goes to 0
    }
  };

  return (
    <div className="cart-card">
      <p className="cart-item-name">{item.productName}</p>
      <p className="cart-item-price">Price: ${Number(item.price.replace('$', '')).toFixed(2)}</p>
      <p className="cart-item-total">Total: ${(item.quantity * Number(item.price.replace('$', ''))).toFixed(2)}</p>
      
      <div className="cart-quantity-controls">
        <button 
          className="cart-quantity-btn" 
          onClick={() => handleQuantityChange(-1)}
        >
          -
        </button>
        <span className="cart-item-quantity">{item.quantity}</span>
        <button 
          className="cart-quantity-btn" 
          onClick={() => handleQuantityChange(1)}
        >
          +
        </button>
      </div>
      
      <button 
        className="remove-btn" 
        onClick={() => removeFromCart(item.id)}
      >
        Remove
      </button>
    </div>
  );
}

export default CartCard;
