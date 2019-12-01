import React from "react";
import { Typography } from "@material-ui/core";
import GoldDivider from "../Utils/GoldDivider";
import { ContentBackground } from "../Utils/ContentBackground";
import "./Competition.scss";

export default function TimerDisplay(props: any) {
    return (
        <ContentBackground className="countdown">
            <Typography variant="h2" align="center">
                Countdown to Competition!
            </Typography>
            <GoldDivider />
            <Typography variant="h2" align="center">
                {props.display}
            </Typography>
        </ContentBackground>
    );
}