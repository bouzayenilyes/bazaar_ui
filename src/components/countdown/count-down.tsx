"use client";

// GLOBAL CUSTOM COMPONENT
import FlexBetween from "components/flex-box/flex-between";
// Local CUSTOM COMPONENT
import CountBox from "./count-box";
import useCountDown from "./useCountDown";

// ==============================================================
type Props = { expireDate: number };
// ==============================================================

export default function Countdown({ expireDate }: Props) {
  const { timeLeft } = useCountDown({ expireDate });

  return (
    <FlexBetween width="90%" height="auto">
      <CountBox digit={timeLeft.days} title="DAYS" />
      <CountBox digit={timeLeft.hours} title="HOURS" />
      <CountBox digit={timeLeft.minutes} title="MINS" />
      <CountBox digit={timeLeft.seconds} title="SECS" />
    </FlexBetween>
  );
}
