import React from "react";
import { Backdrop, IconButton, makeStyles, createStyles, Theme, Typography, Zoom } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { MobileContext } from "../Context/MobileContext";
import { Tile } from "./ImageList";
import "./Archive.scss";
import { COLORS } from "../Themes/COLORS";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        backdrop: {
            zIndex: theme.zIndex.drawer + 201,
            overflow: "auto",
            backgroundColor: "#000000bf",
            userSelect: "none",
        },
    }),
);

interface LightboxProps {
    clickedImg: Tile;
    clicked: boolean;
    handleClickedClose: () => void;
}


export default function Lightbox(props: LightboxProps) {
    const classes = useStyles();

    const { clicked, clickedImg, handleClickedClose } = props;

    let image_width: string, image_height: string;

    if (clickedImg.orientation === "vertical") {
        if (window.innerHeight > window.innerWidth) {
            image_width = "90vw";
            image_height = "";
        } else {
            image_width = "";
            image_height = "90vh";
        }
    } else {
        image_height = "";
        image_width = window.innerHeight > window.innerWidth ? "95vw" : "60vw";
    }

    return (
        <MobileContext.Consumer>
            {mobile => (
                <Backdrop unmountOnExit mountOnEnter className={classes.backdrop} open={clicked} transitionDuration={500}>
                    <IconButton
                        className="close-backdrop-icon"
                        onClick={handleClickedClose}
                        title="Close"
                    >
                        <Close color="action" />
                    </IconButton>

                    <Zoom mountOnEnter unmountOnExit in={clicked} timeout={{ enter: 500 }}>
                        <div style={{ position: "relative" }}>
                            <img
                                alt={clickedImg.title}
                                src={clickedImg.img}
                                style={{
                                    width: image_width,
                                    height: image_height,
                                    border: `0.25rem solid ${COLORS.schoolGold}`
                                }}
                            />

                            <Typography variant="h2" align="center" className="lightBox-text" >
                                {clickedImg.title}
                            </Typography>
                        </div>
                    </Zoom>
                </Backdrop>
            )}
        </MobileContext.Consumer>
    );
}