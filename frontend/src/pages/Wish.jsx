import React, { useContext } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import WhistList from "../components/WhistList";
import { Store } from "../Store";

const Wish = () => {
  const { state, dispatch: ctxDispatch } = useContext(Store);

  const {
    wish: { wishItems },
  } = state;

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
