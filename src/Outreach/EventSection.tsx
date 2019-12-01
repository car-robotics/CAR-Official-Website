import React from "react";
import Image from "material-ui-image";
import { Typography, withStyles, Paper } from "@material-ui/core";

interface EventSectionProps {
    eventName: string;
    supportingText: string;
    images: string[];
}

const EventBackground = withStyles({
    root: {
        backgroundColor: "#212B31",
        color: "#B3A369",
        padding: "1rem",
        width: "fit-content",
        maxWidth: "60rem",
        margin: "auto",
    },
})(Paper);

export default function EventSection(props: EventSectionProps) {
    return (
        <div style={{ margin: "5rem" }}>
            <EventBackground>
                <Typography align="center" variant="h3" style={{ margin: "0 2rem" }}>
                    {props.eventName}
                </Typography>
            </EventBackground>
            <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
                {props.images.map((img) => {
                    return (
                        <Image
                            key={img}
                            style={{
                                textAlign: "center",
                                backgroundColor: "transparent",
                                paddingTop: "0",
                            }}
                            imageStyle={{
                                position: "inherit",
                                width: "40rem",
                                height: "30rem",
                                border: "0.5rem solid #212B31",
                                marginTop: "-0.75rem",
                            }}
                            aspectRatio={4 / 3}
                            src={img}
                        />
                    );
                })}
            </div>
            <EventBackground style={{ marginTop: "-0.75rem" }}>
                <Typography align="center" variant="h5" >
                    {props.supportingText}
                </Typography>
            </EventBackground>
        </div>
    );
}