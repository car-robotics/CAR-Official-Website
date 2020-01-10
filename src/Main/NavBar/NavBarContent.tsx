import React from "react";
import { Tabs, Tab, IconButton, makeStyles, Theme, createStyles, Tooltip } from "@material-ui/core";
import { Feedback } from "@material-ui/icons";
import { Link } from "react-router-dom";

interface NavBarContentProps {
    handleFeedbackClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
    classes: Record<"appbar" | "feedbackSidebar", string>,
    isSidebar: boolean,
    showSidebar?: React.Dispatch<React.SetStateAction<boolean>>;
}

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
    const path = window.location.hash;
    if (path === "#/about") return 1;
    if (path === "#/sponsors") return 2;
    if (path === "#/competition") return 3;
    if (path === "#/outreach") return 4;
    if (path === "#/archive") return 5;
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

    // Used to make sure we update NavBar selection on page forward or page backward
    window.onhashchange = () => {
        setValue(getTabWithPath());
    }

    return (
        <>
            <div className={isSidebar ? styles.mobile : styles.desktop}>
                <Tabs orientation={isSidebar ? "vertical" : "horizontal"} scrollButtons="auto" variant="scrollable" value={value} onChange={handleChange}>
                    <Tab className="NavBarSelection" label="Home" component={Link} to="/" />
                    <Tab className="NavBarSelection" label="About" component={Link} to="/about" />
                    <Tab className="NavBarSelection" label="Sponsors" component={Link} to="/sponsors" />
                    <Tab className="NavBarSelection" label="Competition" component={Link} to="/competition" />
                    <Tab className="NavBarSelection" label="Outreach" component={Link} to="/outreach" />
                    <Tab className="NavBarSelection" label="Archive" component={Link} to="/archive" />
                </Tabs>
                <Tooltip title="Feedback">
                    <IconButton onClick={handleFeedbackClick} className={isSidebar ? classes.feedbackSidebar : ""}>
                        <Feedback />
                    </IconButton>
                </Tooltip>
            </div>
        </>
    );
}