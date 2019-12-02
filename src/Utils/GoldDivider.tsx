import React from "react";
import { Divider } from "@material-ui/core";

export default function GoldDivider(props: any) {
    return (
        <Divider style={{ backgroundColor: "#B3A369", margin: "1rem" }} variant="middle" {...props} />
    );
}