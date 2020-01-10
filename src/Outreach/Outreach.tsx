import React from "react";
import { Typography, Paper, Divider } from "@material-ui/core";
import { DocumentTitle } from "../Utils/DocumentTitle";
import PageFade from "../Utils/PageFade";
import EventSection from "./EventSection";

import Lightbox from "../Archive/Lightbox";
import { ArchiveCategory, Tile, defaultTileProps, tileData } from "../Archive/ImageList";

interface ClickedState {
    clicked: boolean;
    img: Tile;
}

export default function Outreach() {
    const [clickedImage, setClickedImage] = React.useState<ClickedState>({ clicked: false, img: defaultTileProps });

    DocumentTitle({ title: "Outreach" });

    const handleImageClick = (clickedImg: Tile) => {
        setClickedImage({ clicked: true, img: clickedImg });
    }

    const OutreachTileProps = (images: string[], title: string): Tile[] => {
        let tiles: Tile[] = [];
        images.forEach((img) => {
            tiles.push(
                {
                    img: img,
                    category: ArchiveCategory.outreach,
                    orientation: "horizontal",
                    title: title,
                } as Tile
            )
        })
        return tiles;
    }

    const getData = (category: string) => {
        let data: string[] = []
        for (let i = 0; i < tileData.length && data.length < 3; i++) {
            if (tileData[i].title === category) data.push(tileData[i].img);
        }
        return data;
    }

    return (
        <PageFade>
            <div>
                <Lightbox
                    clickedImg={clickedImage.img}
                    clicked={clickedImage.clicked}
                    handleClickedClose={() => setClickedImage({ clicked: false, img: defaultTileProps })}
                />

                <Paper elevation={24} className="header">
                    <Typography variant="h2" align="center">
                        Outreach
                    </Typography>
                    <Divider />
                    <Typography variant="h4" align="center">
                        We treat outreach very seriously throughout the school year.
                        As a club, we require volunteerig if members wish to to travel to competition.
                        Below are some of our past volunteering events, enjoy!
                    </Typography>
                </Paper>

                <EventSection
                    onClick={handleImageClick}
                    eventName={"Arduino Workshop"}
                    supportingText={"We hosted an information session at the Freshman Engineering Learning Community on the basics of Arduino."}
                    images={OutreachTileProps(getData("Arduino Workshop"), "Arduino Workshop")}
                />

                <EventSection
                    onClick={handleImageClick}
                    eventName={"Bob's Bash"}
                    supportingText={"Our club took some time during homecoming weekend to show off our progress on the robot for competition to UNCC Engineering faculty, staff, and alumni."}
                    images={OutreachTileProps(getData("Bobs Bash"), "Bob's Bash")}
                />

                <EventSection
                    onClick={handleImageClick}
                    eventName={"UNCC Explore"}
                    supportingText={"We attended Explore to show prospective students that UNCC is serious about robotics."}
                    images={OutreachTileProps(getData("Explore"), "UNCC Explore")}
                />

                <EventSection
                    onClick={handleImageClick}
                    eventName={"Disovery Place"}
                    supportingText={"Our club visited Charlotte’s Discovery Place to provide fun activities for kids of varying ages to excite them about STEM."}
                    images={OutreachTileProps(getData("Discovery Place"), "Discovery Place")}
                />

                <EventSection
                    onClick={handleImageClick}
                    eventName={"Hour of Code at Mallard Creek Elementary"}
                    supportingText={"We visited Mallard Creek Elementary to teach 5th graders how to code with Code.org and Snap."}
                    images={OutreachTileProps(getData("Elementary"), "Mallard Creek Elementary")}
                />

                <EventSection
                    onClick={handleImageClick}
                    eventName={"NC Science Festival at UNCC"}
                    supportingText={"Our club volunteered to provide some fun activities for kids of varying ages at a NC Science Festival sponsored event."}
                    images={OutreachTileProps(getData("NCScience"), "NC Science Festival")}
                />
            </div>
        </PageFade>
    );
}

