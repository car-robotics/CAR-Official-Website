import React, { ReactElement } from "react";
import { KeyboardArrowRight, KeyboardArrowLeft } from "@material-ui/icons";
import { IconButton, Paper, Typography, Divider, SvgIcon } from "@material-ui/core";
import { SlideProps } from "@material-ui/core/Slide";
import SlideShowContent from "./SlideShowContent";
import { Swipeable } from "react-swipeable";
import { MobileContext } from "../Context/MobileContext";
import { COLORS } from "../Themes/COLORS";

export default function Slideshow() {
    const [slideIndex, setSlideIndex] = React.useState<number>(0);
    const [slideDirection, setSlideDirection] = React.useState<SlideProps["direction"]>("up");

    const handleLeftArrowClick = () => {
        setSlideDirection("right");

        if (slideIndex === 0)
            setSlideIndex(4);
        else
            setSlideIndex(slideIndex - 1);
    }
    const handleRightArrowClick = () => {
        setSlideDirection("left");

        if (slideIndex === 4)
            setSlideIndex(0);
        else
            setSlideIndex(slideIndex + 1);
    }

    let slideIndicators: ReactElement[] = [];
    for (let i: number = 0; i < 5; i++) {
        slideIndicators.push(
            <SvgIcon key={"slideIndicators" + i}>
                <circle
                    cx="9"
                    cy="9"
                    r="7"
                    stroke={COLORS.schoolGold}
                    fill={slideIndex === i ? COLORS.darkColor : COLORS.schoolGold}
                    style={{
                        transition: "fill linear 250ms", cursor: "pointer"
                    }}
                    onClick={() => { setSlideDirection("up"); setSlideIndex(i) }}
                >
                </circle>
            </SvgIcon>
        )
    }

    return (
        <MobileContext.Consumer>
            {mobile => (
                <section>
                    <Paper elevation={24} className="slideshow-container">

                        <Typography align="center" variant="h2" >
                            Who We Are
                        </Typography>

                        <Divider />

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

                        <div className="slide-Indicators">
                            {slideIndicators}
                        </div>

                    </Paper>
                </section>
            )}
        </MobileContext.Consumer>
    );
}