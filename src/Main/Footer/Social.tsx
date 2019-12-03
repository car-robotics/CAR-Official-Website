import React from "react";
import { Typography, IconButton } from "@material-ui/core";
import { Instagram, Facebook } from "@material-ui/icons";
import EasyToSeeTooltip from "../../Utils/EasyToSeeTooltip";

export default function Social() {
    return (
        <>
            <Typography variant="h5">
                Support us on Social Media!
            </Typography>
            <EasyToSeeTooltip title="https://www.instagram.com/car_robotics/">
                <IconButton href="https://www.instagram.com/car_robotics/" target="_blank">
                    <Instagram fontSize="large" htmlColor="#B3A369" />
                </IconButton>
            </EasyToSeeTooltip>
            <EasyToSeeTooltip title="https://www.facebook.com/CharlotteAreaRobotics/">
                <IconButton href="https://www.facebook.com/CharlotteAreaRobotics/" target="_blank">
                    <Facebook fontSize="large" htmlColor="#B3A369" />
                </IconButton>
            </EasyToSeeTooltip>
        </>
    );
}