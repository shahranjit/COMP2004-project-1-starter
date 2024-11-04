import React from 'react';
import emptyCartIcon from '../assets/cart-empty.png'; 
import fullCartIcon from '../assets/cart-full.png';   

function NavBar({ cartItemCount }) {
  return (
    <nav className="navbar">
      <span>Hello, username</span>
      <h1>Groceries App 🍑</h1>
      <div className="cart-info">
        <span>Cart items: {cartItemCount}</span>
        <img 
          src={cartItemCount > 0 ? fullCartIcon : emptyCartIcon} 
          alt="Cart Icon" 
          className="cart-icon"
        />
      </div>
    </nav>
  );
}

export default NavBar;
