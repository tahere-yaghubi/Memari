import React, { forwardRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";
import arrow_left from "../../../assets/media/arrow-left.svg";
import arrow_right from "../../../assets/media/arrow-right.svg";

import "./Carousel.css";

const Carousel = forwardRef(({ children, responsive, settings }, ref) => {
  console.log(settings, "settings");
  // const nextRef = useRef(null);
  // const prevRef = useRef(null);
  const NextArrow = () => {
    return (
      <button className="next">
        <img src={arrow_left} alt="arrow_left" />
      </button>
    );
  };

  const PreviousArrow = ({ data }) => {
    return (
      <button className="previous">
        <img src={arrow_right} alt="arrow_right" />
      </button>
    );
  };

  return (
    <div className="carousel-wrapper">
      <div className="carousel">
        <Slider settings={settings}>{children}</Slider>
      </div>
      <div className="arrows">
        <NextArrow />
        <PreviousArrow />
      </div>
    </div>
  );
});
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
