import React from "react";
import { Typography, Paper, makeStyles, createStyles, Theme, Divider, Link } from "@material-ui/core";
import { DocumentTitle } from "../Main/DocumentTitle";
import SponsorCard from "./SponsorCard";
import LevelCard from "./LevelCard";
import PageFade from "../Main/PageFade";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            padding: "2rem",
            margin: "auto",
            backgroundColor: "#212b31",
            color: "#B3A369",
            borderRadius: "1rem",
        },
        levelSection: {
            margin: "3rem 0 0 3rem",
            display: "inline-flex",
            width: "95%",
            borderRadius: "1rem",
        },
        sponsorCards: {
            display: "inline-flex",
            width: "76%",
            justifyContent: "space-evenly",
            padding: "1rem",
            boxShadow: "inset 0px 0px 9px 2px black",
            borderRadius: "0px 1rem 1rem 0px",
        },
    }),
);


function Sponsors() {
    //Set the default sizing only used for (mobile version)
    // const width = useCurrentWidth();
    const classes = useStyles();

    DocumentTitle({ title: "Sponsors" });

    return (
        <PageFade>
            <div style={{margin: "5rem auto", width: "95%"}}>

                <Paper className={classes.container} >
                    <Typography align="center" variant="h2" >
                        Thank You To Our Sponsors For Their Support!
                    </Typography>

                    <Divider style={{ backgroundColor: "#B3A369", marginTop: "10px" }} variant="middle" />

                <div className={classes.levelSection} >
                    <LevelCard
                        level="Gold"
                    />

                    <div className={classes.sponsorCards} style={{backgroundColor: "#ead286"}} >
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

                <div className={classes.levelSection}>
                    <LevelCard
                        level="Silver"
                    />

                    <div className={classes.sponsorCards} style={{backgroundColor: "#c1c0c0"}} >
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

                <div className={classes.levelSection}>
                    <LevelCard
                        level="Bronze"
                    />

                    <div className={classes.sponsorCards} style={{backgroundColor: "#bda780"}} >
                        <SponsorCard
                            img={"https://retohercules.com/images/office-people-clipart-9.jpg"}
                            orgName={"Your logo here!"}
                        />
                    </div>
                </div>

                
                </Paper>

                <Paper className={classes.container} style={{marginTop: "2rem", width: "60%"}}>
                    <Typography align="center" variant="h5">
                        To become a sponsor contact Sam Luu at <br/><Link href="mailto:car-robotics@uncc.edu" style={{color: "#00713d"}}>car-robotics@uncc.edu</Link>
                    </Typography>
                </Paper>

            </div>
        </PageFade>
    );
}

export default Sponsors;