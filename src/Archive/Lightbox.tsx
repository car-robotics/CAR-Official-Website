import React from "react";
import { Backdrop, IconButton, makeStyles, createStyles, Theme } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import Image from "material-ui-image";
import { COLORS } from "../Utils/COLORS";
import { useCurrentWidth } from "react-socks";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        backdrop: {
            zIndex: 2000,
            overflow: "auto",
            backgroundColor: "#000000bf",
            userSelect: "none",
        },
    }),
);

interface LightboxProps {
    clicked: boolean;
    img: string;
    orientation: "vertical" | "horizontal";
    handleClickedClose: () => void;
}


export default function Lightbox(props: LightboxProps) {
    const classes = useStyles();
    const mobile = useCurrentWidth() < 1000;

    return (
        <Backdrop onClick={props.handleClickedClose} className={classes.backdrop} open={props.clicked}>
            <IconButton
                className="close-backdrop-icon"
                onClick={props.handleClickedClose}
                title="Close"
            >
                <Close htmlColor={COLORS.mainWhite} />
            </IconButton>
            <Image
                src={props.img}
                style={{
                    position: "",
                    paddingTop: "",
                    backgroundColor: "transparent",
                    width: props.orientation === "horizontal" ? (mobile ? "90%" : "60%") : "",
                    height: props.orientation === "horizontal" ? "" : "90%",
                    margin: "auto",
                }}
                imageStyle={{
                    height: props.orientation === "horizontal" ? "" : "100%",
                    width: props.orientation === "horizontal" ? "100%" : "",
                    position: "",
                    border: `0.5rem solid ${COLORS.mainWhite}`,
                    borderRadius: "1rem",
                }}
            />
        </Backdrop>
    );
}