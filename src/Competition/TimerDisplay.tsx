import React from "react";
import { Typography } from "@material-ui/core";
import GoldDivider from "../Utils/GoldDivider";
import { ContentBackground } from "../Utils/ContentBackground";
import "./Competition.scss";
import { useCurrentWidth } from "react-socks";

export default function TimerDisplay(props: any) {

    const mobile = useCurrentWidth() < 1000;

    return (
        <ContentBackground elevation={24} className="countdown">
            <Typography style={{ lineHeight: mobile ? "2.5rem" : "3.5rem" }} variant={mobile ? "h4" : "h2"} align="center">
                Countdown to Competition!
            </Typography>
            <GoldDivider />
            <Typography style={{ lineHeight: mobile ? "2.5rem" : "3.5rem" }} variant={mobile ? "h5" : "h3"} align="center">
                {props.display}
            </Typography>
        </ContentBackground>
    );
}