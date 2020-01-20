import React from "react";
import {
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography,
    makeStyles,
    Theme,
    createStyles,
    Divider,
    Tooltip
} from "@material-ui/core";
import { COLORS } from "../Themes/COLORS";
import { MobileContext } from "../Context/MobileContext";

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
            transition: "transform linear 250ms, box-shadow linear 250ms",
            "&:hover": {
                boxShadow: `-5px 5px 5px 2px ${COLORS.mainWhite}`,
                transform: "translate(10px, -10px)",
            }
        },
        divider: {
            backgroundColor: theme.palette.background.paper,
            margin: "0.25rem",
        },
        officerPicture: {
            height: "40vh",
            backgroundColor: "#424242",
        },
        officerText: {
            borderTop: "0.5rem solid black",
            boxShadow: "inset 0 0 10px black",
            color: theme.palette.text.secondary,
        }
    }),
);

export default function OfficerCard(props: OfficerCardProps) {
    const classes = useStyles();
    return (
        <MobileContext.Consumer>
            {mobile => (
                <Tooltip title={props.linkedIn}>
                    <Card
                        className={classes.officerCard}
                        style={{
                            flexBasis: mobile ? "" : "20%",
                            minWidth: "17rem",
                            margin: mobile ? "1rem auto" : "1rem",
                        }}
                    >
                        <CardActionArea disableRipple focusRipple={false} href={props.linkedIn} target="_blank" style={{ height: "100%" }}>
                            <CardMedia
                                image={props.image}
                                className={classes.officerPicture}
                            />
                            <CardContent className={classes.officerText}>
                                <Typography align="center" variant="h3">
                                    {props.officer}
                                </Typography>
                                <Divider className={classes.divider} />
                                <Typography align="center" variant="h4">
                                    {props.name}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Tooltip >
            )}
        </MobileContext.Consumer >
    );
}