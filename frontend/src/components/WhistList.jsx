import React from "react";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useState } from "react";
import { category } from "../data";
import "../styles/foodsOutlet.css";
import FoodOutlet from "./FoodOutlet";
import axios from "axios";
import ReactPaginate from "react-paginate";

const WhistList = () => {
  var IsEnableFilter = false;
  const [whistList, setwhistList] = useState([]);
  const [data, setData] = useState(category);

  const [pageNumber, setPageNumber] = useState(0);
  const outletPerPage = 4;
  const pageVisited = pageNumber * outletPerPage;
  const displayProducts = whistList
    .slice(pageVisited, pageVisited + outletPerPage)
    .map((item) => <FoodOutlet item={item} key={item._id} />);
  const pageCount = Math.ceil(whistList.length / outletPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  let userID = "11233324";

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`api/wishList/${userID}`);
      setwhistList(result.data);
    };
    fetchData();
  }, []);

  return (
    <div className="outlet-container">
      <div className="outlet-row">
        <div className="outlet-col">
          <div className="outlet-foods">
            {/* {food.map((item) => (
                            <FoodOutlet item={item} key={item._id} />
                        ))} */}
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
