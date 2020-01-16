import React from "react";
import { Link, Card, Tooltip } from "@material-ui/core";
import Image from "material-ui-image";
import "./Sponsors.scss";
import { COLORS } from "../Themes/COLORS";
import SponsorCardCover from "./SponsorCardCover";

interface SponsorsCardProps {
    orgName: string;
    orgLink?: string;
    img: string;
    square?: boolean;
}

export default function SponsorCard(props: SponsorsCardProps) {
    const [showCover, setShowCover] = React.useState<boolean>(false);

    const { orgName, orgLink, img, square } = props;
    return (
        <>
            <Card
                onMouseEnter={() => setShowCover(true)}
                onMouseLeave={() => setShowCover(false)}
                className="orgCard"
            >
                {orgLink && <Tooltip title={`${orgName} - ${orgLink}`}>
                    <Link href={orgLink} target="_blank">
                        <div className="card-cover-container">
                            <SponsorCardCover show={showCover} text={"Learn More"} />
                            <Image
                                src={img}
                                imageStyle={{
                                    display: "block",
                                    position: "static",
                                    transition: ".5s ease",
                                    backfaceVisibility: "hidden",
                                }}
                                style={{
                                    border: `12px solid ${COLORS.darkColor}`,
                                    borderRadius: "1rem",
                                    width: "14.5rem",
                                    height: square ? "14.5rem" : "16.5rem",
                                    padding: square ? "1rem 0" : "",
                                    paddingTop: 0,
                                }}
                            />
                        </div>
                    </Link>
                </Tooltip>}

                {!orgLink && <div className="card-cover-container">
                    <SponsorCardCover show={showCover} text={orgName} />
                    <Image
                        src={img}
                        imageStyle={{
                            display: "block",
                            position: "static",
                            transition: ".5s ease",
                            backfaceVisibility: "hidden",
                        }}
                        style={{
                            border: `12px solid ${COLORS.darkColor}`,
                            borderRadius: "1rem",
                            width: "14.5rem",
                            height: "16.5rem",
                            paddingTop: 0,
                        }}
                    />
                </div>}
            </Card>
        </>
    );
}    