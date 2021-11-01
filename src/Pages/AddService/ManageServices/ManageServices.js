import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const ManageServices = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("https://bloodcurdling-village-02642.herokuapp.com/spots")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  const handleDelete = (id) => {
    const url = `https://bloodcurdling-village-02642.herokuapp.com/spots/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          alert("deleted");
          const remaining = services.filter((service) => service._id !== id);
          setServices(remaining);
        }
      });
  };
  return (
    <div>
      <h2>Manage Spots</h2>
      {services.map((service) => (
        <div key={service._id}>
          <h3>{service.name}</h3>
          <button onClick={() => handleDelete(service._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ManageServices;
