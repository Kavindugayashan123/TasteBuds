import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import OutletScreenCard from "./OutletScreenCard";
import { useState } from "react";

const OutletScreen = () => {
  const params = useParams();
  const { _id } = params;
  const [foodoutlet, setFoodoutlet] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`/api/outlets/${_id}`);
      setFoodoutlet(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {/* {food.map((item) => (
        <h1>Name : {item.name}</h1>
      ))} */}

      <OutletScreenCard foodoutlet={foodoutlet} />
    </div>
  );
};

export default OutletScreen;
