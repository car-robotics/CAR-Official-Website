import React from "react";
import { Divider } from "@material-ui/core";
import { COLORS } from "./COLORS";

export default function GoldDivider(props: any) {
    return (
        <Divider style={{ backgroundColor: COLORS.schoolGold, margin: "1rem" }} variant="middle" {...props} />
    );
}