import React, { forwardRef, useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";
import arrow_left from "../../../assets/media/arrow-left.svg";
import arrow_right from "../../../assets/media/arrow-right.svg";
import classNames from "classnames";
import "./Carousel.css";

const NextArrow = ({ onClick }) => {
  return (
    <button className="next" onClick={onClick}>
      <img src={arrow_left} alt="arrow_left" />
      {/* <ion-icon name="arrow-back-outline"></ion-icon> */}
    </button>
  );
};
const PreviousArrow = ({ onClick }) => {
  return (
    <button className="previous" onClick={onClick}>
      <img src={arrow_right} alt="arrow_right" />
      {/* <ion-icon name="arrow-forward-outline"></ion-icon> */}
    </button>
  );
};
const Carousel = forwardRef(({ children, id, settings, customClass }, ref) => {
  const slider = useRef(null);
  const [cls, setCls] = useState("");

  function fadeLastItem(oldIndex, index) {
    const windowSize = window.innerWidth;
    const targetSetting = settings.responsive
      .filter((item) => item.breakpoint > windowSize)
      .filter((item) => item.settings.slidesToShow >= 3)
      .sort((a, b) => a.breakpoint - b.breakpoint)[0] || {
      settings: { slidesToShow: 5 },
    };
    const fadeItemIndex = index + targetSetting.settings.slidesToShow;

    document
      .querySelectorAll(`#${id} .slick-slide .refreeCard`)
      .forEach((item) => {
        item.classList.remove("-fade");
      });

    const fadeItemTarget = document.querySelector(
      `#${id} .slick-slide:nth-child(${fadeItemIndex}) .refreeCard`
    );

    if (fadeItemTarget) fadeItemTarget.classList.add("-fade");
  }

  useEffect(() => {
    fadeLastItem(0, 0);
  });

  return (
    <div className="carousel-wrapper" id={id}>
      <div className={classNames("carousel", cls, customClass)}>
        <Slider
          ref={slider}
          {...settings}
          beforeChange={fadeLastItem}
          infinite={false}
        >
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
  id: PropTypes.string.isRequired,
};
export default Carousel;
