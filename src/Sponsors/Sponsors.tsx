import React from "react";
import { Typography, makeStyles, createStyles, Theme } from "@material-ui/core";
import { DocumentTitle } from "../Utils/DocumentTitle";
import SponsorCard from "./SponsorCard";
import LevelCard from "./LevelCard";
import PageFade from "../Utils/PageFade";
import GoldDivider from "../Utils/GoldDivider";
import { ContentBackground } from "../Utils/ContentBackground";
import GreenLink from "../Utils/GreenLink";
import { useCurrentWidth } from "react-socks";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            padding: "2rem 0",
            margin: "auto",
        },
    }),
);


export default function Sponsors() {
    const classes = useStyles();

    const mobile = useCurrentWidth() < 1000;

    DocumentTitle({ title: "Sponsors" });

    return (
        <PageFade>
            <div style={{ margin: "5rem auto", width: "95%" }}>

                <ContentBackground elevation={24} className={classes.container} >
                    <Typography align="center" variant={mobile ? "h4" : "h2"} >
                        Thank You To Our Sponsors For Their Support!
                    </Typography>

                    <GoldDivider />

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


                </ContentBackground>

                <ContentBackground elevation={24} className={classes.container} style={{ marginTop: "2rem", width: mobile ? "90%" : "60%" }}>
                    <Typography align="center" variant={mobile ? "h5" : "h3"} style={{ lineHeight: "3.5rem" }}>
                        Ineterested in sponsoring?<br />Contact Sam Luu at<br />
                        <GreenLink link="mailto:car-robotics@uncc.edu" text="car-robotics@uncc.edu" />
                    </Typography>
                </ContentBackground>

            </div>
        </PageFade>
    );
}