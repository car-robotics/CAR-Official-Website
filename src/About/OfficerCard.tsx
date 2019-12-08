import React from "react";
import { Card, CardActionArea, CardMedia, CardContent, Typography, makeStyles, Theme, createStyles, Divider } from "@material-ui/core";
import EasyToSeeTooltip from "../Utils/EasyToSeeTooltip";
import { COLORS } from "../Utils/COLORS";
import { useCurrentWidth } from "react-socks";

export enum Officer {
    President = "President",
    VicePresident = "Vice President",
    Outreach = "Outreach",
    Treasurer = "Treasurer",
    Interim = "Interim VP",
    Developer = "Developer"
}

export interface OfficerCardProps {
    image: string;
    officer: Officer;
    linkedIn: string;
    name: string;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        officerCard: {
            maxWidth: "25rem",
            backgroundColor: COLORS.schoolGold,
            border: "0.5rem solid black",
            borderRadius: "0.25rem",
            boxShadow: "0px 0px 10px black",
            "&:hover": {
                boxShadow: `0px 0px 10px ${COLORS.mainWhite}`,
            }
        },
        officerPicture: {
            height: "30vh",
            backgroundColor: "#424242",
        },
    }),
);

export default function OfficerCard(props: OfficerCardProps) {
    const mobile = useCurrentWidth() < 1000;
    const classes = useStyles();
    return (
        <EasyToSeeTooltip title={props.linkedIn}>
            <Card
                className={classes.officerCard}
                style={{
                    flexBasis: mobile ? "" : "20%",
                    margin: mobile ? "1rem auto" : "1rem",
                }}
            >
                <CardActionArea disableRipple focusRipple={false} href={props.linkedIn} target="_blank">
                    <CardMedia
                        image={props.image}
                        className={classes.officerPicture}
                    />
                    <CardContent>
                        <Typography align="center" variant="h4" style={{ color: COLORS.darkColor }}>
                            {props.officer}
                        </Typography>
                        <Divider />
                        <Typography align="center" variant="h5" style={{ color: COLORS.darkColor }}>
                            {props.name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </EasyToSeeTooltip >
    );
}