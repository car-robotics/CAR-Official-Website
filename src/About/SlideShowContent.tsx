import React from "react";
import { Typography, makeStyles, Theme, createStyles } from "@material-ui/core";
import Image from 'material-ui-image';
import Robot from "../Images/Robot2.jpg";
import SprintReview23 from "../Images/SprintReviews/EndofSprint2-3.jpg";
import ArduinoWksp from "../Images/Outreach/ArduinoWksp-2.jpg";
import Logo from "../Images/CARLogoPrimary.png";
import "./About.scss";

interface SlideShowContentProps {
    contentIndex: number;
    mobile: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        text: {
            padding: "2rem",
            textAlign: "center",
            alignSelf: "center",
            lineHeight: "3.5rem",
            flexBasis: "35%",
            animationName: "fadeIn",
            animationDuration: "1s",
            boxShadow: "0px 0px 10px black",
            borderRadius: "0.25rem",
            width: "80%",
        },
    }),
);

const SlideShowContentItems = [
    {
        text: "Charlotte Area Robotics is an UNCC Student Organization that competes anually in the IEEE SoutheastCon Hardware Competition.",
        img: Logo,
    },
    {
        text: "We educate other students through workshops and demonstrations.",
        img: ArduinoWksp,
    },
    {
        text: "We educate each other by working on multiple things at once and then sharing what we learned.",
        img: SprintReview23,
    },
    {
        text: "We design, build, and test a robot to compete against other schools in the region.",
        img: Robot,
    }
];

export default function SlideShowContent(props: SlideShowContentProps) {
    const classes = useStyles();

    const { mobile } = props;

    const contentObject = SlideShowContentItems[props.contentIndex];

    return (
        <div className="slideshow-content-container">
            <Typography variant={mobile ? "h6" : "h4"} style={{ padding: mobile ? "1rem" : "" }} className={classes.text} >
                {contentObject.text}
            </Typography>

            <Image
                style={{
                    textAlign: "center",
                    backgroundColor: "transparent",
                    paddingTop: "0",
                }}
                imageStyle={{
                    borderRadius: contentObject.img === Logo ? "15rem" : "1rem",
                    boxShadow: "0px 0px 15px black",
                    position: "inherit",
                    width: "",
                    maxWidth: "100%",
                    height: mobile ? "20rem" : "25rem",
                    marginLeft: mobile ? "" : "2rem",
                }}
                aspectRatio={4 / 3}
                src={contentObject.img}
            />
        </div>
    );
}