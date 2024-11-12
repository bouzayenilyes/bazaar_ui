"use client";

import CountBox from "./count-box";
import { useCountDown } from "components/countdown";

export default function CountDown() {
  const { timeLeft } = useCountDown({ expireDate: new Date("2024-01-15").getTime() });

  return (
    <div className="count-down">
      <CountBox label="Days" value={timeLeft.days} />
      <CountBox label="Hours" value={timeLeft.hours} />
      <CountBox label="Minutes" value={timeLeft.minutes} />
      <CountBox label="Seconds" value={timeLeft.seconds} />
    </div>
  );
}
