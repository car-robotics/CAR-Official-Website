import React, { Component } from "react";
import CountdownTimer from "./CountdownTimer";
import Image from "material-ui-image";
import { Typography } from "@material-ui/core";
import PageFade from "../Utils/PageFade";
import { DocumentTitle } from "../Utils/DocumentTitle";
import GoldDivider from "../Utils/GoldDivider";
import { ContentBackground } from "../Utils/ContentBackground";
import Iframe from "react-iframe";
import "./Competition.scss";
import GreenLink from "../Utils/GreenLink";

class Competition extends Component {
    render() {
        DocumentTitle({ title: "Competition" });
        return (
            <PageFade>
                <div style={{ marginTop: "5rem" }}>
                    <CountdownTimer />
                    <ContentBackground elevation={24} className="competition-content">
                        <Image
                            src={"https://www.ieeeuncc.com/uploads/1/2/4/2/124254028/ieeefulllogo_orig.png"}
                            style={{ backgroundColor: "transparent", paddingTop: "" }}
                            imageStyle={{ height: "", width: "100%", position: "" }}
                        />
                        <Typography align="center" variant="h4" style={{ lineHeight: "3.5rem" }}>
                            The <GreenLink text="Institute of Electrical and Electronics Engineers (IEEE)" link="https://www.ieee.org/" />{" "}
                            Region 3 annually hosts student competitions as part of the Southeast Conference.
                            Of these competitions, the hardware competition involves students from different
                            engineering fields to work together to build and compete with fully autonomous
                            robots. This year the competition will be hosted in Raleigh North Carolina on March 14th
                            (for <GreenLink link="https://attend.ieee.org/southeastcon-2020/student-program/student-hardware-competition/" text="Pi Day!" />).
                        </Typography>
                    </ContentBackground>
                    <ContentBackground elevation={24} className="competition-content">
                        <Typography variant="h2" align="center">
                            The Rules: Pi Day 2020
                        </Typography>
                        <GoldDivider />
                        <Iframe
                            title="rules"
                            url="https://drive.google.com/file/d/1rc0wpz5IDh3fPyaSZwz_TqPAv9dnhEcB/preview"
                            width="100%"
                            height="900px"
                        />
                    </ContentBackground>
                </div>
            </PageFade>
        );
    }
}

export default Competition;