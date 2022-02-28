import classNames from "classnames";
import React from "react";
import Button from "../../elements/button/Button";
import CountDown from "../../elements/countDown";
import Head from "../head/Head";
import "./Header.css";

const Header = ({ className }) => {
  

  return (
    <div className={classNames("header", className)}>
      <div className="container">
        {" "}
        <Head />
        <div className="counter">
          <div>
            <CountDown />
            <Button
              hasIcon
              hasBg
              rotate
              theme="dark"
              value=" در مورد جشنواره بیشتر بدانید"
              className="btn"
              onClick={() =>{

                const scrollElement = document.getElementById("about")
                scrollElement.scrollIntoView({ behavior: "smooth" })
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
