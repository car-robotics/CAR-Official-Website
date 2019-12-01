import React from "react";
import { Typography, IconButton } from "@material-ui/core";
import { Instagram, Facebook } from "@material-ui/icons";
import EasyToSeeTooltip from "../Utils/EasyToSeeTooltip";
import "./Home.scss";

export default function Social(props: any) {
    const { CardDivider } = props;
    return (
        <div className="side-content">
            <Typography variant="h4">
                Support us on Social Media!
            </Typography>
            <CardDivider />
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
        </div>
    );
}