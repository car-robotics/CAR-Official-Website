import React from "react";
import { Typography, IconButton, withStyles } from "@material-ui/core";
import { Instagram, Facebook, Email } from "@material-ui/icons";
import EasyToSeeTooltip from "../../Utils/EasyToSeeTooltip";
import { COLORS } from "../../Utils/COLORS";
import GoldDivider from "../../Utils/GoldDivider";
import GreenLink from "../../Utils/GreenLink";

export interface FooterContentProps {
    mobile: boolean;
}

const FooterDivider = withStyles({
    root: {
        height: "80%",
    },
})(GoldDivider);

export default function FooterContent(props: FooterContentProps) {
    const { mobile } = props;
    return (
        <>
            <div className="footer-section">
                <Typography variant="h5">
                    Support us on Social Media!
                </Typography>
                <EasyToSeeTooltip title="https://www.instagram.com/car_robotics/">
                    <IconButton href="https://www.instagram.com/car_robotics/" target="_blank">
                        <Instagram fontSize="large" htmlColor={COLORS.schoolGold} />
                    </IconButton>
                </EasyToSeeTooltip>
                <EasyToSeeTooltip title="https://www.facebook.com/CharlotteAreaRobotics/">
                    <IconButton href="https://www.facebook.com/CharlotteAreaRobotics/" target="_blank">
                        <Facebook fontSize="large" htmlColor={COLORS.schoolGold} />
                    </IconButton>
                </EasyToSeeTooltip>
            </div>

            {!mobile && <FooterDivider orientation="vertical" />}

            <div className="footer-section">
                <Typography variant="h5">
                    Interested in joining CAR?
                </Typography>
                <Typography variant="h6" style={{ padding: "12px" }}>
                    <GreenLink link="https://ninerengage.uncc.edu/organization/car-robotics" text="Niner Engage!" />
                </Typography>
            </div>

            {!mobile && <FooterDivider orientation="vertical" />}

            <div className="footer-section">
                <Typography variant="h5">
                    Support us by Donating!
                </Typography>
                <EasyToSeeTooltip title="PayPal - The safer, easier way to pay online!">
                    <form action="https://www.paypal.com/cgi-bin/webscr" target="_blank" method="post" style={{ padding: "0.5rem" }}>
                        <input type="hidden" name="cmd" value="_s-xclick" />
                        <input type="hidden" name="hosted_button_id" value="FBMKDCDK2PUXN" />
                        <input className="paypal" type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" name="submit" alt="Donate with PayPal button" />
                        <img alt="" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                    </form>
                </EasyToSeeTooltip>
            </div>

            {!mobile && <FooterDivider orientation="vertical" />}

            <div className="footer-section">
                <Typography variant="h5">
                    Become a sponsor!
                </Typography>
                <EasyToSeeTooltip title="mailto:car-robotics@uncc.edu">
                    <IconButton href="mailto:car-robotics@uncc.edu">
                        <Typography variant="h6" style={{ color: COLORS.schoolGold, paddingRight: "10px" }}>
                            Email us:
                        </Typography>
                        <Email fontSize="large" htmlColor={COLORS.schoolGold} />
                    </IconButton>
                </EasyToSeeTooltip>
            </div>
        </>
    );
}