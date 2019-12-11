import React from "react";
import { Divider } from "@material-ui/core";

export default function GoldDivider(props: any) {
    return (
        <Divider style={{ margin: "1rem" }} variant="middle" {...props} />
    );
}