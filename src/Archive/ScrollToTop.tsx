import React from "react";
import EasyToSeeTooltip from "../Utils/EasyToSeeTooltip";
import { IconButton, Grow } from "@material-ui/core";
import { KeyboardArrowUp } from "@material-ui/icons";

interface ScrollToTopProps { show: boolean }

export default function ScrollToTop(props: ScrollToTopProps) {
    const collageDiv = document.getElementsByClassName('MuiGridList-root');

    return (
        <Grow in={props.show}>
            <div style={{ margin: "-4rem" }}>
                <EasyToSeeTooltip title="Scroll to Top">
                    <IconButton onClick={() => { collageDiv[0].scrollTop = 0 }} className="collage-scroll-icon" >
                        <KeyboardArrowUp />
                    </IconButton>
                </EasyToSeeTooltip>
            </div>
        </Grow>
    );
}