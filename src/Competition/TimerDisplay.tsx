import React from "react";
import { Typography, Paper, withStyles } from "@material-ui/core";
import GoldDivider from "../Utils/GoldDivider";

const TimerText = withStyles({
    root: {
        color: "#B3A369",
    },
})(Typography);

const TimerBackground = withStyles({
    root: {
        backgroundColor: "#212B31",
        width: "max-content",
        padding: "2rem",
        margin: "auto"
    },
})(Paper);

export default function TimerDisplay(props: any) {
    return (
        <TimerBackground style={{ width: "1024px" }}>
            <TimerText variant="h2" align="center">
                Countdown to Competition!
            </TimerText>
            <GoldDivider />
            <TimerText variant="h2" align="center">
                {props.display}
            </TimerText>
        </TimerBackground>
    );
}