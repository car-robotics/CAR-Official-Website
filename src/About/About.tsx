import React, { Component } from "react";

import NathanL from "../Images/Officers/NathanL.jpg";
import SamL from "../Images/Officers/SamL.jpg";
import NoelM from "../Images/Officers/NoelM.jpg";
import MattW from "../Images/Officers/MattW.jpg";
import NathanielB from "../Images/Officers/NathanielB.gif";
import Matt from "../Images/DevTeam/Matt.jpg";
import Ash from "../Images/DevTeam/Ash.jpg";
import Pedro from "../Images/DevTeam/Pedro.jpg";
import Teng from "../Images/DevTeam/Teng.jpg";

import "./About.scss";
import { Officer } from "./OfficerCard";
import Slideshow from "./Slideshow";
import { DocumentTitle } from "../Utils/DocumentTitle";
import PageFade from "../Utils/PageFade";
import AboutSection from "./AboutSection";

const officers = [
    {
        image: NathanielB,
        name: "Nathaniel Belles",
        officer: Officer.President,
        linkedIn: "https://www.linkedin.com/in/nathaniel-belles-04a2894b/",
    },
    {
        image: MattW,
        name: "Matt Wells",
        officer: Officer.VicePresident,
        linkedIn: "https://www.linkedin.com/in/mwells21/",
    },
    {
        image: NathanL,
        name: "Nathan Langley",
        officer: Officer.Interim,
        linkedIn: "https://www.linkedin.com/in/nathan-langley",
    },
    {
        image: SamL,
        name: "Sam Luu",
        officer: Officer.Outreach,
        linkedIn: "https://www.linkedin.com/in/sluu3/",
    },
    {
        image: NoelM,
        name: "Noel Mills",
        officer: Officer.Treasurer,
        linkedIn: "https://www.linkedin.com/in/noel-mills-01362815a/",
    },
];

const webTeam = [
    {
        image: Matt,
        name: "Matt Wells",
        officer: Officer.Developer,
        linkedIn: "https://www.linkedin.com/in/mwells21/",
    },
    {
        image: Ash,
        name: "Ashley Harmon",
        officer: Officer.Developer,
        linkedIn: "https://www.linkedin.com/in/ashleyharmon00/",
    },
    {
        image: Pedro,
        name: "Pedro Millan",
        officer: Officer.Developer,
        linkedIn: "https://www.linkedin.com/in/pmillan06/",
    },
    {
        image: Teng,
        name: "Teng Lee",
        officer: Officer.Developer,
        linkedIn: "https://www.linkedin.com/in/teng-lee-5323a0162/",
    },
];

class About extends Component {
    render() {
        DocumentTitle({ title: "About" });
        return (
            <PageFade>
                <div>
                    <Slideshow />

                    <AboutSection
                        title={"Officers"}
                        subtitle={"Our officers help run the club so that members only need to worry about working on the robot"}
                        content={officers}
                    />

                    <AboutSection
                        title={"Web Team"}
                        subtitle={"Our web team works diligently to provide a stunning website to showcase the club"}
                        content={webTeam}
                    />
                </div>
            </PageFade>
        );
    }
}

export default About;