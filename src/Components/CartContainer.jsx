import React from 'react';
import CartCard from './CartCard';
import '../App.css';

function CartContainer({ cart, removeFromCart, updateCartQuantity, clearCart }) {
  const total = cart.reduce((sum, item) => sum + item.quantity * Number(item.price.replace('$', '')), 0).toFixed(2);

  return (
    <div className="cart-container">
      <h2>Cart items: {cart.length}</h2>
      {cart.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <div>
          {cart.map(item => (
            <CartCard 
              key={item.id} 
              item={item} 
              removeFromCart={removeFromCart} 
              updateCartQuantity={updateCartQuantity} 
            />
          ))}
          <h3>Total: ${total}</h3>
          <button className="empty-cart-btn" onClick={clearCart}>Empty Cart</button>
          <button className="checkout-btn">Checkout: ${total}</button>
        </div>
      )}
    </div>
  );
}

export default CartContainer;