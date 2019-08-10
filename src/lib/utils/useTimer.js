import { useEffect, useState } from "react";

function parseMS(miliseconds) {
  var minutes = Math.floor(miliseconds / 60000);
  var seconds = ((miliseconds % 60000) / 1000).toFixed(0);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

function useTimer(seconds, options = {}) {
  const { intervalTime = 1000 } = options;
  const [timeLeft, setTimeLeft] = useState(seconds * 1000);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(current => {
        if (current <= 0) {
          clearInterval(interval);
          return 0;
        }

        return current - intervalTime;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [intervalTime]);

  return { timeLeft: parseMS(timeLeft), completed: timeLeft === 0 };
}

export default useTimer;
