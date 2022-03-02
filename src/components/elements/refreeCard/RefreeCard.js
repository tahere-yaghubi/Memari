import React from "react";
import "./RefreeCard.css";

const RefreeCard = ({ src, title, index }) => {
  return (
    <div className={`refreeCard ${index % 2 === 0 ? "-even" : "-odd"}`}>
      <div>
        <div className="image">
          <img src={src} alt={title} />
        </div>
        <div className="refreeCard-info">
          <span>{title}</span>
          <span className="more-info">
            <ion-icon name="arrow-back-outline" />
            <small> اطلاعات بیشتر</small>
          </span>
        </div>
      </div>
    </div>
  );
};

export default RefreeCard;
