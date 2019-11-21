import React from "react";
import { Typography, Card, Paper, makeStyles, withStyles, createStyles, Theme, IconButton } from "@material-ui/core";
import { Email } from "@material-ui/icons";
import { useCurrentWidth } from "react-socks";
import { DocumentTitle } from "../Main/DocumentTitle";
import "./Sponsors.scss";
import SponsorCard from "./SponsorCard";
import LevelCard from "./LevelCard";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        tyCard: {
            width: "85%",
            padding: "10px",
            margin: "auto",
            backgroundColor: "#212b31",
            color: "#B3A369",
            borderRadius: "1rem",
        },
        levelSection: {
            margin: "3rem 0 0 3rem",
            display: "inline-flex",
            width: "100%",
        },
        sponsorCards: {
            display: "inline-flex",
            width: "70%",
            justifyContent: "space-evenly",
        },
        divider: {
            margin: "10px",
        },
    }),
);


function Sponsors() {
    //Set the default sizing only used for (mobile version)
    const width = useCurrentWidth();
    const classes = useStyles();

    DocumentTitle({ title: "Sponsors" });

    return (
        <div style={{margin: "5rem auto", width: "85rem"}}>

            <Paper className={classes.tyCard} >
                <Typography align="center" variant="h2">
                    Thank You To Our Sponsors For Their Support!
                </Typography>
            </Paper>

            <div className={classes.levelSection}>

                <LevelCard
                    level="Gold"
                />

                <div className={classes.sponsorCards} >

                    <SponsorCard
                        img={"https://img.pngio.com/walmart-logo-free-transparent-png-logos-walmart-logo-png-960_899.jpg"}
                        orgName={"Walmart"}
                        orgLink={"https://walmart.com/"}
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

                <div className={classes.sponsorCards} >

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

                <div className={classes.sponsorCards} >
                    
                    <SponsorCard
                        img={"https://retohercules.com/images/office-people-clipart-9.jpg"}
                        orgName={"Your logo here!"}
                    />

                </div>

            </div>

            {/* <SponsorCard className="leftCard" style={{ backgroundColor: "#B3A369" }}>
                <Typography align="center" variant="h5">
                    Interested In Sponsoring?<br />
                </Typography>
            </SponsorCard>

            <SponsorCard className="rightCard" style={{ gridArea: "rightCard", backgroundColor: "#B3A369" }}>
                <Typography align="center" variant="h5">
                    Please Contact Sam Luu
                    <IconButton href="mailto:car-robotics@uncc.edu/" target="_blank">
                        <Email fontSize="large" htmlColor="#212b31" />
                    </IconButton>
                </Typography>
            </SponsorCard> */}

        </div >
    );
}

export default Sponsors;