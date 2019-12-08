import React from "react";
import { AppBar, makeStyles, Theme, createStyles, Popover, SwipeableDrawer, IconButton, Typography, ClickAwayListener } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { Breakpoint } from "react-socks";
import NavBarContent from "./NavBarContent";
import "../Main.scss";
import { COLORS } from "../../Utils/COLORS";
import Iframe from "react-iframe";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appbar: {
            zIndex: theme.zIndex.drawer + 1,
            backgroundColor: COLORS.darkColor,
            height: "max-content",
            position: "fixed",
            boxShadow: "0px 0px 10px black",
        },
        feedbackSidebar: {
            textAlign: "center",
            position: "absolute",
            left: "35%",
            bottom: "0",
        },
        paper: {
            background: COLORS.darkColor,
            color: COLORS.mainWhite,
        },
        hamburgerMenu: {
            color: COLORS.mainWhite,
            position: "absolute",
        },
        mobileNavBar: {
            alignSelf: "center",
            margin: "auto",
            padding: "0.5rem",
        },
    }),
);

export default function NavBar() {
    const [showFeedback, setShowFeedback] = React.useState<boolean>(false);
    const [showSidebar, setShowSidebar] = React.useState<boolean>(false);
    const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

    const handleFeedbackClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        setAnchorEl(event.currentTarget);
        setShowFeedback(true);
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
        <>
            <Breakpoint large up>
                <AppBar className={classes.appbar}>
                    <NavBarContent
                        isSidebar={false}
                        handleFeedbackClick={handleFeedbackClick}
                        classes={classes}
                    />
                </AppBar>
            </Breakpoint>
            <Breakpoint medium down>
                <ClickAwayListener onClickAway={() => setShowSidebar(false)}>
                    <AppBar className={classes.appbar}>
                        <IconButton className={classes.hamburgerMenu} onClick={handleDrawerToggle}>
                            <Menu fontSize="inherit" />
                        </IconButton>
                        <Typography className={classes.mobileNavBar} variant="h5">
                            Charlotte Area Robotics
                    </Typography>
                    </AppBar>
                </ClickAwayListener>
                <SwipeableDrawer
                    onOpen={() => setShowSidebar(true)}
                    onClose={() => setShowSidebar(false)}
                    open={showSidebar}
                    classes={{ paper: classes.paper }}
                    variant="persistent"
                    anchor="left"
                >
                    <NavBarContent
                        showSidebar={setShowSidebar}
                        isSidebar={true}
                        handleFeedbackClick={handleFeedbackClick}
                        classes={classes}
                    />
                </SwipeableDrawer>
            </Breakpoint>
            <Popover
                anchorEl={anchorEl}
                anchorOrigin={{ vertical: "center", horizontal: "center" }}
                open={showFeedback}
                onClose={handleFeedbackClose}
            >
                <Iframe url="https://docs.google.com/forms/d/e/1FAIpQLSeqmdcJt44fExwl5vgHrPZiYbLhaC70UGmg38OEvopaNqbISQ/viewform?embedded=true" title="Feedback" width="640px" height="765" />
            </Popover>
        </>
    )
}