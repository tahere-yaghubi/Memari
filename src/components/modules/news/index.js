import React, { useRef } from "react";
import { NEWS } from "../../../constants";
import { Button, Carousel } from "../../elements";
import NewCard from "../../elements/newCard/NewCard";
import "./News.css";

const News = () => {
  const slider = useRef(null);

  return (
    <div className="news">
      <div className="container">
        <h1> آخرین اخبار جشنواره</h1>
        <div className="wrapper">
          <Carousel
            ref={slider}
            className="mainCarousel"
            id="refree"
            settings={{
              infinite: false,
              speed: 500,
              arrows: true,
              slidesToShow: 3,
              slidesToScroll: 1,
              initialSlide: 0,

              responsive: [
                {
                  breakpoint: 1300,
                  settings: {
                    slidesToShow: 2,
                  },
                },
                {
                  breakpoint: 1120,
                  settings: {
                    slidesToShow: 2,
                  },
                },

                {
                  breakpoint: 996,
                  settings: {
                    slidesToShow: 1,
                  },
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 1,
                  },
                },
              ],
            }}
          >
            {" "}
            {NEWS.items.map((item) => (
              <NewCard {...item} key={item.id} />
            ))}
          </Carousel>
        </div>

        <Button
          hasIcon
          hasBg
          border
          rotate
          theme="dark"
          value="مشاهده تمام اخبار"
        />
      </div>
    </div>
  );
};

export default News;
