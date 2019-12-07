import React from "react";
import EasyToSeeTooltip from "./EasyToSeeTooltip";
import { COLORS } from "./COLORS";
import { Link } from "@material-ui/core";

interface GreenLinkProps {
    link: string;
    text: string;
    placement?: string;
}

export default function GreenLink(props: GreenLinkProps) {
    return (
        <EasyToSeeTooltip placement={props.placement ? props.placement : "bottom"} title={props.link}>
            <Link target="_blank" href={props.link} style={{ color: COLORS.linkGreen }}>
                {props.text}
            </Link>
        </EasyToSeeTooltip>
    );
}