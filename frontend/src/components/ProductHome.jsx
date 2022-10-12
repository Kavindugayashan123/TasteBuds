import {
  faBagShopping,
  faEye,
  faHeart,
  faTrash,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useContext } from "react";
import { Store } from "../Store";
import "../styles/productHome.css";
import Quick from "./Quick";
import { addItemToCart, deleteItemFromCart } from "../services/cartService";


const ProductHome = ({ item, index, isCart }) => {
  const [open, setOpen] = useState(false);

  const { state, dispatch: ctxDispatch } = useContext(Store);

  // const addToWishHandler = () => {
  //   ctxDispatch({
  //     type: "WISH_ADD_ITEM",
  //     payload: { ...item, quantity: 1 },
  //   });
  // };
  const addToCartHandler = () => {
    addItemToCart(item);
  };

  return (
    <div className="hp-card">
      <div className="card-header">
        <img src={item.imgUrl} alt={item.name} />
      </div>
      <div className="card-body">
        <h3 className="title">{item.name}</h3>
        <span>Rs.{item.price}</span>
      </div>
      {!isCart && (
        <div className="card-footer">
          <button onClick={() => setOpen(true)}>
            <FontAwesomeIcon icon={faEye} />
          </button>
          <button>
            <FontAwesomeIcon icon={faHeart} />
          </button>
          <button onClick={addToCartHandler}>
            <FontAwesomeIcon icon={faShoppingBag} />
          </button>
        </div>
      )}
      {isCart && (
        <div className="card-footer">
          <button onClick={() => deleteItemFromCart(index)} >
            <FontAwesomeIcon icon={faTrash} />
          </button>
        </div>
      )}
      {open && <Quick item={item} />}
    </div>
  );
};

export default ProductHome;
