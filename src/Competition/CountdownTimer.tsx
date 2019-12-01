import React from "react";
import Countdown from 'react-countdown-now';
import TimerDisplay from "./TimerDisplay";

interface CountdownFormat {
  total: number,
  days: number,
  hours: number,
  minutes: number,
  seconds: number,
  completed: boolean,
}

const formatNumber = (time: number) => {
  return ("0" + time).slice(-2);
}

const renderer = (props: CountdownFormat) => {
  if (props.completed) {
    return <TimerDisplay display="It's Competition Time!" />;
  } else {
    const weeks = Math.floor(props.days / 7);
    props.days = props.days % 7;
    const timeToDisplay = `${formatNumber(weeks)} weeks ${formatNumber(props.days)} days ${formatNumber(props.hours)} hours ${formatNumber(props.minutes)} minutes ${formatNumber(props.seconds)} seconds`
    return <TimerDisplay display={timeToDisplay} />;
  }
};
const countdown_date = new Date("2020-03-14T00:00:00");

export default function CountdownTimer() {
  return (
    <Countdown
      date={countdown_date}
      renderer={renderer}
    />
  );
}