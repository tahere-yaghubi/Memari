import React from "react";
import "./NewCard.css";

const NewCard = ({ src, title, des }) => {
  return (
    <div className="new-card">
      <div className="image">
        <img src={src} alt={title} />
      </div>
      <div className="new-card__info">
        <span className="title">{title}</span>
        <small className="des">{des}</small>
        <span className="more">
          <ion-icon name="arrow-back-outline" />
          <span className="more-info"> مشاهده خبر </span>
        </span>
      </div>
    </div>
  );
};

export default NewCard;
