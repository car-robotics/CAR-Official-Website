import React from "react";
import { withStyles, IconButton } from "@material-ui/core";
import { KeyboardArrowUp } from '@material-ui/icons';
import Social from "./Social";
import Interest from "./Interest";
import PayPal from "./PayPal";
import { Email } from "@material-ui/icons";
import GoldDivider from "../../Utils/GoldDivider";
import EasyToSeeTooltip from "../../Utils/EasyToSeeTooltip";
import "../Main.scss"

const FooterDivider = withStyles({
    root: {
        height: "80%",
    },
})(GoldDivider);

export default function Footer() {

    return (
        <div className="footer">
            <Social />
            <FooterDivider orientation="vertical"/>
            <Interest />
            <FooterDivider orientation="vertical"/>
            <PayPal />
            <EasyToSeeTooltip title="Scroll to Top">
                <IconButton onClick={() => window.scrollTo(0,0)}>
                    <KeyboardArrowUp htmlColor="white"/>
                </IconButton>
            </EasyToSeeTooltip>
        </div>
    );
}