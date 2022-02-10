import classNames from "classnames";
import React, { forwardRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";

import "./Carousel.css";

const Carousel = forwardRef(
  ({ slideToShow, speed, children, slideToScroll, className }, ref) => {
    const NesxtArrow = () => {
      return (
        <button className="next">
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </button>
      );
    };

    const PriviusArrow = () => {
      return (
        <button className="privius">
          <ion-icon name="arrow-back-outline"></ion-icon>
        </button>
      );
    };

    const settings = {
      dots: false,
      infinite: true,
      nextArrow: <NesxtArrow />,
      prevArrow: <PriviusArrow />,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            dots: true,
          },
        },
        {
          breakpoint: 400,
          slidesToShow: 1,
          settings: "unslick",
          nextArrow: false,
          prevArrow: false,
          // destroys slick
        },
      ],
      speed,
      arrows: true,
    };
    const SliderClassName = classNames("carousel", className);

    return (
      <div className="carousel-wrapper">
        <Slider rtl={true} ref={ref} className={SliderClassName} {...settings}>
          {children}
        </Slider>
        <div className="arrows"></div>
      </div>
    );
  }
);
Carousel.defaultProps = {
  speed: 500,
  slideToScroll: 1,
  className: "",
};

Carousel.propTypes = {
  slideToShow: PropTypes.number,
  speed: PropTypes.number,
  slideToScroll: PropTypes.number,
  className: PropTypes.string,
};
export default Carousel;
