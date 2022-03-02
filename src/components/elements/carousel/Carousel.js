import React, { forwardRef, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";
import arrow_left from "../../../assets/media/arrow-left.svg";
import arrow_right from "../../../assets/media/arrow-right.svg";

import "./Carousel.css";

const NextArrow = ({ onClick }) => {
  return (
    <button className="next" onClick={onClick}>
      <img src={arrow_left} alt="arrow_left" />
    </button>
  );
};
const PreviousArrow = ({ onClick }) => {
  return (
    <button className="previous" onClick={onClick}>
      <img src={arrow_right} alt="arrow_right" />
    </button>
  );
};
const Carousel = forwardRef(({ children, responsive, settings }, ref) => {
  console.log(settings, "settings");
  const slider = useRef(null);

  return (
    <div className="carousel-wrapper">
      <div className="carousel">
        <Slider ref={slider} {...settings}>
          {children}
        </Slider>
      </div>
      <div className="arrows">
        <NextArrow onClick={() => slider.current.slickNext()} />
        <PreviousArrow onClick={() => slider.current.slickPrev()} />
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
