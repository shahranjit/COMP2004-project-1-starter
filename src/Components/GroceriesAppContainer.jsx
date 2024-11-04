import React, { useState } from 'react';
import ProductsContainer from './ProductsContainer';
import CartContainer from './CartContainer';
import NavBar from './NavBar';
import productsData from '../data/products';

function GroceriesAppContainer() {
  const [cart, setCart] = useState([]);

  // Function for adding a product to the cart
  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      // Updatinf quantity if product already exists in cart
      setCart(cart.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + product.quantity } : item
      ));
    } else {
      // Adding new product to cart with initial quantity
      setCart([...cart, { ...product, quantity: product.quantity }]);
    }
  };

  // Function for updating quantity directly in the cart
  const updateCartQuantity = (id, quantity) => {
    setCart(cart.map(item => item.id === id ? { ...item, quantity } : item));
  };

  // Function for removing an item from the cart
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Function for clearing all items from the cart
  const clearCart = () => {
    setCart([]);
  };

  return (
    <div>
      <NavBar cartItemCount={cart.reduce((total, item) => total + item.quantity, 0)} />
      <div className="app-container">
        <ProductsContainer products={productsData} addToCart={addToCart} />
        <CartContainer 
          cart={cart} 
          updateCartQuantity={updateCartQuantity} 
          removeFromCart={removeFromCart} 
          clearCart={clearCart} 
        />
      </div>
    </div>
  );
}

export default GroceriesAppContainer;
