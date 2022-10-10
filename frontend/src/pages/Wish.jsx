import React from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import WhistList from "../components/WhistList";

const Wish = () => {
  return (
    <div>
      <Navbar />
      <div className="o-row">
        <div className="o-col">
          <WhistList />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Wish;
