import React from "react";
import { Typography, Paper, Divider } from "@material-ui/core";

import "./Competition.scss";
import { MobileContext } from "../Context/MobileContext";

interface TimerDisplayProps {
    display: string[] | string;
}

export default function TimerDisplay(props: TimerDisplayProps) {

    const units = ["weeks", "days", "hours", "minutes", "seconds"]

    return (
        <MobileContext.Consumer>
            {mobile => (
                <Paper component="section" elevation={24} className="countdown">
                    <Typography style={{ lineHeight: mobile ? "2.5rem" : "3.5rem" }} variant="h2" align="center">
                        Countdown to Competition!
                    </Typography>
                    <Divider />
                    <div style={
                        mobile ?
                            { display: "flex", flexDirection: "column", width: "fit-content", margin: "auto" }
                            : { display: "flex", justifyContent: "space-evenly" }
                    }
                    >
                        {(typeof props.display === "string") ?

                            <Typography style={{ lineHeight: mobile ? "2.5rem" : "3.5rem" }} variant="h2" align="left">
                                {props.display}
                            </Typography>

                            :

                            props.display.map((unitOfTime: string, index: number) => {
                                return (
                                    <Typography key={index} style={{ lineHeight: mobile ? "2.5rem" : "3.5rem", margin: mobile ? "" : "auto 1rem" }} variant="h2" align={mobile ? "left" : "center"}>
                                        {parseInt(unitOfTime) === 1 ? unitOfTime + " " + units[index].slice(0, -1) : unitOfTime + " " + units[index]}
                                    </Typography>
                                );
                            })}
                    </div>
                </Paper>
            )}
        </MobileContext.Consumer>
    );
}