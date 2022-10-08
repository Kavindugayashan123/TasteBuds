import React from "react";
import Navbar from "./Navbar";
import Slider from "./Slider";
import "../styles/banners.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowRightArrowLeft, faCheck, faPhoneVolume, faTruckFast } from "@fortawesome/free-solid-svg-icons";

const Banners = () => {
  return (
    <div className="b-container">
        <div className="b-row">
            <div className="b-col">
                <FontAwesomeIcon icon={faCheck}/>
                <span> Fresh Food</span>
            </div>
            <div className="b-col">
            <FontAwesomeIcon icon={faTruckFast}/>
                <span> Free Shipping</span>
            </div>
            <div className="b-col">
            <FontAwesomeIcon icon={faArrowRightArrowLeft}/>
                <span> Return</span>
            </div>
            <div className="b-col">
            <FontAwesomeIcon icon={faPhoneVolume}/>
                <span> Support</span>
            </div>
        </div>
    </div>
  );
};

export default Banners;
