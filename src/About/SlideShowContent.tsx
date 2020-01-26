import React from "react";
import { Typography, makeStyles, Theme, createStyles } from "@material-ui/core";
import Slide, { SlideProps } from "@material-ui/core/Slide";
import Image from 'material-ui-image';
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
        img: "/Photos/Outreach/ArduinoWksp-3.jpg",
        width: "35%",
    },
    {
        text: "We educate each other by working on multiple things at once and then sharing what we learned.",
        img: "/Photos/SprintReviews/EndofSprint2-3.jpg",
        width: "35%",
    },
    {
        text: "We design, build, and test a robot to compete against other schools in the region.",
        img: "/Photos/Robot/Robot2.jpg",
        width: "35%",
    }
];

export default function SlideShowContent(props: SlideShowContentProps) {
    const classes = useStyles();

    const [isWindowHeightGreaterThanWidth, setIsWindowHeightGreaterThanWidth] = React.useState<boolean>(window.innerHeight > window.innerWidth);

    const { mobile, slideDirection } = props;

    const checkWindowSize = () => {
        if (window.innerHeight < window.innerWidth && isWindowHeightGreaterThanWidth) {
            setIsWindowHeightGreaterThanWidth(false);
        } else if (window.innerHeight > window.innerWidth && !isWindowHeightGreaterThanWidth) {
            setIsWindowHeightGreaterThanWidth(true);
        }
    }

    window.addEventListener("resize", checkWindowSize);

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
                        timeout={{ enter: 750, exit: 0 }}
                        style={{ height: "100%" }}
                    >
                        <div>
                            <div className="slideshow-content-container">
                                <Typography
                                    variant="h2"
                                    className={classes.text}
                                    style={{
                                        padding: mobile ? "1rem" : "",
                                        lineHeight: mobile ? "2.5rem" : "3.5rem",
                                        flexBasis: mobile ? "" : "35%",
                                        fontWeight: 400,
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

                                        /*
                                            Before you look at width and cry, let me explain:
                                            If the user is on mobile, we want to leave the width unset
                                            If not mobile and the height of the window is greater than the width,
                                            then we want to set the width of every image to 50% of it's container;
                                            except for the logo (which is more square than the others). We set the
                                            width of the logo to only 35%. If the width of the screen is greater than
                                            the height, we set the width in the object itself up above.
                                        */

                                        width: mobile ? "" :
                                            isWindowHeightGreaterThanWidth ?
                                                contentObject.img === Logo ? "35%" : "50%"
                                                : contentObject.width,
                                    }}
                                    imageStyle={{
                                        borderRadius: contentObject.img === Logo ? "100%" : "1rem",
                                        boxShadow: contentObject.img !== IEEE ? "0px 0px 15px black" : "",
                                        position: "inherit",
                                        width: "100%",
                                        maxHeight: "35rem",
                                        height: "",
                                    }}
                                    aspectRatio={4 / 3}
                                    disableError
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