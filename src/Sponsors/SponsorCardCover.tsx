import React from "react";
import { ContentBackground } from "../Utils/ContentBackground";
import { Slide, Typography, makeStyles, Theme, createStyles } from "@material-ui/core";

interface SponsorCardCoverProps {
    text: string;
    show: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        container: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
            opacity: 0.95,
        },
    }),
);

export default function SponsorCardCover(props: SponsorCardCoverProps) {
    const classes = useStyles();
    return (
        <Slide in={props.show} direction="right" mountOnEnter unmountOnExit timeout={{ enter: 750, exit: 1000 }}>
            <div className="sponsorCover">
                <ContentBackground className={classes.container} >
                    <Typography align="center" variant="h6">
                        {props.text}
                    </Typography>
                </ContentBackground>
            </div>
        </Slide>
    );
}