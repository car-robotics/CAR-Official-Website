import React from "react";
import { Typography } from "@material-ui/core";
import GoldDivider from "../Utils/GoldDivider";
import { ContentBackground } from "../Utils/ContentBackground";
import "./Competition.scss";
import { useCurrentWidth } from "react-socks";

interface TimerDisplayProps {
    display: string[] | string;
}

export default function TimerDisplay(props: TimerDisplayProps) {

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
                {(typeof props.display === "string") ?

                    <Typography style={{ lineHeight: mobile ? "2.5rem" : "3.5rem" }} variant="h3" align="left">
                        {props.display}
                    </Typography>

                    :

                    props.display.map((unitOfTime: string, index: number) => {
                        return (
                            <Typography key={index} style={{ lineHeight: mobile ? "2.5rem" : "3.5rem" }} variant="h3" align="left">
                                {parseInt(unitOfTime) === 1 ? unitOfTime + " " + units[index].slice(0, -1) : unitOfTime + " " + units[index]}
                            </Typography>
                        );
                    })}
            </div>
        </ContentBackground>
    );
}