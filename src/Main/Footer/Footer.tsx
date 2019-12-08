import React from "react";
import "../Main.scss"
import ScrollToTopButton from "../../Utils/ScrollToTopButton";
import FooterContent from "./FooterContent";
import { MobileContext } from "../../Context/MobileContext";

export default function Footer() {
    return (
        <MobileContext.Consumer>
            {mobile => (
                <div className="footer">
                    <FooterContent mobile={mobile} />
                    <ScrollToTopButton
                        onClick={() => window.scrollTo(0, 0)}
                        style={mobile ? {} : { position: "absolute", right: "2rem" }}
                    />
                </div>
            )}
        </MobileContext.Consumer>
    );
}