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

    const footerContent = [
        <Social />,
        <Interest />,
        <PayPal />,
        <Contact />,
    ]

    return (
        <div className="footer">
            {footerContent.map((element) => {
                return (
                    <>
                        <div style={{ width: "20%" }}>
                            {element}
                        </div>
                        <FooterDivider orientation="vertical"/>
                    </>
                );
            })}
            <EasyToSeeTooltip title="Scroll to Top">
                <IconButton className="scroll-to-top" onClick={() => window.scrollTo(0, 0)}>
                    <KeyboardArrowUp htmlColor="#FFF" />
                </IconButton>
            </EasyToSeeTooltip>
        </div>
    );
}