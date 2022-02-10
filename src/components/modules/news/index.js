import React, { useRef } from "react";
import { NEWS } from "../../../constants";
import { Button, Carousel } from "../../elements";
import NewCard from "./newCard/NewCard";
import "./News.css";

const News = () => {
  const slider = useRef(null);

  return (
    <div className="news">
      <div className="container">
        <h1> آخرین اخبار جشنواره</h1>
        <div className="slider">
          <Carousel
            ref={slider}
            slideToScroll={1}
            slideToShow={3}
            className="mainCarousel"
          >
            {NEWS.items.map((item) => (
              <NewCard {...item} key={item.id} />
            ))}
          </Carousel>
        </div>
        <Button hasIcon hasBg value="مشاهده تمام اخبار" className="newsBtn" />
      </div>
    </div>
  );
};

export default News;
