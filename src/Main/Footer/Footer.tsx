import React from "react";
import { withStyles } from "@material-ui/core";
import Social from "./Social";
import Interest from "./Interest";
import PayPal from "./PayPal";
import Contact from "./Contact";
import GoldDivider from "../../Utils/GoldDivider";
import "../Main.scss"
import ScrollToTopButton from "../../Utils/ScrollToTopButton";

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
            {footerContent.map((element, index) => {
                return (
                    // Using React Fragment instead of empty tag as we need a key for the fragment
                    <React.Fragment key={index}>
                        <div style={{ width: "20%" }}>
                            {element}
                        </div>
                        <FooterDivider orientation="vertical" />
                    </React.Fragment>
                );
            })}
            <ScrollToTopButton
                onClick={() => window.scrollTo(0, 0)}
                style={{ position: "absolute", right: "2rem" }}
            />
        </div>
    );
}