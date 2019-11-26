import React from "react";
import { KeyboardArrowRight, KeyboardArrowLeft } from "@material-ui/icons";
import { IconButton, Paper, withStyles, Typography, Divider } from "@material-ui/core";
import SlideShowContent from "./SlideShowContent";
import { useCurrentWidth } from "react-socks";

export default function Slideshow() {
    const [slideIndex, setSlideIndex] = React.useState<number>(0);

    const handleLeftArrowClick = () => {

        if (slideIndex === 0)
            setSlideIndex(3);
        else
            setSlideIndex(slideIndex - 1);
    }
    const handleRightArrowClick = () => {
        if (slideIndex === 3)
            setSlideIndex(0);
        else
            setSlideIndex(slideIndex + 1);
    }

    const AboutBackground = withStyles({
        root: {
            backgroundColor: "#212B31",
            borderRadius: "1rem",
            height: "max-content",
        },
    })(Paper);

    return (
        <>
            <AboutBackground className={useCurrentWidth() > 1000 ? "slideshow-container" : "slideshow-mobile-container"}>

                <Typography align="center" variant="h2" style={{ gridArea: "title", color: "#B3A369" }}  >
                    Who We Are
                </Typography>

                <Divider style={{ gridArea: "divider", backgroundColor: "#B3A369" }} />

                <IconButton className="slideshow-leftArrow" onClick={handleLeftArrowClick}>
                    <KeyboardArrowLeft style={{ color: "white" }} />
                </IconButton>

                <SlideShowContent contentIndex={slideIndex} />

                <IconButton className="slideshow-rightArrow" onClick={handleRightArrowClick}>
                    <KeyboardArrowRight style={{ color: "white" }} />
                </IconButton>

            </AboutBackground>
        </>
    );
}