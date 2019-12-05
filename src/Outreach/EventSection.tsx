import React from "react";
import Image from "material-ui-image";
import { Typography } from "@material-ui/core";
import "./Outreach.scss";
import { ContentBackground } from "../Utils/ContentBackground";
import GoldDivider from "../Utils/GoldDivider";
import { COLORS } from "../Utils/COLORS";

interface EventSectionProps {
    eventName: string;
    supportingText: string;
    images: string[];
    onClick: (img: string) => void;
}

export default function EventSection(props: EventSectionProps) {
    return (
        <div style={{ margin: "4rem" }}>
            <ContentBackground elevation={24} className="containers">
                <Typography align="center" variant="h2">
                    {props.eventName}
                </Typography>
                <GoldDivider />
                <div className="img">
                    {props.images.map((img) => {
                        return (
                            <Image
                                key={img}
                                onClick={() => props.onClick(img)}
                                style={{
                                    textAlign: "center",
                                    backgroundColor: "transparent",
                                    paddingTop: "0",
                                }}
                                imageStyle={{
                                    position: "inherit",
                                    width: "40rem",
                                    height: "30rem",
                                    margin: "0.75rem",
                                    boxShadow: `0px 0px 10px ${COLORS.schoolGold}`,
                                    borderRadius: "0.5rem",
                                }}
                                aspectRatio={4 / 3}
                                src={img}
                            />
                        );
                    })}
                </div>
                <GoldDivider />
                <Typography className="supporting-text" align="center" variant="h5" >
                    {props.supportingText}
                </Typography>
            </ContentBackground>
        </div>
    );
}