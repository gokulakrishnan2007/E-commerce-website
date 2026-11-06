import React from "react";

const Header = ({ cartCount }) => {
  return (
    <header className="header">
      <h2 className="logo">WatchStore</h2>

      <nav>
        <a href="">Home</a>
        <a href="">Products</a>
        <a href="">About</a>
      </nav>

      <div className="cart">
        🛒 Cart ({cartCount})
      </div>
    </header>
  );
};

export default Header;