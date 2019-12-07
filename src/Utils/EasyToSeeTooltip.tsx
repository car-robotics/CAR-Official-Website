import { withStyles } from "@material-ui/styles";
import { Tooltip, Theme } from "@material-ui/core";
import React from "react";

const CustomTooltip = withStyles((theme: Theme) => ({
  tooltip: {
    fontSize: "1.25rem",
    fontFamily: "Inconsolata",
    backgroundColor: "#5a5a5a",
  },
}))(Tooltip);

export default function EasyToSeeTooltip(props: any) {
  return (
    <CustomTooltip {...props} title={props.title as String} >
      {props.children}
    </CustomTooltip>
  );
}