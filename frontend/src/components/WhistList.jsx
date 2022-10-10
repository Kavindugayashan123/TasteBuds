import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../styles/foodsOutlet.css";
import axios from "axios";
import ReactPaginate from "react-paginate";
import WhistListOutlet from "./WhistListOutlet";
import { Store } from "../Store";

const WhistList = () => {
  const [whistList, setwhistList] = useState([]);
  //const [data, setData] = useState(category);

  const [pageNumber, setPageNumber] = useState(0);
  const outletPerPage = 4;
  const pageVisited = pageNumber * outletPerPage;
  const displayProducts = whistList
    .slice(pageVisited, pageVisited + outletPerPage)
    .map((item) => <WhistListOutlet item={item} key={item._id} />);
  const pageCount = Math.ceil(whistList.length / outletPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  let userID = "001112244";

  const { state, dispatch: ctxDispatch } = useContext(Store);

  const {
    wish: { wishItems },
  } = state;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`api/wishList/${userID}`);
      setwhistList(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="outlet-container">
      <h2>Your Whist List...</h2>
      <div className="outlet-row">
        <div className="outlet-col">
          <div className="outlet-foods">
            {/* {wishItems.length === 0 ? (
              <h3 className="info">Your Wish List is Empty.</h3>
            ) : (
              { displayProducts }
            )} */}
            {displayProducts}
          </div>
          <div className="outlet-pagination">
            <ReactPaginate
              previousLabel={"<<"}
              nextLabel={">>"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationBttns"}
              previousLinkClassName={"previousBttn"}
              nextLinkClassName={"nextBttn"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhistList;
