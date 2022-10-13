import React from "react";
import Navbar from "../components/Navbar";
import "../styles/outlet.css";
import Footer from "../components/Footer";
import FoodsOutlet from "../components/FoodsOutlet";
import MapContainer from "./Map";
import Map from "./Map";

const Outlet = () => {
  return (
    <div>
      <Navbar />
      <div className="o-row">
        <div className="o-col">
          <FoodsOutlet />
          <Map />
        </div>
      </div>
      <Footer  />
    </div>
  );
};

export default Outlet;
