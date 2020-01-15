import React from "react";
import { AppBar, makeStyles, Theme, createStyles, Popover, IconButton, Typography, Drawer } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import NavBarContent from "./NavBarContent";
import "../Main.scss";
import { COLORS } from "../../Themes/COLORS";
import { MobileContext } from "../../Context/MobileContext";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appbar: {
            zIndex: theme.zIndex.drawer + 101,
        },
        feedbackSidebar: {
            textAlign: "center",
            position: "absolute",
            left: "35%",
            bottom: "0",
        },
        hamburgerMenu: {
            position: "absolute",
            padding: "6px",
            top: "3px",
            bottom: "3px",
            left: "6px",
        },
        mobileNavBar: {
            alignSelf: "center",
            margin: "auto",
            padding: "0.5rem",
            color: COLORS.schoolGold,
        },
    }),
);

export default function NavBar() {
    const [showFeedback, setShowFeedback] = React.useState<boolean>(false);
    const [showSidebar, setShowSidebar] = React.useState<boolean>(false);
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleFeedbackClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setAnchorEl(event.currentTarget);
        setShowFeedback(!showFeedback);
    }

    const handleFeedbackClose = () => {
        setAnchorEl(null);
        setShowFeedback(false);
    }

    const handleDrawerToggle = () => {
        setShowSidebar(!showSidebar);
    }

    const classes = useStyles();

    return (
        <MobileContext.Consumer>
            {mobile => (
                <>
                    {!mobile && <>
                        <AppBar className={classes.appbar}>
                            <NavBarContent
                                isSidebar={false}
                                handleFeedbackClick={handleFeedbackClick}
                                classes={classes}
                            />
                        </AppBar>
                        <Popover
                            anchorEl={anchorEl}
                            anchorOrigin={{ vertical: "center", horizontal: "center" }}
                            open={showFeedback}
                            onClose={handleFeedbackClose}
                            style={{ top: "2rem" }}
                        >
                            <iframe
                                src="https://docs.google.com/forms/d/e/1FAIpQLSeqmdcJt44fExwl5vgHrPZiYbLhaC70UGmg38OEvopaNqbISQ/viewform?embedded=true"
                                title="Feedback"
                                width="640px"
                                height="765"
                            />
                        </Popover>
                    </>}
                    {mobile && <>
                        <AppBar className={classes.appbar}>
                            <IconButton className={classes.hamburgerMenu} onClick={handleDrawerToggle}>
                                <Menu fontSize="inherit" />
                            </IconButton>
                            <Typography className={classes.mobileNavBar} variant="h5">
                                Charlotte Area Robotics
                            </Typography>
                        </AppBar>
                        <Drawer
                            open={showSidebar}
                            onClose={() => setShowSidebar(false)}
                        >
                            <NavBarContent
                                showSidebar={setShowSidebar}
                                isSidebar={true}
                                handleFeedbackClick={handleFeedbackClick}
                                classes={classes}
                            />
                        </Drawer>
                        <Popover
                            anchorEl={anchorEl}
                            anchorOrigin={{ vertical: "center", horizontal: "center" }}
                            open={showFeedback}
                            onClose={handleFeedbackClose}
                        >
                            <iframe
                                src="https://docs.google.com/forms/d/e/1FAIpQLSeqmdcJt44fExwl5vgHrPZiYbLhaC70UGmg38OEvopaNqbISQ/viewform?embedded=true"
                                title="Feedback"
                                width="640px"
                                height="765"
                            />
                        </Popover>
                    </>}
                </>
            )}
        </MobileContext.Consumer >
    )
}