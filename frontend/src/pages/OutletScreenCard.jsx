import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/outletScreenCard.css";
import axios from "axios";
import ProductHome from "../components/ProductHome";
import {
  Button,
  Card,
  Typography,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
} from "@material-ui/core";
import { Store } from "../Store";

const OutletScreenCard = ({ foodoutlet }) => {
  const [selectedImage, setSelectedImage] = useState("");
  const [outletFoods, setOutletFood] = useState([]);
  const { state, dispatch: ctxDispatch } = useContext(Store);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `/api/foods/getFoodByOutletId/${foodoutlet._id}`
      );
      setOutletFood(result.data);
    };
    fetchData();
  }, [foodoutlet]);
  console.log("Food Items SS :", foodoutlet._id);
  console.log("Food Items =======>>", outletFoods);

  return (
    <>
      <Navbar />
      <div className="screen-container">
        <div className="screen-row">
          <div className="screen-col">
            <div className="screen-images">
              <div className="screen-top">
                <img
                  src={selectedImage || foodoutlet.imgUrl}
                  alt={foodoutlet.name}
                />
              </div>
              <div className="screen-bottom">
                <img
                  src={foodoutlet.imgUrl}
                  onClick={() => setSelectedImage(`${foodoutlet.imgUrl}`)}
                  alt={foodoutlet.imgUrl}
                />
         
              </div>
            </div>
          </div>
          <div className="screen-col">
            <div className="first-div div">
              <h2 className="title">{foodoutlet.name}</h2>
              <p className="category">{foodoutlet.address}</p>
            </div>
            <div className="second-div div">
              <span className="price">Rate: {foodoutlet.rate}</span>
              <div className="quantity">Quantity: 1</div>
            </div>
            <div className="third-div div">
              <p className="desc">{foodoutlet.description}</p>
            </div>
            <div className="fourth-div div">
              <button className="cart">Add to Cart</button>
              <button className="wish">Add to Wish</button>
            </div>
          </div>
        </div>
      </div>
      <div className="screen-col">
        <div className="outlet-card">
          {outletFoods.slice(0, 8).map((item) => (
            <ProductHome item={item} key={item._id} />
          ))}
        </div>
      </div>


      <Footer />
    </>
  );
};

export default OutletScreenCard;
