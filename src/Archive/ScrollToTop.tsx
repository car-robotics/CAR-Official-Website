import React from "react";
import { Grow } from "@material-ui/core";
import ScrollToTopButton from "../Utils/ScrollToTopButton";

interface ScrollToTopProps {
    show: boolean;
    forceScrollToTop: boolean;
    resetForceToScroll: () => any;
}

export default function ScrollToTop(props: ScrollToTopProps) {
    const collageDiv = document.getElementsByClassName('MuiGridList-root');

    if (props.forceScrollToTop) {
        collageDiv[0].scrollTop = 0;
        props.resetForceToScroll()
    }

    return (
        <Grow in={props.show}>
            <div style={{ margin: "-4rem" }}>
                <ScrollToTopButton
                    onClick={() => collageDiv[0].scrollTop = 0}
                    style={{ display: "block", margin: "auto" }}
                />
            </div>
        </Grow>
    );
}