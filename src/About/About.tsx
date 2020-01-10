import React from "react";

import NathanL from "../Images/Officers/NathanL.jpg";
import SamL from "../Images/Officers/SamL.jpg";
import NoelM from "../Images/Officers/NoelM.jpg";
import MattW from "../Images/Officers/MattW.jpg";
import NathanielB from "../Images/Officers/NathanielB.jpg";
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
import { Typography, Collapse, Paper, Divider } from "@material-ui/core";
import GreenLink from "../Utils/GreenLink";
import ScrollToTopButton from "../Utils/ScrollToTopButton";
import { MobileContext } from "../Context/MobileContext";

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

const aboutWebsiteLinks = [
    { name: "ReactJs", link: "https://reactjs.org/" },
    { name: "Typescript", link: "https://www.typescriptlang.org/" },
    { name: "Sass", link: "https://sass-lang.com/" },
    { name: "NodeJs", link: "https://nodejs.org/en/" },
    { name: "Material-UI", link: "https://material-ui.com/" },
]

function About() {

    const [showAboutWebsite, setShowAboutWebsite] = React.useState<boolean>(false);

    DocumentTitle({ title: "About" });

    return (
        <MobileContext.Consumer>
            {mobile => (
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

                        <Paper elevation={24} className="about-website-container">
                            <Typography align="center" variant="h2" >
                                About the Website
                                </Typography>
                            <Divider />
                            <ScrollToTopButton
                                onClick={() => setShowAboutWebsite(!showAboutWebsite)}
                                tooltipText={showAboutWebsite ? "Show Less" : "Show More"}
                                style={{
                                    display: "flex",
                                    transition: "transform 0.5s",
                                    transform: !showAboutWebsite ? "rotate(180deg)" : "",
                                    padding: mobile ? "6px" : "",
                                    margin: "auto",
                                }}
                            />
                            <Collapse in={showAboutWebsite} unmountOnExit>
                                <Typography style={{ lineHeight: mobile ? "2.5rem" : "3.5rem" }} align="center" variant="h4">
                                    This website was built using
                                        {aboutWebsiteLinks.map((website) => {
                                        return (
                                            <React.Fragment key={website.link}>
                                                <br />
                                                <GreenLink placement={"right"} link={website.link} text={website.name} />
                                            </React.Fragment>
                                        );
                                    })}
                                    <br /><br />
                                    This website started as a semester project done by the students listed above in the Web Team
                                    section. We began with a flat white background and some randomly generated Latin text. From there,
                                    each member worked throughout the semester to add content and learn about the technologies used
                                        to build this site. The website at the end of the semester can be seen{" "}
                                    <GreenLink link="http://car-robotics.s3-website.us-east-2.amazonaws.com/" text="here" />.
                                        <br /><br />
                                    Since the end of that semester, I, the Matt in the Web Team section, continued working to refine each
                                        page for styling consistency, content, and optimizing user experience.<br />
                                    <br />
                                    The code for this website is open source and available{" "}
                                    <GreenLink link="https://github.com/car-robotics/CAR-Website-REACT" text="here" />
                                    {" "}for anyone to use for their own website.
                                    For those looking to learn React, this could be a good starting point as it gives you something to
                                    reference when styling/coding your own components.
                                    </Typography>
                            </Collapse>
                        </Paper>
                    </div>
                </PageFade>
            )}
        </MobileContext.Consumer >
    );
}

export default About;