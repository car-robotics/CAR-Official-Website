import React from "react";
import { Link, Tooltip } from "@material-ui/core";
import { TooltipProps } from "@material-ui/core/Tooltip";

interface GreenLinkProps {
    link: string;
    text: string;
    placement?: TooltipProps["placement"];
}

export default function GreenLink(props: GreenLinkProps) {
    return (
        <Tooltip placement={props.placement ? props.placement : "bottom"} title={props.link} >
            <Link target="_blank" href={props.link} style={{ fontWeight: 600 }}>
                {props.text}
            </Link>
        </Tooltip>
    );
}