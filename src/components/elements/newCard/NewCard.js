import React from "react";
import "./NewCard.css";

const NewCard = ({ src, title }) => {
  return (
    <div className="new-card">
      <div className="image">
        <img src={src} alt={title} />
      </div>
      <div className="new-card__info">
        <span>{title}</span>
        <span className="">
          <ion-icon name="arrow-back-outline" />
          <small>اطلاعات بیشتر </small>
        </span>
      </div>
    </div>
  );
};

export default NewCard;
