import React from "react";
import { Grow } from "@material-ui/core";
import ScrollToTopButton from "../Utils/ScrollToTopButton";

interface ScrollToTopProps { show: boolean }

export default function ScrollToTop(props: ScrollToTopProps) {
    const collageDiv = document.getElementsByClassName('MuiGridList-root');

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