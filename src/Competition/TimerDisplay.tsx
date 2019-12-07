import React from "react";
import { Typography } from "@material-ui/core";
import GoldDivider from "../Utils/GoldDivider";
import { ContentBackground } from "../Utils/ContentBackground";
import "./Competition.scss";

export default function TimerDisplay(props: any) {
    return (
        <ContentBackground elevation={24} className="countdown">
            <Typography style={{ lineHeight: "3.5rem" }} variant="h2" align="center">
                Countdown to Competition!
            </Typography>
            <GoldDivider />
            <Typography style={{ lineHeight: "3.5rem" }} variant="h3" align="center">
                {props.display}
            </Typography>
        </ContentBackground>
    );
}