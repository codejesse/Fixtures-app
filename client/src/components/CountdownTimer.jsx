// client/src/CountdownTimer.js
import React, { useState, useEffect } from "react";

function CountdownTimer({ date, timerStarted }) {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    if (!timerStarted) return;

    const endTime = new Date(date).getTime() + 90 * 60 * 1000; // 90 minutes

    const calculateTimeLeft = () => {
      const difference = endTime - +new Date();
      let timeLeft = {};

      if (difference > 0) {
        timeLeft = {
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      } else {
        timeLeft = { minutes: 0, seconds: 0 };
      }

      return timeLeft;
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [date, timerStarted]);


  return (
    <div>
      {timerStarted ? (
        <div>
          {timeLeft.minutes}:{timeLeft.seconds}
        </div>
      ) : (
        <div className="text-[12px]">{date}</div>
      )}
    </div>
  );
}

export default CountdownTimer;
