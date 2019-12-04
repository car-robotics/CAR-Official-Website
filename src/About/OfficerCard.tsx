import React from "react";
import { Card, CardActionArea, CardMedia, CardContent, Typography, makeStyles, Theme, createStyles, Divider } from "@material-ui/core";
import EasyToSeeTooltip from "../Utils/EasyToSeeTooltip";
import { COLORS } from "../Utils/COLORS";

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
            height: "400px",
            width: "250px",
            margin: "20px",
            backgroundColor: COLORS.schoolGold,
            boxShadow: "0px 0px 10px black",
        },
        officerPicture: {
            height: "300px",
            backgroundColor: "#424242",
        },
    }),
);

export default function OfficerCard(props: OfficerCardProps) {

    const classes = useStyles();
    return (
        <EasyToSeeTooltip title={props.linkedIn}>
            <Card className={classes.officerCard}>
                <CardActionArea href={props.linkedIn} target="_blank">
                    <CardMedia
                        image={props.image}
                        className={classes.officerPicture}
                    />
                    <CardContent>
                        <Typography align="center" variant="h5" style={{ color: COLORS.darkBlue }}>
                            {props.officer}
                        </Typography>
                        <Divider />
                        <Typography align="center" variant="h6" style={{ color: COLORS.darkBlue }}>
                            {props.name}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        </EasyToSeeTooltip >
    );
}