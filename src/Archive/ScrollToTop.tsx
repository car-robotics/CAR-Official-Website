import React from "react";
import { Grow } from "@material-ui/core";
import ScrollToTopButton from "../Utils/ScrollToTopButton";
import { CSSProperties } from "@material-ui/styles";

interface ScrollToTopProps {
    show: boolean;
    style?: CSSProperties;
}

export default function ScrollToTop(props: ScrollToTopProps) {
    return (
        <Grow in={props.show}>
            <div style={{ margin: "-5rem" }}>
                <ScrollToTopButton
                    onClick={() => document.getElementById('image-collage')!.scrollTop = 0}
                    style={{ display: "block", margin: "auto", ...props.style }}
                />
            </div>
        </Grow>
    );
}