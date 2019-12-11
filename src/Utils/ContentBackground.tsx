import { withStyles } from "@material-ui/styles";
import { Paper } from "@material-ui/core";

export const ContentBackground = withStyles({
    root: {
        borderRadius: "1rem",
    },
})(Paper);