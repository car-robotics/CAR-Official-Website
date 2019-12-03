import React from "react";
import { Typography } from "@material-ui/core";
import EasyToSeeTooltip from "../../Utils/EasyToSeeTooltip";
import { GreenLink } from "../../Competition/Competition";

export default function Interest() {
    return (
        <div style={{ padding: "1rem" }}>
            <Typography variant="h5">
                Interested in joining CAR?
            </Typography>
            <Typography variant="h6" style={{ padding: "12px" }}>
                <EasyToSeeTooltip title="https://ninerengage.uncc.edu/organization/car-robotics">
                    <GreenLink target="_blank" href="https://ninerengage.uncc.edu/organization/car-robotics">
                        Visit our Niner Engage page!
                    </GreenLink>
                </EasyToSeeTooltip>
            </Typography>
        </div>
    );
}