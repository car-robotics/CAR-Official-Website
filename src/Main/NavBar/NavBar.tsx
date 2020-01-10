import React from "react";
import { AppBar, makeStyles, Theme, createStyles, Popover, IconButton, Typography, Drawer } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { Breakpoint } from "react-socks";
import NavBarContent from "./NavBarContent";
import "../Main.scss";

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
            top: "10%",
            left: "1%",
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
            </Breakpoint>
            <Breakpoint medium down>
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
                        style={{ width: "90vw", height: "77vh", border: 0 }}
                    />
                </Popover>
            </Breakpoint>
        </>
    )
}