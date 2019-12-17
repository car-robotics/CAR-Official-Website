import { responsiveFontSizes, createMuiTheme } from "@material-ui/core";
import { COLORS } from "../Utils/COLORS";

export const theme = responsiveFontSizes(createMuiTheme({
    typography: {
        allVariants: {
            fontFamily: "Inconsolata",
            fontWeight: 700,
        },
    },
    palette: {
        primary: {
            main: COLORS.schoolGold,
        },
        secondary: {
            main: COLORS.darkColor,
        },
        divider: COLORS.schoolGold,
        text: {
            primary: COLORS.schoolGold,
            secondary: COLORS.darkColor,
        },
        background: {
            paper: COLORS.darkColor,
            default: COLORS.schoolGreen,
        },
        action: {
            active: COLORS.mainWhite,
        }
    },
    overrides: {
        MuiLink: {
            root: {
                color: COLORS.linkGreen,
                fontFamily: "Inconsolata",
            },
        },
        MuiDrawer: {
            paper: {
                boxShadow: "0 0 0 1px",
                borderRadius: "0",
            },
        },
        MuiTooltip: {
            tooltip: {
                fontSize: "1.25rem",
                fontFamily: "Inconsolata",
                backgroundColor: "#5a5a5a",
            },
        },
        MuiDivider: {
            root: {
                margin: "1rem",
            },
        },
        MuiPopover: {
            paper: {
                backgroundColor: COLORS.mainWhite,
            },
        },
        MuiTabs: {
            root: {
                margin: "auto",
            },
            indicator: {
                backgroundColor: COLORS.schoolGold,
                height: "4px",
                width: "4px",
            },
        },
        MuiAppBar: {
            root: {
                borderRadius: "0",
                height: "max-content",
                position: "fixed",
                boxShadow: "0px 0px 10px black",
            },
            colorPrimary: {
                backgroundColor: COLORS.darkColor,
                color: COLORS.mainWhite,
            },
        },
        MuiPaper: {
            root: {
                borderRadius: "1rem",
            },
            rounded: {
                borderRadius: "1rem",
            }
        },
    },
}));