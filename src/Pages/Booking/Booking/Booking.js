import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";

const Booking = () => {
    const {user} = useAuth();
  const { spotId } = useParams();
  const [spot, setSpot] = useState({});

  useEffect(() => {
    fetch(`https://bloodcurdling-village-02642.herokuapp.com/spots/${spotId}`)
      .then((res) => res.json())
      .then((data) => setSpot(data));
  }, []);

  console.log(spot);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const service = spot;
    data.spots = service;
    fetch("https://bloodcurdling-village-02642.herokuapp.com/spots", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
          console.log(result);
        if (result.insertedId) {
          alert("Order process successfully");
          reset();
        }
      });
  };

  return (
    <div>
      <h2>Booking: {spotId}</h2>
      <img src={spot.img} alt="" />
      <h2>Details of: {spot.name}</h2>
      <p>Description: {spot.description}</p>
      <br />
      <div>------------</div>
      <div>
        <form
          className="placeOrder-form container  m-0 border border-success rounded  "
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            className="container-fluid "
            defaultValue={user.displayName}
            {...register("name")}
            required
          />

          <input
            className="container-fluid"
            defaultValue={user.email}
            {...register("email", { required: true })}
            required
          />
          {errors.email && (
            <span className="error">This field is required</span>
          )}
          <input
            className="container-fluid"
            placeholder="Address"
            defaultValue=""
            {...register("address")}
            required
          />
          <input
            className="container-fluid"
            placeholder="City"
            defaultValue=""
            {...register("city")}
            required
          />
          <input
            className="container-fluid"
            placeholder="phone number"
            defaultValue=""
            {...register("phone")}
            required
          />

          <input
            className="container-fluid bg-success text-white mb-2"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default Booking;
