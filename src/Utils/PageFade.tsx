import React from "react";
import { Fade } from "@material-ui/core";

export default function PageFade(props: any) {
    return (
        <Fade in={true} style={{ transitionDelay: "400ms" }} timeout={{ enter: 1250, exit: 1250 }}>
            {props.children}
        </Fade>
    );
}