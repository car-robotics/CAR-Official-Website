import React from "react";
import { Typography, IconButton } from "@material-ui/core";
import { Email } from "@material-ui/icons";
import EasyToSeeTooltip from "../../Utils/EasyToSeeTooltip";
import { COLORS } from "../../Utils/COLORS";

export default function Contact() {
    return (
        <>
            <Typography variant="h5">
                Become a sponsor!
            </Typography>
            <EasyToSeeTooltip title="mailto:car-robotics@uncc.edu">
                <IconButton href="mailto:car-robotics@uncc.edu">
                    <Typography variant="h6" style={{ color: COLORS.schoolGold, paddingRight: "10px" }}>
                        Email us:
                    </Typography>
                    <Email fontSize="large" htmlColor={COLORS.schoolGold} />
                </IconButton>
            </EasyToSeeTooltip>
        </>
    );
}