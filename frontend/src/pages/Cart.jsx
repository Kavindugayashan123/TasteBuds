import React, { useEffect, useState } from "react";
import ProductHome from "../components/ProductHome";
import Navbar from "../components/Navbar";
import { readCart } from "../services/cartService";

const Cart = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    setFoods(readCart());
  }, []);

  return (
    <div>
      <Navbar />
      <div className="hps-container">
        <h2>Cart</h2>
        <div className="hps-row">
          {foods.map((item, index) => (
            <ProductHome item={item} isCart={true} key={index} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
