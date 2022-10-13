import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/outletScreenCard.css";
import axios from "axios";
import ProductHome from "../components/ProductHome";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { Store } from "../Store";
import MapContainer from "../components/MapContainer";
import Banners from "../components/Banners";
import { faArrowRightArrowLeft, faCheck, faPhoneVolume, faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const OutletScreenCard = ({ foodoutlet }) => {
  const [selectedImage, setSelectedImage] = useState("");
  const [outletFoods, setOutletFood] = useState([]);
  const { state, dispatch: ctxDispatch } = useContext(Store);
  const { wish } = state;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`/api/foods/getFoodByOutletId/${foodoutlet._id}`);
      setOutletFood(result.data);
    };
    fetchData();
  }, [foodoutlet]);

  const addToWishHandler = () => {
    const existItem = wish.wishItems.find((x) => x._id === foodoutlet._id);
    const quantity = existItem ? existItem.quantity : 1;

    if (existItem) {
      window.alert("Outlet is already in whistList");
      return;
    } else {
      const addToWhistList = () => {
        const fetchData = async () => {
          const data = await axios.post("/api/wishList/addItems", {
            userId: "001112244",
            outLetId: foodoutlet._id,
          });
        };
        fetchData();
      };
      // addToWhistList();
    }
    ctxDispatch({
      type: "WISH_ADD_ITEM",
      payload: { ...foodoutlet, quantity },
    });
  };

  return (
    <>
      <Navbar />
      <div className="screen-container">
        <div className="screen-row">
          <div className="screen-col">
            <div className="screen-images">
              <div className="screen-top">
                <TransformWrapper>
                  <TransformComponent>
                    <img src={selectedImage || foodoutlet.imgUrl} alt={foodoutlet.name} />
                  </TransformComponent>
                </TransformWrapper>
              </div>
              <div className="screen-bottom">
                <img
                  src={foodoutlet.imgUrl}
                  onClick={() => setSelectedImage(`${foodoutlet.imgUrl}`)}
                  alt={foodoutlet.imgUrl}
                />
                {/* <img src={outletFoods.imgUrl} onClick={() => setSelectedImage(`${outletFoods.imgUrl}`)} alt={outletFoods.imgUrl} />
                <img src={outletFoods.imgUrl} onClick={() => setSelectedImage(`${outletFoods.imgUrl}`)} alt={outletFoods.imgUrl} /> */}
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

              <div className="b-row">
                <div className="b-col">
                  <FontAwesomeIcon icon={faCheck} />
                  <span> Fresh Food</span>
                </div>
                <div className="b-col">
                  <FontAwesomeIcon icon={faTruckFast} />
                  <span> Free Shipping</span>
                </div>
              </div>
              <div className="b-row">
                <div className="b-col">
                  <FontAwesomeIcon icon={faArrowRightArrowLeft} />
                  <span> Return</span>
                </div>
                <div className="b-col">
                  <FontAwesomeIcon icon={faPhoneVolume} />
                  <span> Support</span>
                </div>
              </div>
            </div>
            <div className="third-div div">
              <p className="desc">{foodoutlet.description}</p>
            </div>
            <div className="fourth-div div">
              <button className="cart">Add to Cart</button>
              <button
                onClick={() => {
                  addToWishHandler();
                }}
                className="wish"
              >
                Add to Wish
              </button>
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
      <MapContainer />
      <Footer />
    </>
  );
};

export default OutletScreenCard;
