import React from "react";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/M7yL7HD/Banner-1-2.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3 className="text-dark">First slide label</h3>
            <p className="text-dark">
            A tour is an organized trip that people such as musicians, politicians, or theatre companies go on to several different places, stopping to meet people or perform.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/W6yccfH/Banner-2.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3 className="text-dark">Second slide label</h3>
            <p className="text-dark">
            A journey in which a person or group visits several different places in order to play or perform. on tour
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/QYVKws0/Banner-3.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3 className="text-dark">Third slide label</h3>
            <p className="text-dark">
            It feels good to be lost in the right direction.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Banner;
