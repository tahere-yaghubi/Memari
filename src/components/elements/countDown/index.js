import React from "react";
import { useTimer } from "react-timer-hook";

import "./CountDown.css";

function Timer({ expiryTimestamp }) {
  const { seconds, minutes, hours, millisecond } = useTimer({
    expiryTimestamp,

    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <>
      <div className="time">
        <span>{seconds}</span> :<span>{minutes}</span>:<span>{hours}</span>
      </div>
    </>
  );
}

export default function CountDown() {
  const time = new Date();
  time.setMilliseconds(time.getMilliseconds() + 67090009);
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
