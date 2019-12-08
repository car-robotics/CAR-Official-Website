import React from "react";
import { Typography } from "@material-ui/core";
import OfficerCard, { OfficerCardProps } from "./OfficerCard";
import GoldDivider from "../Utils/GoldDivider";
import { ContentBackground } from "../Utils/ContentBackground";

interface AboutSectionProps {
    title: string,
    subtitle: string,
    content: OfficerCardProps[],
}

export default function AboutSection(props: AboutSectionProps) {
    return (
        <ContentBackground elevation={24} className="card-group">
            <Typography variant="h2" align="center">
                {props.title}
            </Typography>
            <Typography style={{ paddingTop: "1rem" }} variant="h4" align="center">
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
        </ContentBackground>
    );
}