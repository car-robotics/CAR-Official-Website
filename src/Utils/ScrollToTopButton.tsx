import React from "react";
import { IconButton, makeStyles, Theme, createStyles } from "@material-ui/core";
import { COLORS } from "./COLORS";
import { KeyboardArrowUp } from "@material-ui/icons";
import { CSSProperties } from "@material-ui/styles";
import EasyToSeeTooltip from "./EasyToSeeTooltip";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        icon: {
            backgroundColor: theme.palette.background.default,
            boxShadow: "0px 0px 10px black",
            "&:hover": {
                backgroundColor: theme.palette.background.default,
                boxShadow: `0px 0px 10px ${COLORS.mainWhite}`,
            },
        },
    }),
);

interface ScrollToTopButtonProps {
    onClick: () => void;
    style?: CSSProperties;
    tooltipText?: string;
}

export default function ScrollToTopButton(props: ScrollToTopButtonProps) {
    const classes = useStyles();
    return (
        <EasyToSeeTooltip title={props.tooltipText ? props.tooltipText : "Scroll to Top"}>
            <IconButton onClick={props.onClick} className={classes.icon} style={props.style}>
                <KeyboardArrowUp />
            </IconButton>
        </EasyToSeeTooltip>
    );
}