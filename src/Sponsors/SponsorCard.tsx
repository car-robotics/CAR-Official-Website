import React from "react";
import { Link, withStyles, Card } from "@material-ui/core";
import EasyToSeeTooltip from "../Main/EasyToSeeTooltip";
import Image from "material-ui-image";
import "./Sponsors.scss";

interface SponsorsCardProps{
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
        boxShadow: "inset 0px 0px 9px 1px",
        margin: "auto 3rem",
    },
})(Card);

export default function SponsorCard(props: SponsorsCardProps) {
    const {orgName, orgLink, img} = props;
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
                                    borderColor: "#212b31",
                                }}
                                style={{
                                    width: "14.5rem",
                                    height: "16.5rem",
                                    paddingTop: 0,
                                }}
                            />
                            <div className="overlay backgroundBlack">
                                <div className="middleText cGold">Learn More</div>
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
                            borderColor: "#212b31",
                        }}
                        style={{
                            width: "14.5rem",
                            height: "16.5rem",
                            paddingTop: 0,
                        }}
                    />
                    <div className="overlay backgroundBlack">
                        <div className="middleText cGold">{orgName}</div>
                    </div>
                </div>}
            </OrgCard>
        </>
    );
}    