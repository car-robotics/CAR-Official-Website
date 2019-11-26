import React from "react";
import { Tabs, Tab, IconButton, withStyles, makeStyles, Theme, createStyles } from "@material-ui/core";
import { Feedback } from "@material-ui/icons";
import { Link } from "react-router-dom";
import EasyToSeeTooltip from "./EasyToSeeTooltip";

interface NavBarContentProps {
    handleFeedbackClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    classes: Record<"appbar" | "feedbackSidebar", string>,
    isSidebar: boolean,
    showSidebar?: React.Dispatch<React.SetStateAction<boolean>>;
}

//Custom Tabs component for styling
const NavTabs = withStyles({
    root: {
        margin: "auto",
    },
    indicator: {
        backgroundColor: '#B3A369',
        height: "4px",
    },
})(Tabs); //<- Uses Material UI Tabs component but overrides what's above

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        mobile: {
            margin: "auto",
        },
        desktop: {
            display: "inline-flex",
        },
    }),
);

const getTabWithPath = () => {
    const path = window.location.pathname;
    if (path === "/about") return 1;
    if (path === "/sponsors") return 2;
    if (path === "/competition") return 3;
    if (path === "/outreach") return 4;
    if (path === "/archive") return 5;
    return 0;
}

export default function NavBarContent(props: NavBarContentProps) {
    const [value, setValue] = React.useState<number>(getTabWithPath()); //set index of 1 for default value which is Home tab
    const { handleFeedbackClick, classes, isSidebar, showSidebar } = props;

    const styles = useStyles();

    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
        if (showSidebar) showSidebar(false);
        setValue(newValue);
    };

    return (
        <>
            <div className={isSidebar ? styles.mobile : styles.desktop}>
                <NavTabs orientation={isSidebar ? "vertical" : "horizontal"} scrollButtons="auto" variant="scrollable" value={value} onChange={handleChange}>
                    <Tab className="NavBarSelection" disableFocusRipple label="Home" component={Link} to="/" />
                    <Tab className="NavBarSelection" disableFocusRipple label="About" component={Link} to="/about" />
                    <Tab className="NavBarSelection" disableFocusRipple label="Sponsors" component={Link} to="/sponsors" />
                    <Tab className="NavBarSelection" disableFocusRipple label="Competition" component={Link} to="/competition" />
                    <Tab className="NavBarSelection" disableFocusRipple label="Outreach" component={Link} to="/outreach" />
                    <Tab className="NavBarSelection" disableFocusRipple label="Archive" component={Link} to="/archive" />
                </NavTabs>
                <EasyToSeeTooltip title="Feedback Button">
                    <IconButton onClick={handleFeedbackClick} className={isSidebar ? classes.feedbackSidebar : ""}>
                        <Feedback style={{ color: "white" }} color="action" />
                    </IconButton>
                </EasyToSeeTooltip>
            </div>
        </>
    )
}