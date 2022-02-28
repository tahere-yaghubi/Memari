import React from "react";
import { HAMIAN } from "../../../constants";

import "./Hamian.css";

const Hamian = () => {
  return (
    <div className="hamian">
      <div className="container">
        {" "}
        <h1>حامیان ما</h1>
        <div className="list">
          {HAMIAN.items.map(({ src, id }) => (
            <div className="item" key={id}>
              <img src={src} alt={src} />
            </div>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Hamian;
