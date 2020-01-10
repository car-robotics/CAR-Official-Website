import React from "react";
import { Backdrop, IconButton, makeStyles, createStyles, Theme, Typography } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import Image from "material-ui-image";
import { COLORS } from "../Utils/COLORS";
import { MobileContext } from "../Context/MobileContext";
import { Tile } from "./ImageList";

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
                <Backdrop className={classes.backdrop} open={clicked}>
                    <IconButton
                        className="close-backdrop-icon"
                        onClick={handleClickedClose}
                        title="Close"
                    >
                        <Close color="action" />
                    </IconButton>

                    <div style={{ position: "relative" }}>

                        <Image
                            src={clickedImg.img}
                            style={{
                                position: "",
                                paddingTop: "",
                                backgroundColor: "transparent",
                                width: image_width,
                                height: image_height,
                                margin: "auto",
                            }}
                            imageStyle={{
                                height: image_height,
                                width: clickedImg.orientation === "horizontal" ? "100%" : "",
                                position: "",
                                border: `0.2rem solid ${COLORS.schoolGold}`,
                                borderRadius: "0.25rem",
                            }}
                        />

                        <Typography variant="h4" align="center" className="lightBox-text" >
                            {clickedImg.title}
                        </Typography>

                    </div>
                </Backdrop>
            )}
        </MobileContext.Consumer>
    );
}