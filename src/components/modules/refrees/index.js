import React from "react";
import Slider from "react-slick";
import { REFREES } from "../../../constants";

import { Button } from "../../elements";
import RefreeCard from "./refreeCard/RefreeCard";
import arrow_left from "../../../assets/media/arrow-left.svg";
import arrow_right from "../../../assets/media/arrow-right.svg";

import "./Refrees.css";

const Refrees = () => {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
        
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
        
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 360,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="refrees">
      <div className="container">
        <h1>داوران جشنواره</h1>
        <div className="wrapper">
          <Slider {...settings}>
            {REFREES.items.map((item) => (
              <RefreeCard {...item} key={item.id} />
            ))}
          </Slider>

          <div className="icons">
            <img src={arrow_left} alt="arrow_left" />
            <img src={arrow_right} alt="arrow_right" />
          </div>
        </div>
        <Button
          hasBg
          hasIcon
          value="مشاهده تمام داوران"
          className="refrees__btn"
        />
      </div>
    </div>
  );
};

export default Refrees;
