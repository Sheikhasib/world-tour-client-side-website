import React, { useEffect, useState } from "react";
import TourSpot from "../TourSpot/TourSpot";
import "./TourSpots.css";

const TourSpots = () => {
  const [spots, setSpots] = useState([]);
  useEffect(() => {
    fetch("https://bloodcurdling-village-02642.herokuapp.com/spots")
      .then((res) => res.json())
      .then((data) => setSpots(data));
  }, []);
  return (
    <div id="tourSpots">
      <h2 className="mt-5">Tour Spots</h2>
      <div className="tourSpot-container">
          {
              spots.map(spot => <TourSpot 
                key={spot._id}
                spot={spot}
            ></TourSpot>)
          }
      </div>
    </div>
  );
};

export default TourSpots;
