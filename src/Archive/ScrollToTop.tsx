import React from "react";
import { Grow } from "@material-ui/core";
import ScrollToTopButton from "../Utils/ScrollToTopButton";
import { CSSProperties } from "@material-ui/styles";

interface ScrollToTopProps {
    show: boolean;
    forceScrollToTop: boolean;
    resetForceToScroll: () => any;
    style?: CSSProperties;
}

export default function ScrollToTop(props: ScrollToTopProps) {
    const collageDiv = document.getElementsByClassName('MuiGridList-root');

    if (props.forceScrollToTop) {
        collageDiv[0].scrollTop = 0;
        props.resetForceToScroll()
    }

    return (
        <Grow in={props.show}>
            <div style={{ margin: "-5rem" }}>
                <ScrollToTopButton
                    onClick={() => collageDiv[0].scrollTop = 0}
                    style={{ display: "block", margin: "auto", ...props.style }}
                />
            </div>
        </Grow>
    );
}