import React from "react";
import { Typography, makeStyles, Theme, createStyles } from "@material-ui/core";
import Image from 'material-ui-image';
import Robot from "../Images/Robot2.jpg";
import SprintReview23 from "../Images/SprintReviews/EndofSprint2-3.jpg";
import ArduinoWksp from "../Images/Outreach/ArduinoWksp-2.jpg";
import Logo from "../Images/CARLogoPrimary.png";

interface SlideShowContentProps {
    contentIndex: number,
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        text: {
            padding: "0 2rem 1rem 2rem",
            gridArea: "text",
            textAlign: "center",
            color: "#B3A369",
            alignSelf: "center", 
            lineHeight: "1.5em",
        },
    }),
);

const SlideShowContentItems = [
    {
        text: "Charlotte Area Robotics is an UNCC Student Organization that competes anually in the IEEE SoutheastCon Hardware Competition",
        img: Logo,
        size: { width: "80%", height: "" }
    },
    {
        text: "We educate other students through workshops and demonstrations",
        img: ArduinoWksp,
        size: { width: "100%", height: "100%" }
    },
    {
        text: "We educate each other by working on multiple things at once and then sharing what we learned",
        img: SprintReview23,
        size: { width: "100%", height: "100%" }
    },
    {
        text: "We design, build, and test a robot to compete against other schools in the region",
        img: Robot,
        size: { width: "100%", height: "100%" }
    }
];

export default function SlideShowContent(props: SlideShowContentProps) {
    const classes = useStyles();

    const contentObject = SlideShowContentItems[props.contentIndex];

    return (
        <>
            <Typography variant="h4" className={classes.text} style={{animationName: "fadeIn", animationDuration: "1s"}}>
                {contentObject.text}
            </Typography>

            <Image 
                style={{ 
                    gridArea: "content",
                    textAlign: "center",
                    backgroundColor: "#212B31", 
                    paddingTop: "0", 
                    margin: "auto"
                }} 
                imageStyle={{ 
                    borderRadius: "1rem",
                    boxShadow: contentObject.img !== Logo ? "0px 0px 15px black" : "",
                    position: "inherit", 
                    width: contentObject.size.width, 
                    height: contentObject.size.height 
                }} 
                aspectRatio={4/3} 
                src={contentObject.img} 
            />
        </>
    );
}