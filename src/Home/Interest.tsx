import React from "react";
import { Typography, Link } from "@material-ui/core";
import EasyToSeeTooltip from "../Utils/EasyToSeeTooltip";
import "./Home.scss";

export default function Interest(props: any) {
    const { CardDivider } = props;
    return (
        <div className="side-content">
            <Typography variant="h4">
                Interested in joining CAR?
                <CardDivider />
                <EasyToSeeTooltip title="https://ninerengage.uncc.edu/organization/car-robotics">
                    <Link style={{ color: "#1E9635" }} target="_blank" href="https://ninerengage.uncc.edu/organization/car-robotics">
                        Visit our Niner Engage page!
                    </Link>
                </EasyToSeeTooltip>
            </Typography>
        </div>
    );
}