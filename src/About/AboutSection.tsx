import React from "react";
import { Typography, Paper, Divider } from "@material-ui/core";
import OfficerCard, { OfficerCardProps } from "./OfficerCard";


interface AboutSectionProps {
    title: string,
    subtitle: string,
    content: OfficerCardProps[],
}

export default function AboutSection(props: AboutSectionProps) {
    return (
        <Paper elevation={24} className="card-group">
            <Typography variant="h2" align="center">
                {props.title}
            </Typography>
            <Typography style={{ paddingTop: "1rem" }} variant="h4" align="center">
                {props.subtitle}
            </Typography>
            <Divider />
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
        </Paper>
    );
}