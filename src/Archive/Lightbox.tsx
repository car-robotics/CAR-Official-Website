import React from "react";
import { Backdrop, IconButton } from "@material-ui/core";
import EasyToSeeTooltip from "../Utils/EasyToSeeTooltip";
import { Close } from "@material-ui/icons";
import Image from "material-ui-image";
import { COLORS } from "../Utils/COLORS";

interface LightboxProps {
    clicked: boolean;
    img: string;
    handleClickedClose: () => void;
}

export default function Lightbox(props: LightboxProps) {
    return (
        <Backdrop style={{zIndex: 2000, overflow: "auto"}} open={props.clicked}>
            <EasyToSeeTooltip title="Close">
                <IconButton 
                    className="close-backdrop-icon" 
                    onClick={props.handleClickedClose} 
                >
                    <Close htmlColor={COLORS.mainWhite}/>
                </IconButton>
            </EasyToSeeTooltip>
            <Image 
                src={props.img}
                style={{
                    position: "",
                    paddingTop: "",
                    backgroundColor: "transparent",
                    width: "60%",
                    margin: "auto",
                }}
                imageStyle={{
                    height: "",
                    width: "100%",
                    position: "",
                    border: `0.5rem solid ${COLORS.mainWhite}`,
                    borderRadius: "1rem",
                }}
            />
        </Backdrop>
    );
}