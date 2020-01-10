import React from "react";
import { Link, Card, Tooltip } from "@material-ui/core";
import Image from "material-ui-image";
import "./Sponsors.scss";
import { COLORS } from "../Utils/COLORS";
import SponsorCardCover from "./SponsorCardCover";

interface SponsorsCardProps {
    orgName: string;
    orgLink?: string;
    img: string;
}

export default function SponsorCard(props: SponsorsCardProps) {
    const [showCover, setShowCover] = React.useState<boolean>(false);

    const { orgName, orgLink, img } = props;
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
                                    width: "13rem",
                                    height: "15rem",
                                    transition: ".5s ease",
                                    backfaceVisibility: "hidden",
                                    borderStyle: "solid",
                                    borderRadius: "10px",
                                    borderWidth: "12px",
                                    borderColor: COLORS.darkColor,
                                }}
                                style={{
                                    width: "14.5rem",
                                    height: "16.5rem",
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
                            width: "13rem",
                            height: "15rem",
                            transition: ".5s ease",
                            backfaceVisibility: "hidden",
                            borderStyle: "solid",
                            borderRadius: "10px",
                            borderWidth: "12px",
                            borderColor: COLORS.darkColor,
                        }}
                        style={{
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