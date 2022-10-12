import React, { useEffect, useState } from "react";
//import { products } from "../data";
import ProductHome from "./ProductHome";
import "../styles/productsHome.css";
import axios from "axios";

const ProductsHome = () => {

  const [foods, setFoods] = useState([])

  useEffect(()=> {
    const fetchData = async () => {
      const result = await axios.get('/api/foods');
      setFoods(result.data);
    }
    fetchData();
    
  }, []);



  return (
    <div className="hps-container">
      <h2>Latest Food Items</h2>
    <div className="hps-row">
    {foods.map((item) => (
        <ProductHome item={item} isCart={false} key={item._id} />
      ))}
    </div>
    </div>
  );
};

export default ProductsHome;
