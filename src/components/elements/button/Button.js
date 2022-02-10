import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import className from "classnames";
import "./Button.css";

const Button = ({
  children,
  onClick,
  btnColor = "teal",
  labelColor,
  disabled,
  type,
  style,

  value,
  border,
  hasBg,
  hasIcon,
  width,
  icon,
  className,
  rotate,
}) => {
  const button = classNames("button", className, {
    "--hasBg": hasBg,
    "--hasBorder": border,
  });
  return (
    <button className={button} style={{ width: width }}>
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
};

Button.propTypes = {
  bg: PropTypes.string,
  border: PropTypes.bool,
  hasIcon: PropTypes.bool,
  width: PropTypes.string,
  rotate: PropTypes.bool,
};
export default Button;
