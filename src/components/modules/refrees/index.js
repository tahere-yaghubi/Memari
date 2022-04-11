import React from "react";

import { REFREES } from "../../../constants";
import { Button, Carousel } from "../../elements";
import RefreeCard from "../../elements/refreeCard/RefreeCard";

import "./Refrees.css";

const Refrees = () => {
  return (
    <div className="refrees">
      <div className="container">
        <h1>داوران جشنواره</h1>
        <div className="wrapper">
          <Carousel
            customClass="refrees-carousel"
            id="refree"
            settings={{
              infinite: false,
              speed: 500,
              arrows: true,
              slidesToShow: 5,
              slidesToScroll: 1,
              initialSlide: 0,

              responsive: [
                {
                  breakpoint: 1300,
                  settings: {
                    slidesToShow: 4,
                  },
                },
                {
                  breakpoint: 1120,
                  settings: {
                    slidesToShow: 3,
                  },
                },

                {
                  breakpoint: 996,
                  settings: {
                    slidesToShow: 2,
                  },
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                  },
                },
                {
                  breakpoint: 320,
                  settings: {
                    slidesToShow: 1,
                    autoScroll: true,
                    arrows: true,
                    autoplay: true,
                    autoplaySpeed: 500,
                  },
                },
              ],
            }}
          >
            {REFREES.items.map((item, idx) => (
              <RefreeCard index={idx} {...item} key={item.id} />
            ))}
          </Carousel>
        </div>
        <Button hasBg hasIcon border value="مشاهده تمام داوران" />
      </div>
    </div>
  );
};

export default Refrees;
