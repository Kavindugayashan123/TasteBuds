import {
  faBagShopping,
  faEye,
  faHeart,
  faShoppingBag,    
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "../styles/productHome.css";
import Quick from "./Quick";

const ProductHome = ({ item }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="hp-card">
      <div className="card-header">
        <img src={item.imgUrl} alt={item.name} />
      </div>
      <div className="card-body">
        <h3 className="title">{item.name}</h3>
        <span>Rs.{item.price}</span>
      </div>
      <div className="card-footer">
        <button onClick={() => setOpen(true)}>
          <FontAwesomeIcon icon={faEye} />
        </button>
        <button>
          <FontAwesomeIcon icon={faHeart} />
        </button>
        <button>
          <FontAwesomeIcon icon={faShoppingBag} />
        </button>
      </div>
      {open && <Quick item={item} />}
    </div>
  );
};

export default ProductHome;
