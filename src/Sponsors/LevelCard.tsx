import React from "react";
import { Paper, makeStyles, Theme, createStyles, Typography, withStyles } from "@material-ui/core";

interface LevelCardProps{
    level: "Gold" | "Silver" | "Bronze";
}

export const ListItem = withStyles({
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
        sectionCard: {
            display: "flex",
            color: "#212b31",
            boxShadow: "0px 0px 9px 2px black",
            padding: "10px",
            height: "21rem",
            width: "15rem",
            zIndex: 1,
        },
    }),
);

export default function LevelCard(props: LevelCardProps){

    const classes = useStyles();

    let backgroundGradient: string;
    let cardTitle;
    let listItems: string[];

    if (props.level === "Gold"){
        cardTitle = <>Gold Level<br />($250+)</>;
        backgroundGradient = "linear-gradient(to bottom left, #cea110, #ead286, #cea110)";
        listItems = [
            "Your logo on our t-shirts",
            "Same benefits as Silver & Bronze",
        ];
    } else if (props.level === "Silver"){
        cardTitle = <>Silver Level<br />($100+)</>;
        backgroundGradient = "linear-gradient(to top right, #484848, #c1c0c0,  #484848)";
        listItems = [
            "Your logo on our robot",
            "Same benefits as Bronze",
        ];
    } else {
        cardTitle = <>Bronze Level<br />($-100)</>;
        backgroundGradient = "linear-gradient(to top right, #5f3d00, #bda780, #6d4700)";
        listItems = [
            "A spot here on the sponsors page",
        ];
    }

    return(
        <Paper className={classes.sectionCard} style={{ backgroundImage: backgroundGradient }}>
            <Typography align="center" className="desc cBlack">
                <Typography className="secTitle" variant="h4">
                    {cardTitle}
                </Typography>
                <Typography variant="h5" className="leftAlign">
                    Includes:
                </Typography>
                {listItems.map((x: string) => {
                    return (
                        <ListItem>
                            {x}
                        </ListItem>
                    );
                })}
            </Typography>
        </Paper>
    );
}