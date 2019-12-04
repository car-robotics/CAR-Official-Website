import React from "react";
import { Link, withStyles, Card } from "@material-ui/core";
import EasyToSeeTooltip from "../Utils/EasyToSeeTooltip";
import Image from "material-ui-image";
import { ListItem } from "../Sponsors/LevelCard";
import "./Sponsors.scss";
import { COLORS } from "../Utils/COLORS";

interface SponsorsCardProps {
    orgName: string;
    orgLink?: string;
    img: string;
}

const OrgCard = withStyles({
    root: {
        display: "flex",
        fontFamily: "Inconsolata",
        textAlign: "center",
        backgroundColor: "inherit",
        borderRadius: "1rem",
        alignItems: "Center",
        margin: "auto",
    },
})(Card);

export default function SponsorCard(props: SponsorsCardProps) {
    const { orgName, orgLink, img } = props;
    return (
        <>
            <OrgCard>
                {orgLink && <EasyToSeeTooltip title={`${orgName} - ${orgLink}`}>
                    <Link href={orgLink} target="_blank">
                        <div className="container">
                            <Image
                                src={img}
                                imageStyle={{
                                    display: "block",
                                    width: "13rem",
                                    height: "15rem",
                                    transition: ".5s ease",
                                    backfaceVisibility: "hidden",
                                    borderStyle: "solid",
                                    borderRadius: "10px",
                                    borderWidth: "12px",
                                    borderColor: COLORS.darkBlue,
                                }}
                                style={{
                                    width: "14.5rem",
                                    height: "16.5rem",
                                    paddingTop: 0,
                                }}
                            />
                            <div className="overlay backgroundBlack">
                                <ListItem align="center" className="middleText" style={{ fontSize: "1.5rem" }}>
                                    Learn More
                                </ListItem>
                            </div>
                        </div>
                    </Link>
                </EasyToSeeTooltip>}

                {!orgLink && <div className="container">
                    <Image
                        src={img}
                        imageStyle={{
                            display: "block",
                            width: "13rem",
                            height: "15rem",
                            transition: ".5s ease",
                            backfaceVisibility: "hidden",
                            borderStyle: "solid",
                            borderRadius: "10px",
                            borderWidth: "12px",
                            borderColor: COLORS.darkBlue,
                        }}
                        style={{
                            width: "14.5rem",
                            height: "16.5rem",
                            paddingTop: 0,
                        }}
                    />
                    <div className="overlay backgroundBlack">
                        <ListItem align="center" className="middleText" style={{ fontSize: "1.5rem" }}>
                            {orgName}
                        </ListItem>
                    </div>
                </div>}
            </OrgCard>
        </>
    );
}    