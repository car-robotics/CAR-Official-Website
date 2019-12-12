import React, { ReactElement } from "react";
import { KeyboardArrowRight, KeyboardArrowLeft, FiberManualRecord, FiberManualRecordOutlined } from "@material-ui/icons";
import { IconButton, Paper, Typography, Divider } from "@material-ui/core";
import { SlideProps } from "@material-ui/core/Slide";
import SlideShowContent from "./SlideShowContent";
import { Swipeable } from "react-swipeable";
import { MobileContext } from "../Context/MobileContext";

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
    for (var i = 0; i < 5; i++) {
        if (slideIndex === i) {
            slideIndicators.push(<FiberManualRecordOutlined key={i} fontSize="small" />)
        } else {
            slideIndicators.push(<FiberManualRecord key={i} fontSize="small" />)
        }
    }

    return (
        <MobileContext.Consumer>
            {mobile => (
                <>
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
                </>
            )}
        </MobileContext.Consumer>
    );
}