import React from "react";
import TimerCountdown from "react-native-timer-countdown";

function TimerCount(props) {
  return (
    <TimerCountdown
      initialMilliseconds={props.timer}
      onExpire={() => props.complete()}
      formatMilliseconds={milliseconds => {
        const remainingSec = Math.round(milliseconds / 1000);
        const seconds = parseInt((remainingSec % 60).toString(), 10);
        const minutes = parseInt(((remainingSec / 60) % 60).toString(), 10);
        const hours = parseInt((remainingSec / 3600).toString(), 10);
        const s = seconds < 10 ? "0" + seconds : seconds;
        const m = minutes < 10 ? "0" + minutes : minutes;
        let h = hours < 10 ? "0" + hours : hours;
        h = h === "00" ? "" : h + ":";
        return h + m + ":" + s;
      }}
    />
  );
}
export default TimerCount;
