import {withStyles} from "@material-ui/styles";
import {Tooltip, Theme} from "@material-ui/core";
import React from "react";

const CustomTooltip = withStyles((theme: Theme) => ({
    tooltip: {
      fontSize: 15,
      fontFamily: "Inconsolata",
    },
}))(Tooltip);

export default function EasyToSeeTooltip(props: any){
  return (
    <CustomTooltip title={props.title as String} >
      {props.children}
    </CustomTooltip>
  );
}