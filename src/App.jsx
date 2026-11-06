import React, { useState } from "react";
import "./App.css";

import Header from "./assets/components/Header";
import Banner from "./assets/components/Banner";
import ProductCard from "./assets/components/ProductCard";
import products from "./assets/components/data/productData";

const App = () => {
  const [cartCount, setCartCount] = useState(0);

  return (
    <>
      <Header cartCount={cartCount} />
      <Banner />
      <h2 className="product-heading">Our Products</h2>
      <section className="products">{products.map((product) => (<ProductCard key={product.id} product={product}  cartCount={cartCount} setCardCount={setCartCount}/>))}
      </section>
    </>
  );
};

export default App;