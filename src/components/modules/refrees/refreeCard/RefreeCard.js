import React from "react";
import "./RefreeCard.css";

const RefreeCard = ({ src, title }) => {
  return (
    <div className="refreeCard">
      <div className="image">
        <img src={src} alt={title} />
      </div>
      <div className="refreeCard-info">
        <span>{title}</span>
        <span className="">
          <ion-icon name="arrow-back-outline" />
          <small>اطلاعات بیشتر </small>
        </span>
      </div>
    </div>
  );
};

export default RefreeCard;
