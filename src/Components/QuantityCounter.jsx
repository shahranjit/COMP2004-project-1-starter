import React from 'react';

function QuantityCounter({ quantity, setQuantity }) {
  return (
    <div className="qty-counter">
      <button onClick={() => setQuantity(Math.max(0, quantity - 1))}>-</button>
      <p>{quantity}</p>
      <button onClick={() => setQuantity(quantity + 1)}>+</button>
    </div>
  );
}

export default QuantityCounter;
