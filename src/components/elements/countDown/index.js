import React from "react";
import { useTimer } from "react-timer-hook";

import "./CountDown.css";

function Timer({ expiryTimestamp }) {
  const { seconds, minutes, hours } = useTimer({
    expiryTimestamp,

    onExpire: () => console.warn("onExpire called"),
  });
  const hourTime = hours < 10 ? `0${hours}` : `${hours}`;
  const secondTime = seconds < 10 ? `0${seconds}` : `${seconds}`;
  const minuteTime = minutes < 10 ? `0${minutes}` : `${minutes}`;

  return (
    <>
      <div className="time">
        <span>{secondTime}</span> :<span>{minuteTime}</span>:
        <span>{hourTime}</span>
      </div>
    </>
  );
}

export default function CountDown() {
  //67090009
  const time = new Date();
  time.setSeconds(time.getSeconds() + 67090009);
  return (
    <div className="count-down">
      <Timer expiryTimestamp={time} />
      <span className="title"> مانده تا شروع جشنواره معماری</span>
      <div className="text">
        <span> 35 روز</span>
        <small>مانده تا شروع جشنواره معماری</small>
      </div>
    </div>
  );
}
