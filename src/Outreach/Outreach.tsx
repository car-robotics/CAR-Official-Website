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
import EventSection from "./EventSection";
import GoldDivider from "../Utils/GoldDivider";
import { ContentBackground } from "../Utils/ContentBackground";
import Lightbox from "../Archive/Lightbox";

interface ClickedState {
    clicked: boolean;
    img: string;
}

export default function Outreach() {
    const [clickedImage, setClickedImage] = React.useState<ClickedState>({ clicked: false, img: "" });

    DocumentTitle({ title: "Outreach" });

    const handleImageClick = (clickedImg: string) => {
        setClickedImage({ clicked: true, img: clickedImg });
    }

    return (
        <PageFade>
            <div>
                <div style={{ marginTop: "5rem" }}>

                    <Lightbox
                        {...clickedImage}
                        orientation="horizontal"
                        handleClickedClose={() => setClickedImage({ clicked: false, img: "" })}
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
                        images={[arduino1, arduino2]}
                    />

                    <EventSection
                        onClick={handleImageClick}
                        eventName={"Bob's Bash"}
                        supportingText={"Our club took some time during homecoming weekend to show off our progress on the robot for competition to UNCC Engineering faculty, staff, and alumni."}
                        images={[bobsBash1, bobsBash2, bobsBash3]}
                    />

                    <EventSection
                        onClick={handleImageClick}
                        eventName={"UNCC Explore"}
                        supportingText={"We attended Explore to show prospective students that UNCC is serious about robotics."}
                        images={[explore1]}
                    />

                    <EventSection
                        onClick={handleImageClick}
                        eventName={"Disovery Place"}
                        supportingText={"Our club visited Charlotte’s Discovery Place to provide fun activities for kids of varying ages to excite them about STEM."}
                        images={[discoveryplace1, discoveryplace2]}
                    />

                    <EventSection
                        onClick={handleImageClick}
                        eventName={"Hour of Code - Mallard Creek Elementary"}
                        supportingText={"We visited Mallard Creek Elementary to teach 5th graders how to code with Code.org and Snap."}
                        images={[elementary1, elementary2]}
                    />

                    <EventSection
                        onClick={handleImageClick}
                        eventName={"NC Science Festival - UNCC"}
                        supportingText={"Our club volunteered to talk about robotics and provide some fun activities for kids of varying ages at a NC Science Festival sponsored event at UNCC’s campus."}
                        images={[ncscience1]}
                    />

                </div>
            </div>
        </PageFade>
    );
}

