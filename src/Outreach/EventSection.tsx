import React from "react";
import Image from "material-ui-image";
import { Typography, Paper, Divider } from "@material-ui/core";
import "./Outreach.scss";

import { COLORS } from "../Utils/COLORS";
import { MobileContext } from "../Context/MobileContext";
import { Tile } from "../Archive/ImageList";

interface EventSectionProps {
    eventName: string;
    supportingText: string;
    images: Tile[];
    onClick: (img: Tile) => void;
}

export default function EventSection(props: EventSectionProps) {

    return (
        <MobileContext.Consumer>
            {mobile => (
                <div style={{ margin: mobile ? "3rem 0" : "4rem 0" }}>
                    <Paper elevation={24} className="containers" style={{ padding: mobile ? "1rem 0rem" : "" }}>
                        <Typography align="center" style={{ padding: "0 1rem" }} variant="h2">
                            {props.eventName}
                        </Typography>
                        <Divider />
                        <div className="img">
                            {props.images.map((img) => {
                                return (
                                    <Image
                                        key={img.img}
                                        onClick={() => props.onClick(img)}
                                        style={{
                                            textAlign: "center",
                                            backgroundColor: "transparent",
                                            paddingTop: "0",
                                        }}
                                        imageStyle={{
                                            position: "inherit",
                                            width: mobile ? "20rem" : "40rem",
                                            height: mobile ? "15rem" : "30rem",
                                            margin: "0.75rem",
                                            boxShadow: `0px 0px 10px ${COLORS.schoolGold}`,
                                            borderRadius: "0.5rem",
                                        }}
                                        aspectRatio={4 / 3}
                                        src={img.img}
                                    />
                                );
                            })}
                        </div>
                        <Divider />
                        <Typography className="supporting-text" align="center" variant="h4" >
                            {props.supportingText}
                        </Typography>
                    </Paper>
                </div>
            )}
        </MobileContext.Consumer>
    );
}