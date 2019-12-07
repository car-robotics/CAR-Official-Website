import React from "react";
import { Link, withStyles, Card } from "@material-ui/core";
import EasyToSeeTooltip from "../Utils/EasyToSeeTooltip";
import Image from "material-ui-image";
import "./Sponsors.scss";
import { COLORS } from "../Utils/COLORS";
import SponsorCardCover from "./SponsorCardCover";
import { useCurrentWidth } from "react-socks";

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
    const [showCover, setShowCover] = React.useState<boolean>(false);

    const { orgName, orgLink, img } = props;
    return (
        <>
            <OrgCard
                onMouseEnter={() => setShowCover(true)}
                onMouseLeave={() => setShowCover(false)}
                style={{ marginTop: useCurrentWidth() < 1000 ? "1rem" : "", }}
            >
                {orgLink && <EasyToSeeTooltip title={`${orgName} - ${orgLink}`}>
                    <Link href={orgLink} target="_blank">
                        <div className="container">
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
                </EasyToSeeTooltip>}

                {!orgLink && <div className="container">
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
            </OrgCard>
        </>
    );
}    