import { createMuiTheme } from "@material-ui/core";
import { COLORS } from "./COLORS";

export const theme = createMuiTheme({
  typography: {
    fontFamily: "Noto Sans KR, sans-serif",
    h1: {
      fontWeight: 600,
      letterSpacing: "1px"
    },
    h2: {
      fontWeight: 600,
      letterSpacing: "1px"
    },
    h3: {
      fontWeight: 600,
      letterSpacing: "1px"
    },
    h4: {
      fontWeight: 600,
      letterSpacing: "1px"
    },
    body1: {
      fontWeight: 300
    }
  },
  palette: {
    primary: {
      main: COLORS.schoolGold
    },
    secondary: {
      main: COLORS.darkColor
    },
    divider: COLORS.schoolGold,
    text: {
      primary: COLORS.schoolGold,
      secondary: COLORS.darkColor
    },
    background: {
      paper: COLORS.darkColor,
      default: COLORS.schoolGreen
    },
    action: {
      active: COLORS.mainWhite
    }
  },
  overrides: {
    MuiLink: {
      root: {
        color: COLORS.linkGreen
      }
    },
    MuiDrawer: {
      paper: {
        boxShadow: "0 0 0 1px",
        borderRadius: "0"
      }
    },
    MuiTooltip: {
      tooltip: {
        fontSize: "1.25rem",
        backgroundColor: "#5a5a5a"
      }
    },
    MuiDivider: {
      root: {
        margin: "1rem",
        height: "2px"
      }
    },
    MuiPopover: {
      paper: {
        backgroundColor: COLORS.mainWhite,
        top: "3vh !important"
      }
    },
    MuiTabs: {
      root: {
        margin: "auto"
      },
      indicator: {
        backgroundColor: COLORS.schoolGold,
        height: "2rem",
        width: "4px",
        bottom: "20%",
        zIndex: -1,
        borderRadius: "1rem"
      }
    },
    MuiTab: {
      root: {
        fontWeight: 600,
        letterSpacing: "1px"
      }
    },
    MuiAppBar: {
      root: {
        borderRadius: "0",
        height: "max-content",
        position: "fixed",
        boxShadow: "0px 0px 10px black"
      },
      colorPrimary: {
        backgroundColor: COLORS.darkColor,
        color: COLORS.mainWhite
      }
    },
    MuiPaper: {
      root: {
        borderRadius: "1rem"
      },
      rounded: {
        borderRadius: "1rem"
      }
    }
  }
});
