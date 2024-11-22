import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header = () => {
  const { cart } = useCart();
  const totalItems = cart.reduce((total, product) => total + product.quantity, 0);

  return (
    <header>
      <h1>Plant Store</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">Shop</Link>
        <Link to="/cart">
          <span>Cart ({totalItems})</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
