import React from "react";
import { KeyboardArrowRight, KeyboardArrowLeft } from "@material-ui/icons";
import { IconButton, Paper, withStyles, Typography } from "@material-ui/core";
import Slide, { SlideProps } from "@material-ui/core/Slide";
import SlideShowContent from "./SlideShowContent";
import GoldDivider from "../Utils/GoldDivider";
import { COLORS } from "../Utils/COLORS";

export default function Slideshow() {
    const [slideIndex, setSlideIndex] = React.useState<number>(0);
    const [slideDirection, setSlideDirection] = React.useState<SlideProps["direction"]>("up");

    const handleLeftArrowClick = () => {

        if (slideIndex === 0)
            setSlideIndex(3);
        else
            setSlideIndex(slideIndex - 1);

        setSlideDirection("right");
    }
    const handleRightArrowClick = () => {
        if (slideIndex === 3)
            setSlideIndex(0);
        else
            setSlideIndex(slideIndex + 1);

        setSlideDirection("left");
    }

    /* Slide animation does not work if we use the ContentBackground instead of 
        AboutBackground. I don't know why. */
    const AboutBackground = withStyles({
        root: {
            backgroundColor: COLORS.darkColor,
            borderRadius: "1rem",
            color: COLORS.schoolGold,
        },
    })(Paper);

    return (
        <>
            <AboutBackground elevation={24} className="slideshow-container">

                <Typography align="center" variant="h2" >
                    Who We Are
                </Typography>

                <GoldDivider />

                <div className="slideshow-lower-container">

                    <IconButton className="slideshow-arrow" onClick={handleLeftArrowClick}>
                        <KeyboardArrowLeft style={{ color: COLORS.mainWhite }} />
                    </IconButton>

                    <Slide in={true} direction={slideDirection} timeout={{ enter: 750, exit: 750 }}>
                        <div>
                            <SlideShowContent contentIndex={slideIndex} />
                        </div>
                    </Slide>

                    <IconButton className="slideshow-arrow" onClick={handleRightArrowClick}>
                        <KeyboardArrowRight style={{ color: COLORS.mainWhite }} />
                    </IconButton>

                </div>

            </AboutBackground>
        </>
    );
}