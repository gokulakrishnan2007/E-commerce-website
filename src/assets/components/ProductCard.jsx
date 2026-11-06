import React, { useState } from "react";

const ProductCard = ({ product, setCardCount, cartCount }) => {

  const [isClicked, setIsClicked] = useState(false);

  function addToCart() {
    setCardCount(cartCount + 1);
    setIsClicked(true);
  }

  function removeFromCart() {
    setCardCount(cartCount - 1);
    setIsClicked(false);
  }

  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="price">${product.price}</p>

      {isClicked ? ( <button className="btn remove" onClick={removeFromCart}>Remove from cart</button>):(<button className="btn" onClick={addToCart}> Add to cart</button> )}
    </div>
  );
};

export default ProductCard;