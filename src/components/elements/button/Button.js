import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import className from "classnames";
import "./Button.css";

const Button = ({
  onClick,
  btnColor = "teal",
  value,
  border,
  hasBg,
  theme,
  hasIcon,
  width,
  icon,
  className,
  rotate,
  iconName,

  renderItem = () => {},
}) => {
  const button = classNames("button", className, {
    "--hasBg": hasBg,
    "--hasBorder": border,
    [`__theme_${theme}`]: theme,
  });
  return (
    <button className={button} style={{ width: width }} onClick={onClick}>
      <span>{value}</span>

      {hasIcon &&
        (rotate ? (
          <ion-icon name="arrow-down-outline"></ion-icon>
        ) : (
          <ion-icon name="arrow-back-outline"></ion-icon>
        ))}
    </button>
  );
};

Button.defaultProps = {
  border: false,
  hasBg: false,
  hasIcon: false,
  rotate: false,
  theme: "dark",
  iconBg: "dark",
};

Button.propTypes = {
  bg: PropTypes.string,
  border: PropTypes.bool,
  hasIcon: PropTypes.bool,
  width: PropTypes.string,
  rotate: PropTypes.bool,
  theme: PropTypes.oneOf(["guest , dark"]),
  iconBg: PropTypes.oneOf(["light , dark"]),
};
export default Button;
