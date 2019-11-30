import {withStyles} from "@material-ui/styles";
import {Tooltip, Theme} from "@material-ui/core";

export default withStyles((theme: Theme) => ({
    tooltip: {
      fontSize: 15,
      fontFamily: "Inconsolata",
    },
}))(Tooltip);