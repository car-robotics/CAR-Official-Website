import { withStyles } from "@material-ui/styles";
import { Paper } from "@material-ui/core";

export const ContentBackground = withStyles({
    root: {
        backgroundColor: "#212B31",
        borderRadius: "1rem",
        color: "#B3A369",
    },
})(Paper);