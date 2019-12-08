import React from "react";
import { Typography } from "@material-ui/core";
import GoldDivider from "../Utils/GoldDivider";
import { ContentBackground } from "../Utils/ContentBackground";
import "./Competition.scss";
import { useCurrentWidth } from "react-socks";

export default function TimerDisplay(props: any) {

    const mobile = useCurrentWidth() < 1000;

    const units = ["weeks", "days", "hours", "minutes", "seconds"]

    return (
        <ContentBackground elevation={24} className="countdown">
            <Typography style={{ lineHeight: mobile ? "2.5rem" : "3.5rem" }} variant="h2" align="center">
                Countdown to Competition!
            </Typography>
            <GoldDivider />
            <div style={
                mobile ?
                    { display: "flex", flexDirection: "column", marginLeft: "25%" }
                    : { display: "flex", justifyContent: "space-evenly" }
            }
            >
                {props.display.map((unitOfTime: number, index: number) => {
                    return (
                        <Typography style={{ lineHeight: mobile ? "2.5rem" : "3.5rem" }} variant="h3" align="left">
                            {unitOfTime === 1 ? unitOfTime + " " + units[index].slice(0, -1) : unitOfTime + " " + units[index]}
                        </Typography>
                    );
                })}
            </div>
        </ContentBackground>
    );
}