import React from "react";
import CountdownTimer from "./CountdownTimer";
import Image from "material-ui-image";
import { Typography, Paper, Divider } from "@material-ui/core";
import PageFade from "../Utils/PageFade";
import { DocumentTitle } from "../Utils/DocumentTitle";

import "./Competition.scss";
import GreenLink from "../Utils/GreenLink";
import { MobileContext } from "../Context/MobileContext";

function Competition() {
    DocumentTitle({ title: "Competition" });

    return (
        <MobileContext.Consumer>
            {mobile => (
                <PageFade>
                    <div>
                        <CountdownTimer />
                        <Paper elevation={24} className="competition-content">
                            <Image
                                src={"https://www.ieeeuncc.com/uploads/1/2/4/2/124254028/ieeefulllogo_orig.png"}
                                style={{ backgroundColor: "transparent", paddingTop: "" }}
                                imageStyle={{ height: "", width: "100%", position: "" }}
                            />
                            <Typography align="center" variant="h4" style={{ lineHeight: mobile ? "2.5rem" : "3.5rem", whiteSpace: "pre-wrap" }}>
                                The <GreenLink text="Institute of Electrical and Electronics Engineers (IEEE)" link="https://www.ieee.org/" />{" "}
                                Region 3 annually hosts student competitions as part of the Southeast Conference.
                                Of these competitions, the hardware competition involves students from different
                                engineering fields to work together to build and compete with fully autonomous
                                robots. This year the competition will be hosted in Raleigh North Carolina on March 14th
                            (for <GreenLink link="https://attend.ieee.org/southeastcon-2020/student-program/student-hardware-competition/" text="Pi Day!" />).
                        </Typography>
                        </Paper>
                        <Paper elevation={24} className="competition-content">
                            <Typography variant="h2" align="center">
                                The Rules:{mobile ? <br /> : " "}Pi Day 2020
                            </Typography>
                            <Divider />
                            <iframe
                                title="rules"
                                src="https://s3.amazonaws.com/car-robotics.uncc.edu/Rules.pdf"
                                // type="application/pdf"
                                width="100%"
                                style={{ height: mobile ? "50vh" : "85vh" }}
                            />
                        </Paper>
                    </div>
                </PageFade>
            )}
        </MobileContext.Consumer>
    );
}

export default Competition;