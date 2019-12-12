import { responsiveFontSizes, createMuiTheme } from "@material-ui/core";
import { COLORS } from "../Utils/COLORS";

export const theme = responsiveFontSizes(createMuiTheme({
    typography: {
        allVariants: {
            fontFamily: "Inconsolata",
            fontWeight: 700,
        },
    },
    overrides: {
        MuiLink: {
            root: {
                color: COLORS.linkGreen,
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
        MuiDrawer: {
            paper: {
                borderRadius: "0",
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
    palette: {
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
}));