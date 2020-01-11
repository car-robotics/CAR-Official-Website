import React from "react";
import { Backdrop, IconButton, makeStyles, createStyles, Theme, Typography, Zoom, Fade } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { MobileContext } from "../Context/MobileContext";
import { Tile } from "./ImageList";
import "./Archive.scss";
import { COLORS } from "../Utils/COLORS";

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
        image_width = "";
        image_height = "90vh";
    } else {
        image_height = "";
        image_width = window.innerHeight > window.innerWidth ? "95vw" : "60vw";
    }

    return (
        <MobileContext.Consumer>
            {mobile => (
                <Fade mountOnEnter unmountOnExit in={clicked} timeout={{ enter: 500, exit: 500 }}>
                    <Backdrop className={classes.backdrop} open={true}>
                        <IconButton
                            className="close-backdrop-icon"
                            onClick={handleClickedClose}
                            title="Close"
                        >
                            <Close color="action" />
                        </IconButton>

                        <Zoom mountOnEnter unmountOnExit in={clicked} timeout={{ enter: 500 }}>
                            <div>
                                <img
                                    alt={clickedImg.title}
                                    src={clickedImg.img}
                                    style={{
                                        width: image_width,
                                        height: image_height,
                                        border: `0.25rem solid ${COLORS.schoolGold}`
                                    }}
                                />

                                <Typography variant="h4" align="center" className="lightBox-text" >
                                    {clickedImg.title}
                                </Typography>
                            </div>
                        </Zoom>

                    </Backdrop>
                </Fade>
            )}
        </MobileContext.Consumer>
    );
}