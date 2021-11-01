import React from "react";
import { Link } from "react-router-dom";
import "./TourSpot.css";

const TourSpot = ({ spot }) => {
  const { _id, name, description, img } = spot;
  return (
    <div className="spot pb-5">
      <img src={img} alt="" />
      <h3>{name}</h3>
      <p>{description}</p>
      <Link to={`/booking/${_id}`}>
        <button className="btn btn-info">Booking</button>
      </Link>
    </div>
  );
};

export default TourSpot;
