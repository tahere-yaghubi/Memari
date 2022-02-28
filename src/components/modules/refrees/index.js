import React from "react";

import { REFREES } from "../../../constants";
import { Button, Carousel } from "../../elements";
import RefreeCard from "../../elements/refreeCard/RefreeCard";

import "./Refrees.css";

const Refrees = ({}) => {
  return (
    <div className="refrees">
      <div className="container">
        <h1>داوران جشنواره</h1>
        <div className="wrapper">
          <Carousel
            settings={{
              infinite: false,
              speed: 500,
              arrows: true,
              slidesToShow: 5,
              slidesToScroll: 5,
              initialSlide: 0,

              responsive: [
                {
                  breakpoint: 1300,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                  },
                },
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                  },
                },
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
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
                  breakpoint: 400,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
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
            }}
          >
            {REFREES.items.map((item) => (
              <RefreeCard {...item} key={item.id} />
            ))}
          </Carousel>
        </div>
        <Button hasBg hasIcon value="مشاهده تمام داوران" />
      </div>
    </div>
  );
};

export default Refrees;
