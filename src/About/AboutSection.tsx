import React from "react";
import { withStyles } from "@material-ui/styles";
import { Paper, Typography } from "@material-ui/core";
import OfficerCard, { OfficerCardProps } from "./OfficerCard";
import GoldDivider from "../Utils/GoldDivider";

const AboutBackground = withStyles({
    root: {
        backgroundColor: "#212B31",
        borderRadius: "1rem",
    },
})(Paper);

interface AboutSectionProps {
    title: string,
    subtitle: string,
    content: OfficerCardProps[],
}

export default function AboutSection(props: AboutSectionProps) {
    return (
        <AboutBackground elevation={24} className="card-group">
            <Typography style={{ color: "#B3A369" }} variant="h2" align="center">
                {props.title}
            </Typography>
            <Typography style={{ color: "#B3A369", paddingTop: "1rem" }} variant="h5" align="center">
                {props.subtitle}
            </Typography>
            <GoldDivider />
            <div className="card-container">
                {
                    props.content.map((cardContent: OfficerCardProps) => {
                        return (
                            <OfficerCard
                                key={cardContent.name}
                                image={cardContent.image}
                                name={cardContent.name}
                                officer={cardContent.officer}
                                linkedIn={cardContent.linkedIn}
                            />
                        );
                    })
                }
            </div>
        </AboutBackground>
    );
}