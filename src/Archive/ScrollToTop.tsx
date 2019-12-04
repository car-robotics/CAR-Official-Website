import React from "react";
import EasyToSeeTooltip from "../Utils/EasyToSeeTooltip";
import { IconButton } from "@material-ui/core";
import { KeyboardArrowUp } from "@material-ui/icons";

export default function ScrollToTop(){
    const collageDiv = document.getElementsByClassName('MuiGridList-root');
    return (
        <div>
            <EasyToSeeTooltip title="Scroll to Top">
                <IconButton onClick={() => {collageDiv[0].scrollTop = 0}} className="collage-scroll-icon" >
                    <KeyboardArrowUp/>
                </IconButton>
            </EasyToSeeTooltip>
        </div>
    );
}