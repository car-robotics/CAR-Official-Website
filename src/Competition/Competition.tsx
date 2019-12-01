import React, { Component } from "react";
import CountdownTimer from "./CountdownTimer";
import Image from "material-ui-image";
import { withStyles, Typography, Link } from "@material-ui/core";
import EasyToSeeTooltip from "../Utils/EasyToSeeTooltip";
import PageFade from "../Utils/PageFade";
import { DocumentTitle } from "../Utils/DocumentTitle";
import GoldDivider from "../Utils/GoldDivider";
import { ContentBackground } from "../Utils/ContentBackground";
import "./Competition.scss";

const GreenLink = withStyles({
    root: {
        color: "#00713D",
    },
})(Link);

class Competition extends Component {
    render() {
        DocumentTitle({ title: "Competition" });
        return (
            <PageFade>
                <div style={{ paddingTop: "6rem" }}>
                    <CountdownTimer />
                    <ContentBackground className="competition-content">
                        <Image src={"https://www.ieeeuncc.com/uploads/1/2/4/2/124254028/ieeefulllogo_orig.png"} style={{ backgroundColor: "transparent", height: "18rem", paddingTop: "0px", marginBottom: "32px" }} />
                        <Typography align="center" variant="h4">
                            The <EasyToSeeTooltip title="https://www.ieee.org/"><GreenLink target="_blank" href="https://www.ieee.org/"> Institute of Electrical and Electronics Engineers (IEEE) </GreenLink></EasyToSeeTooltip>
                            Region 3 annually hosts student competitions as part of the Southeast Conference.
                            Of these competitions, the hardware competition involves students from different
                            engineering fields to work together to build and compete with fully autonomous
                            robots. This year the competition will be hosted in Raleigh North Carolina on March 14th (for <EasyToSeeTooltip title="https://attend.ieee.org/southeastcon-2020/student-program/student-hardware-competition/"><GreenLink target="_blank" href="https://attend.ieee.org/southeastcon-2020/student-program/student-hardware-competition/">Pi Day!</GreenLink></EasyToSeeTooltip>).
                        </Typography>
                    </ContentBackground>
                    <ContentBackground className="competition-content">
                        <Typography variant="h2" align="center">
                            The Rules: Pi Day 2020
                        </Typography>
                        <GoldDivider />
                        <iframe title="rules" src="https://drive.google.com/file/d/1rc0wpz5IDh3fPyaSZwz_TqPAv9dnhEcB/preview" width="1024" height="768"></iframe>
                    </ContentBackground>
                </div>
            </PageFade>
        );
    }
}

export default Competition;