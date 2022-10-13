import React, { useState } from "react";
import { faShoppingBag, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "../styles/foodOutlet.css";
import axios from "axios";

const WhistListOutlet = ({ item }) => {
  let userId = "001112244";
  const [Foodoutlet, setFoodoutlet] = useState(item);

  const removeOutletHandler = () => {
    //const removeOutlet = () => {
    const fetchData = async () => {
      const data = await axios.delete(`api/wishList/deleteFood/${userId}/${item._id}`);
      if (data) {
        window.location.reload(false);
      }
      //  };
    };
    fetchData();
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
