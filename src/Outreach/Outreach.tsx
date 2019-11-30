import React from "react";
import { Typography, Paper, makeStyles, createStyles, Theme } from "@material-ui/core";
import { useCurrentWidth } from "react-socks";
import { DocumentTitle } from "../Utils/DocumentTitle";
import PageFade from "../Utils/PageFade";
import arduino1 from "../Images/Outreach/ArduinoWksp-1.jpg";
import arduino8 from "../Images/Outreach/ArduinoWksp-8.jpg";
import bobsBash from "../Images/Outreach/BobsBash1-2.jpg";
import discoveryplace1 from "../Images/Outreach/DiscoveryPlace1.jpg";
import discoveryplace2 from "../Images/Outreach/DiscoveryPlace2.jpg";
import elementary1 from "../Images/Outreach/Elementary1.jpg";
import elementary2 from "../Images/Outreach/Elementary2.jpg";
import ncscience1 from "../Images/Outreach/NCScience1.jpg";
import "./Outreach.scss";


//Used For styling
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        bottomCard: {
            maxWidth: "50rem",
            display: "flex",
            backgroundColor: "#212b31",
            gridArea: "bottomTxt",
            padding: "10px",
            paddingBottom: "10px",
            margin: "-5px auto 2rem auto",
        },
        divider: {
            margin: "10px",
        },
    }),
);

//Function that actually creates the website
function Outreach() {
    //Set the default sizing only used for (mobile version)
    const width = useCurrentWidth();
    const classes = useStyles();
    const card_margin = width > 1000 ? "" : "10px";

    //Used to set website tab name 
    DocumentTitle({ title: "Outreach" });

    return (
        <PageFade>
            <div>
                //Created a div to hold the entire website container
                <div className={width > 1000 ? "outReach-container" : "outReach-container-mobile"}>



                    {/* Banner Image */}
                    <Paper className={classes.bottomCard} elevation={24} style={{ marginTop: "2rem" }}>
                        <Typography align="center" className="more-text" variant="h4">
                            We enjoy helping and reaching out to our community. Volunteering is very important to us
                            and we strive to make our community better every chance we get.
                        </Typography>
                    </Paper>



                    <div style={{ display: "inline-flex" }}>
                        {/*Arduino Images */}
                        <img src={arduino1} className="arduino1" alt="Arduino1" />
                        <img src={arduino8} className="arduino8" alt="Arduino8" />
                    </div>
                    <Paper className={classes.bottomCard} elevation={24} style={{ marginLeft: card_margin, marginRight: card_margin }}>
                        <Typography align="center" className="more-text" variant="h5" style={{ fontFamily: "Inconsolata" }}>
                            We hosted an information session at the Freshman Engineering Learning Community on the basics of Arduino.
                        </Typography>
                    </Paper>





                    {/*Bobs Bash Image*/}
                    <img src={bobsBash} className="bobsBash" alt="BobsBash" />
                    <Paper className={classes.bottomCard} elevation={24} style={{ marginLeft: card_margin, marginRight: card_margin }}>
                        <Typography align="center" className="more-text" variant="h5" style={{ fontFamily: "Inconsolata" }}>
                            Our club took some time during homecoming weekend to show off our progress on the robot for competition
                            to UNCC Engineering faculty, staff, and alumni.
                    </Typography>
                    </Paper>




                    {/*Discovery Place Images */}
                    <div style={{ display: "inline-flex" }}>
                        <img src={discoveryplace1} className="discoveryplace1" alt="Discoveryplace1" />{/*Discovery Place 2 Image */}
                        <img src={discoveryplace2} className="discoveryplace2" alt="Discoveryplace2" />
                    </div>

                    <Paper className={classes.bottomCard} elevation={24} style={{ marginLeft: card_margin, marginRight: card_margin }}>
                        <Typography align="center" className="more-text" variant="h5" style={{ fontFamily: "Inconsolata" }}>
                            Our club visited Charlotte’s Discovery Place to provide fun activities for kids of varying ages
                            to excite them about STEM.
                    </Typography>
                    </Paper>



                    {/*Elementary school Images */}
                    <div style={{ display: "inline-flex" }}>
                        <img src={elementary1} className="elementary1" alt="Elementary1" />
                        <img src={elementary2} className="elementary2" alt="Elementary2" />
                    </div>

                    <Paper className={classes.bottomCard} elevation={24} style={{ marginLeft: card_margin, marginRight: card_margin }}>
                        <Typography align="center" className="more-text" variant="h5" style={{ fontFamily: "Inconsolata" }}>
                            We visited Mallard Creek Elementary to teach 5th graders how to code with Code.org and Snap.
                    </Typography>
                    </Paper>



                    {/*NC Science Image */}
                    <img src={ncscience1} className="ncscience1" alt="Ncscience1" />

                    <Paper className={classes.bottomCard} elevation={24} style={{ marginLeft: card_margin, marginRight: card_margin }}>
                        <Typography align="center" className="more-text" variant="h5" style={{ fontFamily: "Inconsolata" }}>
                            Our club volunteered to talk about robotics and provide some fun activities for kids of varying
                            ages at a NC Science Festival sponsored event at UNCC’s campus.
                    </Typography>
                    </Paper>


                </div> //Closed the website container Div
            </div>
        </PageFade>
    );
}

export default Outreach;
