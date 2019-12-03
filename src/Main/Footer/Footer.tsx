import React from "react";
import { withStyles, IconButton } from "@material-ui/core";
import { KeyboardArrowUp } from '@material-ui/icons';
import Social from "./Social";
import Interest from "./Interest";
import PayPal from "./PayPal";
import Contact from "./Contact";
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
            <FooterDivider orientation="vertical" />
            <Interest />
            <FooterDivider orientation="vertical" />
            <PayPal />
            <FooterDivider orientation="vertical" />
            <Contact />
            <EasyToSeeTooltip title="Scroll to Top">
                <IconButton className="scroll-to-top" onClick={() => window.scrollTo(0, 0)}>
                    <KeyboardArrowUp htmlColor="#FFF" />
                </IconButton>
            </EasyToSeeTooltip>
        </div>
    );
}