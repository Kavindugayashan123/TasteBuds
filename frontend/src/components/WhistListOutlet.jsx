import React from "react";
import { faHeart, faShoppingBag, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "../styles/foodOutlet.css";
import axios from "axios";

const WhistListOutlet = ({ item }) => {
  let userId = "001112244";

  const removeOutletHandler = () => {
    const removeOutlet = () => {
      const fetchData = async () => {
        const data = await axios.delete(`api/wishList/deleteFood/${userId}/${item._id}`);
      };
      fetchData();
    };
    removeOutlet();
  };
  return (
    <div className="fo-card">
      <div className="card-header">
        <Link to={`/outlet/${item._id}`}>
          <img src={item.imgUrl} alt={item.name} />
        </Link>
      </div>
      <div className="card-body">
        <h3 className="title">{item.name}</h3>
        <span>{item.address}</span>
      </div>
      <div className="wish-desc">
        <span className="wish-desc">{item.description}</span>
      </div>
      <div className="card-footer">
        <button
          className="Remove-Btn"
          onClick={() => {
            removeOutletHandler();
          }}
        >
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
        <button>
          <FontAwesomeIcon icon={faShoppingBag} />
        </button>
      </div>
    </div>
  );
};

export default WhistListOutlet;
