import React, { Component } from "react";
import CountdownTimer from "./CountdownTimer";
import Image from "material-ui-image";
import { Paper, withStyles, Typography, Divider, Link } from "@material-ui/core";
import EasyToSeeTooltip from "../Main/EasyToSeeTooltip";

const PaperBackground = withStyles({
    root: {
        backgroundColor: "#212B31",
        width: "max-content",
        padding: "2rem",
        margin: "2rem auto"
    },
})(Paper);

const RulesText = withStyles({
    root: {
        color: "#B3A369",
    },
})(Typography);

class Competition extends Component {
    render() {
        return (
            <div style={{ paddingTop: "6rem" }}>
                <CountdownTimer />
                <PaperBackground style={{width: "1024px"}}>
                    <Image src={"https://www.ieeeuncc.com/uploads/1/2/4/2/124254028/ieeefulllogo_orig.png"} style={{backgroundColor: "transparent", height: "18rem", paddingTop: "0px", marginBottom: "32px"}} />
                    <RulesText align="center" variant="h4">
                        The <EasyToSeeTooltip title="https://www.ieee.org/"><Link style={{color: "#00713d"}} target="_blank" href="https://www.ieee.org/"> Institute of Electrical and Electronics Engineers (IEEE) </Link></EasyToSeeTooltip>
                         Region 3 annually hosts student competitions as part of the Southeast Conference. 
                        Of these competitions, the hardware competition involves students from different 
                        engineering fields to work together to build and compete with fully autonomous 
                        robots. This year the competition will be hosted in Raleigh North Carolina on March 14th (for <EasyToSeeTooltip title="https://attend.ieee.org/southeastcon-2020/student-program/student-hardware-competition/"><Link style={{color: "#00713d"}} target="_blank" href="https://attend.ieee.org/southeastcon-2020/student-program/student-hardware-competition/">Pi Day!</Link></EasyToSeeTooltip>). 
                    </RulesText>
                </PaperBackground>
                <PaperBackground>
                    <RulesText variant="h2" align="center">
                        The Rules: Pi Day 2020
                    </RulesText>
                    <Divider style={{ backgroundColor: "#B3A369", margin: "1rem"}} variant="middle" />
                    <iframe title="rules" src="https://drive.google.com/file/d/1rc0wpz5IDh3fPyaSZwz_TqPAv9dnhEcB/preview" width="1024" height="768"></iframe>
                </PaperBackground>
            </div>
        );
    }
}

export default Competition;