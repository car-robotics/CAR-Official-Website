import React from "react";
import { Typography, Card, Paper, makeStyles, withStyles, createStyles, Theme, IconButton } from "@material-ui/core";
import { Email } from "@material-ui/icons";
import { useCurrentWidth } from "react-socks";
import { DocumentTitle } from "../Main/DocumentTitle";
import "./Sponsors.scss";
import Walmart from "./Walmart";
import SolidWork from "./SolidWork";
import Advanced from "./Advanced";
import Ctc from "./CTC";
import JoinTeam from "./JoinTeam";


const SponsorCard = withStyles({
    root: {
        display: "flex",
        fontFamily: "Inconsolata",
        textAlign: "center",
        backgroundColor: "inherit",
        borderRadius: "1rem",
        alignItems: "Center",
        boxShadow: "inset 0px 0px 9px 1px",
    },
})(Card);

const ListItem = withStyles({
    root: {
        fontFamily: "Inconsolata",
        fontSize: "1.25rem",
        fontWeight: "bold",
        textAlign: "left",
        margin: "1.5rem",
    },
})(Typography);

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
        sectionCard: {
            display: "flex",
            color: "#212b31",
            boxShadow: "0px 0px 9px 2px",
            padding: "10px",
            minHeight: "20rem",
        },
        SideCard: {
            display: "flex",
            color: "#212b31",
            backgroundColor: "#B3A369",
            boxShadow: "0px 0px 23px 10px",
            padding: "10px",
            height: "100%",
            width: "auto",
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
        <div className="sponsors-container">

            <Paper className={classes.tyCard} >
                <Typography align="center" className="ty-text" variant="h2">
                    Thank You To Our Sponsors For Their Support!
                </Typography>
            </Paper>

            <div style={{ marginTop: "3rem", display: "inline-flex", width: "100%" }}>
                <Paper className={classes.sectionCard} style={{ backgroundImage: "linear-gradient(to bottom left, #cea110, #e4d9a1, #cea110)" }}>
                    <Typography align="center" className="desc cBlack">
                        <Typography className="secTitle" variant="h4">Gold Level<br />($250+)</Typography>
                        <Typography variant="h5" className="leftAlign">Includes:</Typography>
                        <ListItem>Your Companys Logo On Clubs Shirts</ListItem>
                        <ListItem>Logo On Club Merchendise</ListItem>
                        <ListItem>Same Benefits As The Silver &amp; Green Level Sponsorship</ListItem>
                    </Typography>
                </Paper>

                <SponsorCard className="gSpon" >
                    <Walmart classes={classes} />
                </SponsorCard>
                <SponsorCard className="gSpon" >
                    <SolidWork classes={classes} />
                </SponsorCard>
                <SponsorCard className="gSpon" >
                    <JoinTeam classes={classes} />
                </SponsorCard>

            </div>

            <div style={{ marginTop: "3rem", display: "inline-flex", width: "100%" }}>
                <Paper className={classes.sectionCard} style={{ backgroundImage: "linear-gradient(to top right, #484848, #c1c0c0,  #484848)" }}>
                    <Typography align="center" className="desc cBlack">
                        <Typography className="secTitle" variant="h4">Silver Level<br />($100+)</Typography>
                        <Typography variant="h5" className="leftAlign">Includes:</Typography>
                        <ListItem>Logo Sticker On Our Robot(s)</ListItem>
                        <ListItem>Same Benefits As The Green Level Sponsorship</ListItem>
                    </Typography>
                </Paper>
                <SponsorCard className="gSpon">
                    <Advanced classes={classes} />
                </SponsorCard>
                <SponsorCard className="gSpon">
                    <Ctc classes={classes} />
                </SponsorCard>
            </div>

            <div style={{ marginTop: "3rem", display: "inline-flex", width: "100%" }}>
                <Paper className={classes.sectionCard} style={{ backgroundImage: "linear-gradient(to top right, #5f3d00, #bda780, #6d4700)" }}>
                    <Typography align="center" className="desc cBlack" variant="h5">
                        <Typography className="secTitle" variant="h4">Bronze Level<br />($-100)</Typography>
                        <Typography variant="h5" className="leftAlign">Includes:</Typography>
                        <ListItem>
                            Your company gets a spot on the sponsors page!
                        </ListItem>
                    </Typography>
                </Paper>

                <SponsorCard className="gSpon">
                    <JoinTeam classes={classes} />
                </SponsorCard>
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