import React from "react";
import { Typography } from "@material-ui/core";
import GreenLink from "../../Utils/GreenLink";

export default function Interest() {
    return (
        <>
            <Typography variant="h5">
                Interested in joining CAR?
            </Typography>
            <Typography variant="h6" style={{ padding: "12px" }}>
                <GreenLink link="https://ninerengage.uncc.edu/organization/car-robotics" text="Niner Engage!" />
            </Typography>
        </>
    );
}