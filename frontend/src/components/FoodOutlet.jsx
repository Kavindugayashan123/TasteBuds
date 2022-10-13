import { faHeart, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "../styles/foodOutlet.css";
import axios from "axios";
import { useContext } from "react";
import { Store } from "../Store";

const FoodOutlet = ({ item }) => {
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { wish } = state;

  const addToWishHandler = () => {
    const existItem = wish.wishItems.find((x) => x._id === item._id);
    const quantity = existItem ? existItem.quantity : 1;

    if (existItem) {
      window.alert("Outlet is already in whistList");
      return;
    } else {
      const addToWhistList = () => {
        const fetchData = async () => {
          const data = await axios.post("/api/wishList/addItems", {
            userId: "001112244",
            outLetId: item._id,
          });
        };
        fetchData();
      };
      addToWhistList();
    }
    ctxDispatch({
      type: "WISH_ADD_ITEM",
      payload: { ...item, quantity },
    });
  };

  const ChangeColor = () => {
    // setwhistListCount(whistListCount + 1);
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
      <div className="card-footer">
        <button
          onClick={() => {
            addToWishHandler();
          }}
        >
          <FontAwesomeIcon icon={faHeart} />
        </button>
        <button>
          <FontAwesomeIcon icon={faShoppingBag} />
        </button>
      </div>
    </div>
  );
};

export default FoodOutlet;
