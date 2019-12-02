import React from "react";
import { Typography, Paper, makeStyles, withStyles, createStyles, Theme, Divider } from "@material-ui/core";
import Image from "material-ui-image";
import { useCurrentWidth } from "react-socks";
import { DocumentTitle } from "../Utils/DocumentTitle";
import logo from "../Images/CARLogoPrimary.png";
import "./Home.scss";
import PageFade from "../Utils/PageFade";

const CardDivider = withStyles({
    root: {
        margin: "1rem",
        backgroundColor: "#B3A369",
    },
})(Divider);

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        missionCard: {
            maxWidth: "60%",
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

export default function Home() {
    const classes = useStyles();

    DocumentTitle({ title: "Home" });

    return (
        <PageFade>
            <div>
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
                        <CardDivider />
                        <Typography style={{ lineHeight: "3.5rem" }} align="center" className="more-text" variant="h4">
                            Our mission is to educate and to learn about all aspects of mobile robotics.
                            From the novice to the experienced, we welcome all students who are excited
                            to learn more about the field of robotics and apply the concepts they learn
                            in the classroom to real world applications.
                        </Typography>
                    </Paper>
                </div>
            </div>
        </PageFade>
    );
}