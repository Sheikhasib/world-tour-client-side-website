import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import './AddService.css';

const AddService = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
      console.log(data);
      axios.post('https://bloodcurdling-village-02642.herokuapp.com/spots', data)
      .then(res => {
          if(res.data.insertedId){
              alert('Added Successfully');
              reset();
          }
      })
    };

  return (
    <div className="add-service">
      <h2>Please Add a spot</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("name", { required: true, maxLength: 20 })} placeholder="Name" />
        <textarea {...register("Description")} placeholder="description" />
        <input {...register("img")} placeholder="Image url" />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddService;
