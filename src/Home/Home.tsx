import React from "react";
import { Typography, makeStyles, withStyles, createStyles, Theme, Divider } from "@material-ui/core";
import Image from "material-ui-image";
import { useCurrentWidth, Breakpoint } from "react-socks";
import { DocumentTitle } from "../Utils/DocumentTitle";
import logo from "../Images/CARLogoPrimary.png";
import "./Home.scss";
import PageFade from "../Utils/PageFade";
import { COLORS } from "../Utils/COLORS";
import { ContentBackground } from "../Utils/ContentBackground";

const CardDivider = withStyles({
    root: {
        margin: "1rem",
        backgroundColor: COLORS.schoolGold,
    },
})(Divider);

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        missionCard: {
            maxWidth: useCurrentWidth() > 1000 ? "60%" : "80%",
            padding: useCurrentWidth() > 1000 ? "2rem" : "1rem",
            margin: "auto",
        },
        divider: {
            margin: "2rem",
        },
    }),
);

export default function Home() {
    const classes = useStyles();

    DocumentTitle({ title: "Home" });

    const missionStatement =
        `Our mission is to educate and to learn about all aspects of mobile robotics.
    From the novice to the experienced, we welcome all students who are excited
    to learn more about the field of robotics and apply the concepts they learn
    in the classroom to real world applications.`

    return (
        <PageFade>
            <div>
                <div className="electrical">
                    <Image
                        src={logo}
                        style={{
                            backgroundColor: "transparent",
                            paddingTop: "5rem",
                        }}
                        imageStyle={{
                            position: "relative",
                            display: "block",
                            width: useCurrentWidth() > 1000 ? "40%" : "100%",
                            margin: "2rem auto",
                        }}
                    />
                </div>
                <div className="mechanical">
                    <ContentBackground elevation={24} className={classes.missionCard} >
                        <Breakpoint large up>
                            <Typography variant="h3" align="center">
                                The Club's Mission
                            </Typography>
                            <CardDivider />
                            <Typography style={{ lineHeight: "3.5rem" }} align="center" variant="h4">
                                {missionStatement}
                            </Typography>
                        </Breakpoint>
                        <Breakpoint medium down>
                            <Typography variant="h5" align="center">
                                The Club's Mission
                            </Typography>
                            <CardDivider />
                            <Typography style={{ lineHeight: "2.5rem" }} align="center" variant="h6">
                                {missionStatement}
                            </Typography>
                        </Breakpoint>
                    </ContentBackground>
                </div>
            </div>
        </PageFade>
    );
}