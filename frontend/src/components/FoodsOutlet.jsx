import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { useState } from "react"
import { category } from "../data"
import '../styles/foodsOutlet.css'
import FoodOutlet from "./FoodOutlet";
import axios from "axios";
import ReactPaginate from 'react-paginate';

const FoodsOutlet = () => {
  
    var IsEnableFilter = false;
    const[food, setFood] = useState([]);
    const [data, setData] = useState(category); 

    const [pageNumber, setPageNumber] = useState(0);
    const outletPerPage = 4;
    const pageVisited = pageNumber * outletPerPage;
    const displayProducts = food.slice(pageVisited, pageVisited + outletPerPage).map((item) => (
        <FoodOutlet item={item} key={item._id} />
    ))
    
    const pageCount = Math.ceil(food.length / outletPerPage);
    const changePage = ({selected}) => {
        setPageNumber(selected);
    }    

    useEffect(() => {

        const fetchData = async () => {
            const result = await axios.get('/api/outlets');
            setFood(result.data);
        }
       fetchData();
    }, []);   
    
    const filterResult = (catItem , isFilter) => {
        const result = food.filter((curDate) => {
            if(curDate.type === catItem){
                return curDate.type === catItem;
              //  setFood(result);
            }
            else{
                const fetchData = async () => {
                     result = await axios.get('/api/foods');
                    setFood(result.data);
                }
               fetchData();
            }

        });
        if(isFilter == true ){
            setFood(result);
        }        
    }    

    const AllData = () => {
        const fetchData = async () => {
            const result = await axios.get('/api/outlets');
            setFood(result.data);
        }
       fetchData();
    }

    return (
        <div className="outlet-container">
            <div className="outlet-row">
                <div className="outlet-col">
                    <h2>Category</h2>
                    <button className="outlet-btn" onClick={() => {setData(category);  AllData();} }>All <FontAwesomeIcon icon={faChevronRight}/></button>
                    {category.map((item) => (
                        <button className="outlet-btn" onClick={() => filterResult(item.title ,  IsEnableFilter = true)}>{item.title} <FontAwesomeIcon icon={faChevronRight}/> </button>
                    ))}
                </div>
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
    )
}

export default FoodsOutlet;