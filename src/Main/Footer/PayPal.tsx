import React from "react";
import EasyToSeeTooltip from "../../Utils/EasyToSeeTooltip";
import { Typography } from "@material-ui/core";

export default function PayPal() {
    return (
        <>
            <Typography variant="h5">
                Support us by Donating!
            </Typography>
            <EasyToSeeTooltip title="PayPal - The safer, easier way to pay online!">
                <form action="https://www.paypal.com/cgi-bin/webscr" target="_blank" method="post" style={{ padding: "12px" }}>
                    <input type="hidden" name="cmd" value="_s-xclick" />
                    <input type="hidden" name="hosted_button_id" value="FBMKDCDK2PUXN" />
                    <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" name="submit" alt="Donate with PayPal button" />
                    <img alt="" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                </form>
            </EasyToSeeTooltip>
        </>
    );
}