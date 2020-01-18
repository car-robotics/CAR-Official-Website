import React from "react";
import { Typography, makeStyles, createStyles, Theme, Paper, Divider } from "@material-ui/core";
import Image from "material-ui-image";
import { DocumentTitle } from "../Utils/DocumentTitle";
import "./Home.scss";
import PageFade from "../Utils/PageFade";

import { MobileContext } from "../Context/MobileContext";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        missionCard: {
            margin: "auto",
            maxHeight: "90vh",
            overflow: "auto",
            maxWidth: "90rem",
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
        <MobileContext.Consumer>
            {mobile => (
                <PageFade>
                    <main>
                        <section className="electrical">
                            <Image
                                src={"/CARLogoPrimary.png"}
                                style={{
                                    backgroundColor: "transparent",
                                    paddingTop: mobile ? "2rem" : "5rem",
                                }}
                                imageStyle={{
                                    position: "relative",
                                    display: "block",
                                    width: mobile ? "90%" : "",
                                    height: mobile ? "" : "75vh",
                                    margin: "2rem auto",
                                }}
                            />
                        </section>
                        <section className="mechanical">
                            <Paper
                                elevation={24}
                                className={classes.missionCard}
                                style={{
                                    width: mobile ? "85%" : "60%",
                                    padding: mobile ? "1rem" : "2rem",
                                }}
                            >
                                <Typography variant="h3" align="center">
                                    The Club's Mission
                                    </Typography>
                                <Divider />
                                <Typography style={{ lineHeight: mobile ? "2.5rem" : "3.5rem" }} align="center" variant="h4">
                                    {missionStatement}
                                </Typography>
                            </Paper>
                        </section>
                    </main>
                </PageFade>
            )}
        </MobileContext.Consumer>
    );
}