import { faHeart, faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "../styles/foodOutlet.css";
import axios from "axios";

const FoodOutlet = ({ item }) => {

  const addToWhistList = () => {
    const fetchData = async () => {
      const data = await axios.post("/api/wishList/addItems", {
        userId: "11233324",
        outLetId: item._id,
      });
    };
    fetchData();
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
            addToWhistList();
            ChangeColor();
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
