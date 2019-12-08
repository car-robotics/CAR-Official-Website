import React from "react";
import { KeyboardArrowRight, KeyboardArrowLeft } from "@material-ui/icons";
import { IconButton, Paper, withStyles, Typography } from "@material-ui/core";
import { SlideProps } from "@material-ui/core/Slide";
import SlideShowContent from "./SlideShowContent";
import GoldDivider from "../Utils/GoldDivider";
import { COLORS } from "../Utils/COLORS";
import { Swipeable } from "react-swipeable";
import { MobileContext } from "../Context/MobileContext";

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
        <MobileContext.Consumer>
            {mobile => (
                <>
                    <AboutBackground elevation={24} className="slideshow-container">

                        <Typography align="center" variant="h2" >
                            Who We Are
                        </Typography>

                        <GoldDivider />

                        <div className="slideshow-lower-container">

                            {!mobile && <IconButton className="slideshow-arrow" onClick={handleLeftArrowClick}>
                                <KeyboardArrowLeft fontSize="large" />
                            </IconButton>}

                            <Swipeable
                                onSwipedLeft={handleRightArrowClick}
                                onSwipedRight={handleLeftArrowClick}
                                preventDefaultTouchmoveEvent={true}
                            >
                                <SlideShowContent slideDirection={slideDirection} contentIndex={slideIndex} mobile={mobile} />
                            </Swipeable>

                            {!mobile && <IconButton className="slideshow-arrow" onClick={handleRightArrowClick}>
                                <KeyboardArrowRight fontSize="large" />
                            </IconButton>}

                        </div>

                    </AboutBackground>
                </>
            )}
        </MobileContext.Consumer>
    );
}