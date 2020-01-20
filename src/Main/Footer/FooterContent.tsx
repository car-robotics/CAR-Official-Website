import React from "react";
import { Typography, IconButton, Divider, Tooltip, makeStyles, Theme, createStyles } from "@material-ui/core";
import { Instagram, Facebook, Email } from "@material-ui/icons";

import GreenLink from "../../Utils/GreenLink";

export interface FooterContentProps {
    mobile: boolean;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        divider: {
            height: "80%",
        },
    }),
);

export default function FooterContent(props: FooterContentProps) {
    const { mobile } = props;
    const classes = useStyles();
    return (
        <>
            <div className="footer-section">
                <Typography variant="body1">
                    Support us on Social Media!
                </Typography>
                <Tooltip title="https://www.instagram.com/car_robotics/">
                    <IconButton href="https://www.instagram.com/car_robotics/" target="_blank">
                        <Instagram fontSize="large" />
                    </IconButton>
                </Tooltip>
                <Tooltip title="https://www.facebook.com/CharlotteAreaRobotics/">
                    <IconButton href="https://www.facebook.com/CharlotteAreaRobotics/" target="_blank">
                        <Facebook fontSize="large" />
                    </IconButton>
                </Tooltip>
            </div >

            {!mobile && <Divider className={classes.divider} orientation="vertical" />
            }

            <div className="footer-section">
                <Typography variant="body1">
                    Interested in joining CAR?
                </Typography>
                <Typography variant="body1" style={{ padding: "12px" }}>
                    <GreenLink link="https://ninerengage.uncc.edu/organization/car-robotics" text="Niner Engage!" />
                </Typography>
            </div>

            {!mobile && <Divider className={classes.divider} orientation="vertical" />}

            <div className="footer-section">
                <Typography variant="body1">
                    Support us by Donating!
                </Typography>
                <Tooltip title="PayPal - The safer, easier way to pay online!">
                    <form action="https://www.paypal.com/cgi-bin/webscr" target="_blank" method="post" style={{ padding: "0.5rem" }}>
                        <input type="hidden" name="cmd" value="_s-xclick" />
                        <input type="hidden" name="hosted_button_id" value="FBMKDCDK2PUXN" />
                        <input className="paypal" type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" name="submit" alt="Donate with PayPal button" />
                        <img alt="" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                    </form>
                </Tooltip>
            </div >

            {!mobile && <Divider className={classes.divider} orientation="vertical" />}

            <div className="footer-section">
                <Typography variant="body1">
                    Become a sponsor!
                </Typography>
                <Tooltip title="mailto:car-robotics@uncc.edu">
                    <IconButton href="mailto:car-robotics@uncc.edu">
                        <Typography variant="body1" style={{ paddingRight: "10px", fontWeight: 600 }}>
                            Email us:
                        </Typography>
                        <Email fontSize="large" />
                    </IconButton>
                </Tooltip>
            </div >
        </>
    );
}