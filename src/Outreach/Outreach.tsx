import React from "react";
import { Typography } from "@material-ui/core";
import { DocumentTitle } from "../Utils/DocumentTitle";
import PageFade from "../Utils/PageFade";
import arduino1 from "../Images/Outreach/ArduinoWksp-1.jpg";
import arduino2 from "../Images/Outreach/ArduinoWksp-3.jpg";
import bobsBash1 from "../Images/Outreach/BobsBash1.jpg";
import bobsBash2 from "../Images/Outreach/BobsBash2.jpg";
import bobsBash3 from "../Images/Outreach/BobsBash3.jpg";
import discoveryplace1 from "../Images/Outreach/DiscoveryPlace1.jpg";
import discoveryplace2 from "../Images/Outreach/DiscoveryPlace2.jpg";
import elementary1 from "../Images/Outreach/Elementary1.jpg";
import elementary2 from "../Images/Outreach/Elementary2.jpg";
import explore1 from "../Images/Outreach/Explore1.jpg";
import ncscience1 from "../Images/Outreach/NCScience1.jpg";
import ncscience2 from "../Images/Outreach/NCScience2.jpg";
import EventSection from "./EventSection";
import GoldDivider from "../Utils/GoldDivider";
import { ContentBackground } from "../Utils/ContentBackground";
import Lightbox from "../Archive/Lightbox";
import { ArchiveCategory, Tile, defaultTileProps } from "../Archive/ImageList";

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

    return (
        <PageFade>
            <div>
                <Lightbox
                    clickedImg={clickedImage.img}
                    clicked={clickedImage.clicked}
                    handleClickedClose={() => setClickedImage({ clicked: false, img: defaultTileProps })}
                />

                <ContentBackground elevation={24} className="header">
                    <Typography variant="h2" align="center">
                        Outreach
                    </Typography>
                    <GoldDivider />
                    <Typography variant="h4" align="center">
                        We treat outreach very seriously throughout the school year.
                        As a club, we require volunteerig if members wish to to travel to competition.
                        Below are some of our past volunteering events, enjoy!
                    </Typography>
                </ContentBackground>

                <EventSection
                    onClick={handleImageClick}
                    eventName={"Arduino Workshop"}
                    supportingText={"We hosted an information session at the Freshman Engineering Learning Community on the basics of Arduino."}
                    images={OutreachTileProps([arduino1, arduino2], "Arduino Workshop")}
                />

                <EventSection
                    onClick={handleImageClick}
                    eventName={"Bob's Bash"}
                    supportingText={"Our club took some time during homecoming weekend to show off our progress on the robot for competition to UNCC Engineering faculty, staff, and alumni."}
                    images={OutreachTileProps([bobsBash1, bobsBash2, bobsBash3], "Bob's Bash")}
                />

                <EventSection
                    onClick={handleImageClick}
                    eventName={"UNCC Explore"}
                    supportingText={"We attended Explore to show prospective students that UNCC is serious about robotics."}
                    images={OutreachTileProps([explore1], "UNCC Explore")}
                />

                <EventSection
                    onClick={handleImageClick}
                    eventName={"Disovery Place"}
                    supportingText={"Our club visited Charlotte’s Discovery Place to provide fun activities for kids of varying ages to excite them about STEM."}
                    images={OutreachTileProps([discoveryplace1, discoveryplace2], "Discovery Place")}
                />

                <EventSection
                    onClick={handleImageClick}
                    eventName={"Hour of Code at Mallard Creek Elementary"}
                    supportingText={"We visited Mallard Creek Elementary to teach 5th graders how to code with Code.org and Snap."}
                    images={OutreachTileProps([elementary1, elementary2], "Mallard Creek Elementary")}
                />

                <EventSection
                    onClick={handleImageClick}
                    eventName={"NC Science Festival at UNCC"}
                    supportingText={"Our club volunteered to provide some fun activities for kids of varying ages at a NC Science Festival sponsored event."}
                    images={OutreachTileProps([ncscience1, ncscience2], "NC Science Festival")}
                />
            </div>
        </PageFade>
    );
}

