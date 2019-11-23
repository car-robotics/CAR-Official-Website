import React from "react";
import { Typography, Card, Paper, makeStyles, withStyles, createStyles, Theme, Divider, Grid } from "@material-ui/core";
import Image from "material-ui-image";
import { useCurrentWidth } from "react-socks";
import {DocumentTitle} from "../Main/DocumentTitle";
import logo from "../Images/CARLogoPrimary.png";
import "./Home.scss";
import Social from "./Social";
import Interest from "./Interest";
import PayPal from "./PayPal";

const SideCard = withStyles({
    root: {
        display: "inline-flex",
        padding: "10px",
        fontFamily: "Inconsolata",
        backgroundColor: "#212B31",
        color: "#B3A369",
        margin: "auto",
        textAlign: "center",
        borderRadius: "1rem",
        maxWidth: "max-content",
    },
})(Card);

const CardDivider = withStyles({
    root: {
        margin: "1rem",
        backgroundColor: "#B3A369",
    },
})(Divider);

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        missionCard: {
            maxWidth: "50rem",
            display: "inline-table",
            backgroundColor: "#212b31",
            padding: "2rem",
            margin: "auto",
            verticalAlign: "middle",
            borderRadius: "1rem",
        },
        divider: {
            margin: "2rem",
        },
    }),
);

function Home() {
    const width = useCurrentWidth();
    const classes = useStyles();
    const extras_display = width > 1000 ? "inline-flex" : "grid";
    const extras_height = width > 1000 ? "12rem" : "40rem";

    DocumentTitle({title: "Home"});

    return (
        <>
            <div className="electrical">
                <Image 
                    src={logo} 
                    style={{
                        backgroundColor: "transparent",
                        paddingTop: "0",
                    }}
                    imageStyle={{
                        position: "relative",
                        display: "block",
                        width: useCurrentWidth() > 1000 ? "40%" : "75%",
                        margin: "2rem auto",
                    }} 
                />
            </div>
            <div className="mechanical">
                <Paper className={classes.missionCard} elevation={24}>
                    <Typography variant="h3" className="more-text" align="center">
                        The Club's Mission
                    </Typography>
                    <CardDivider/>
                    <Typography align="center" className="more-text" variant="h4">
                        Our mission is to educate and to learn about all aspects of mobile robotics.
                        From the novice to the experienced, we welcome all students who are excited
                        to learn more about the field of robotics and apply the concepts they learn
                        in the classroom to real world applications.
                    </Typography>
                </Paper>
            </div>
            <div className="computer">
                <Grid container justify="space-evenly" alignItems="center" style={{height: "100%"}}>
                    <Grid item>
                        <SideCard elevation={24} style={{display: extras_display, height: extras_height}} >
                            <Social CardDivider={CardDivider}/>
                            {width > 1000 && <Divider style={{margin: "auto 10px", backgroundColor: "#B3A369"}} orientation="vertical"/>}
                            <Interest CardDivider={CardDivider}/>
                            {width > 1000 && <Divider style={{margin: "auto 10px", backgroundColor: "#B3A369"}} orientation="vertical"/>}
                            <PayPal CardDivider={CardDivider}/>
                        </SideCard>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}

export default Home;