import { withStyles } from "@material-ui/styles";
import { Paper } from "@material-ui/core";
import { COLORS } from "./COLORS";

export const ContentBackground = withStyles({
    root: {
        backgroundColor: COLORS.darkColor,
        borderRadius: "1rem",
        color: COLORS.schoolGold,
    },
})(Paper);