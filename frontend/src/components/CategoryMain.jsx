import React from "react";
import { category } from "../data";
import "../styles/categoryMain.css";

function CategoryMain() {
  return (
    <div className="c-container">
      <div className="c-row">
        {category.map((item) => (
          <div className="c-col" key={item._id}>
            <img src={item.image} alt="" />
            <div className="category-content">
              <p>{item.title}</p>
              <button className='c-btn' onClick={event =>  window.location.href='/outlet'}>Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryMain;
