import React from "react";
import { Typography, makeStyles, createStyles, Theme, Paper, Divider } from "@material-ui/core";
import { DocumentTitle } from "../Utils/DocumentTitle";
import SponsorCard from "./SponsorCard";
import LevelCard from "./LevelCard";
import PageFade from "../Utils/PageFade";
import GreenLink from "../Utils/GreenLink";
import { MobileContext } from "../Context/MobileContext";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            padding: "1rem",
            margin: "auto",
            width: "85%",
        },
    }),
);


export default function Sponsors() {
    const classes = useStyles();

    DocumentTitle({ title: "Sponsors" });

    return (
        <MobileContext.Consumer>
            {mobile => (
                <PageFade>
                    <div>

                        <Paper elevation={24} className={classes.container} >
                            <Typography align="center" variant="h2" >
                                Thank You To Our Sponsors For Their Support!
                            </Typography>

                            <Divider />

                            <div className="levelSection" >
                                <LevelCard level="Gold" />

                                <div className="sponsorCards" style={{ backgroundColor: "#EAD286" }} >
                                    <SponsorCard
                                        img={"https://img.pngio.com/walmart-logo-free-transparent-png-logos-walmart-logo-png-960_899.jpg"}
                                        orgName={"Walmart"}
                                        orgLink={"https://walmart.com/"}
                                    />
                                    <SponsorCard
                                        img={"http://imatrixsol.com/img/solidworks.png"}
                                        orgName={"SolidWorks"}
                                        orgLink={"https://www.solidworks.com/"}
                                    />
                                    <SponsorCard
                                        img={"https://retohercules.com/images/office-people-clipart-9.jpg"}
                                        orgName={"Your logo here!"}
                                    />
                                </div>
                            </div>

                            <div className="levelSection">
                                <LevelCard level="Silver" />

                                <div className="sponsorCards" style={{ backgroundColor: "#C1C0C0" }} >
                                    <SponsorCard
                                        img={"https://enventyspartners.com/wp-content/uploads/2017/09/cropped-en-favicon.gif"}
                                        orgName={"Envyntus Partners"}
                                        orgLink={"https://enventyspartners.com/"}
                                    />
                                    <SponsorCard
                                        img={"https://retohercules.com/images/office-people-clipart-9.jpg"}
                                        orgName={"Your logo here!"}
                                    />
                                </div>
                            </div>

                            <div className="levelSection">
                                <LevelCard level="Bronze" />

                                <div className="sponsorCards" style={{ backgroundColor: "#BDA780" }} >
                                    <SponsorCard
                                        img={"https://retohercules.com/images/office-people-clipart-9.jpg"}
                                        orgName={"Your logo here!"}
                                    />
                                </div>
                            </div>

                        </Paper>

                        <Paper elevation={24} className={classes.container} style={{ margin: "2rem auto", width: mobile ? "85%" : "60%" }}>
                            <Typography align="center" variant="h3" style={{ lineHeight: mobile ? "2.5rem" : "3.5rem" }}>
                                Ineterested in sponsoring?<br />Contact Sam Luu at<br />
                                <GreenLink link="mailto:car-robotics@uncc.edu" text="car-robotics@uncc.edu" />
                            </Typography>
                        </Paper>

                    </div>
                </PageFade>
            )}
        </MobileContext.Consumer>
    );
}