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
            zIndex: theme.zIndex.modal,
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

    return (
        <MobileContext.Consumer>
            {mobile => (
                <Backdrop onClick={handleClickedClose} className={classes.backdrop} open={clicked}>
                    <IconButton
                        className="close-backdrop-icon"
                        onClick={props.handleClickedClose}
                        title="Close"
                    >
                        <Close color="action" />
                    </IconButton>

                    <div>

                        <Typography variant="h4" align="center" className="lightBox-text" >
                            {clickedImg.title}
                        </Typography>

                        <Image
                            src={clickedImg.img}
                            style={{
                                position: "",
                                paddingTop: "",
                                backgroundColor: "transparent",
                                width: clickedImg.orientation === "horizontal" ? (mobile ? "90%" : "60%") : "fit-content",
                                margin: "auto",
                            }}
                            imageStyle={{
                                height: clickedImg.orientation === "horizontal" ? "" : "80vh",
                                width: clickedImg.orientation === "horizontal" ? "100%" : "",
                                maxWidth: "95%",
                                position: "",
                                border: `0.5rem solid ${COLORS.mainWhite}`,
                                borderRadius: "1rem",
                            }}
                        />

                    </div>
                </Backdrop>
            )}
        </MobileContext.Consumer>
    );
}