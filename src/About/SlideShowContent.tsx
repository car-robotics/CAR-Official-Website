import React from "react";
import { Typography, makeStyles, Theme, createStyles } from "@material-ui/core";
import Slide, { SlideProps } from "@material-ui/core/Slide";
import Image from 'material-ui-image';
import Robot from "../Images/Robot2.jpg";
import SprintReview23 from "../Images/SprintReviews/EndofSprint2-3.jpg";
import ArduinoWksp from "../Images/Outreach/ArduinoWksp-2.jpg";
import Logo from "../Images/CARLogoPrimary.png";
import "./About.scss";

interface SlideShowContentProps {
    contentIndex: number;
    mobile: boolean;
    slideDirection: SlideProps["direction"];
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        text: {
            padding: "2rem",
            textAlign: "center",
            alignSelf: "center",
            lineHeight: "3.5rem",
            animationName: "fadeIn",
            animationDuration: "1s",
            borderRadius: "0.25rem",
            width: "80%",
        },
    }),
);

const IEEE = "https://www.ieeeuncc.com/uploads/1/2/4/2/124254028/ieeefulllogo_orig.png";

const SlideShowContentItems = [
    {
        text: "Charlotte Area Robotics is an UNCC Student Organization.",
        img: Logo,
        width: "25%",
    },
    {
        text: "We compete anually in the IEEE SoutheastCon Hardware Competition.",
        img: IEEE,
        width: "50%",
    },
    {
        text: "We educate other students through workshops and demonstrations.",
        img: ArduinoWksp,
        width: "35%",
    },
    {
        text: "We educate each other by working on multiple things at once and then sharing what we learned.",
        img: SprintReview23,
        width: "35%",
    },
    {
        text: "We design, build, and test a robot to compete against other schools in the region.",
        img: Robot,
        width: "35%",
    }
];

export default function SlideShowContent(props: SlideShowContentProps) {
    const classes = useStyles();

    const { mobile, slideDirection } = props;

    return (
        <>
            {SlideShowContentItems.map((contentObject, index) => {
                return (
                    <Slide
                        key={index}
                        mountOnEnter
                        unmountOnExit
                        in={index === props.contentIndex}
                        direction={slideDirection}
                        timeout={{ enter: 750, exit: 750 }}
                        style={{ height: "100%" }}
                    >
                        <div>
                            <div className="slideshow-content-container">
                                <Typography
                                    variant="h4"
                                    className={classes.text}
                                    style={{
                                        padding: mobile ? "1rem" : "",
                                        lineHeight: mobile ? "2.5rem" : "3.5rem",
                                        flexBasis: mobile ? "" : "35%",
                                    }}
                                >
                                    {contentObject.text}
                                </Typography>

                                <Image
                                    style={{
                                        textAlign: "center",
                                        backgroundColor: "transparent",
                                        padding: mobile ? "0" : "1rem",
                                        margin: mobile ? "1rem" : "auto 1rem",
                                        width: mobile ? "" : contentObject.width,
                                    }}
                                    imageStyle={{
                                        borderRadius: contentObject.img === Logo ? "100%" : "1rem",
                                        boxShadow: contentObject.img !== IEEE ? "0px 0px 15px black" : "",
                                        position: "inherit",
                                        width: "100%",
                                        maxWidth: "100%",
                                        height: "",
                                    }}
                                    aspectRatio={4 / 3}
                                    src={contentObject.img}
                                />
                            </div>
                        </div>
                    </Slide>
                );
            })}
        </>
    );
}