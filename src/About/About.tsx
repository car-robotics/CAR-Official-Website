import React, { Component } from "react";
import { Paper, withStyles, Typography, Divider } from "@material-ui/core";
import OfficerCard, { Officer } from "./OfficerCard";
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
import "../Themes.scss";
import Slideshow from "./Slideshow";
import { DocumentTitle } from "../Main/DocumentTitle";
import PageFade from "../Main/PageFade";

const AboutBackground = withStyles({
    root: {
        backgroundColor: "#212B31",
        borderRadius: "1rem",
    },
})(Paper);

class About extends Component {
    render() {
        DocumentTitle({ title: "About" });
        return (
            <PageFade>
                <div>
                    <div className="who-we-are-container">
                        <Slideshow />
                    </div>
                    <div>
                        <AboutBackground elevation={24} className="card-group">
                            <Typography style={{ color: "#B3A369", gridArea: "t" }} variant="h2" align="center">
                                Officers
                            </Typography>
                            <Typography style={{ color: "#B3A369", gridArea: "w", padding: "0 1px 0 1px" }} variant="h5" align="center">
                                Our officers help run the club so that members only need to worry about working on the robot
                            </Typography>
                            <Divider style={{ backgroundColor: "#B3A369", gridArea: "d" }} variant="middle" />
                            <div className="card-container">
                                <OfficerCard
                                    image={NathanielB}
                                    name="Nathaniel Belles"
                                    officer={Officer.President}
                                    linkedIn="https://www.linkedin.com/in/nathaniel-belles-04a2894b/"
                                />
                                <OfficerCard
                                    image={MattW}
                                    name="Matt Wells"
                                    officer={Officer.VicePresident}
                                    linkedIn="https://www.linkedin.com/in/mwells21/"
                                />
                                <OfficerCard
                                    image={NathanL}
                                    name="Nathan Langley"
                                    officer={Officer.Interim}
                                    linkedIn="https://www.linkedin.com/in/nathan-langley"
                                />
                                <OfficerCard
                                    image={SamL}
                                    name="Sam Luu"
                                    officer={Officer.Outreach}
                                    linkedIn="https://www.linkedin.com/in/sluu3/"
                                />
                                <OfficerCard
                                    image={NoelM}
                                    name="Noel Mills"
                                    officer={Officer.Treasurer}
                                    linkedIn="https://www.linkedin.com/in/noel-mills-01362815a/"
                                />
                            </div>
                        </AboutBackground>
                        <AboutBackground elevation={24} className="card-group">
                            <Typography style={{ color: "#B3A369", gridArea: "t" }} variant="h2" align="center">
                                Web Team
                            </Typography>
                            <Typography style={{ color: "#B3A369", gridArea: "w", padding: "0 1px 0 1px"  }} variant="h5" align="center">
                                Our web team works diligently to provide a stunning website to showcase the club
                            </Typography>
                            <Divider style={{ backgroundColor: "#B3A369", gridArea: "d" }} variant="middle" />
                            <div className="card-container">
                                <OfficerCard
                                    image={Matt}
                                    name="Matt Wells"
                                    officer={Officer.Developer}
                                    linkedIn="https://www.linkedin.com/in/mwells21/"
                                />
                                <OfficerCard
                                    image={Ash}
                                    name="Ashley Harmon"
                                    officer={Officer.Developer}
                                    linkedIn="https://www.linkedin.com/in/ashleyharmon00/"
                                />
                                <OfficerCard
                                    image={Pedro}
                                    name="Pedro Millan Perez"
                                    officer={Officer.Developer}
                                    linkedIn="https://www.linkedin.com/in/pmillan06/"
                                />
                                <OfficerCard
                                    image={Teng}
                                    name="Teng Lee"
                                    officer={Officer.Developer}
                                    linkedIn="https://www.linkedin.com/in/teng-lee-5323a0162/"
                                />
                            </div>
                        </AboutBackground>
                    </div>
                </div>
            </PageFade>
        );
    }
}

export default About;