import React from "react";
import { Button, makeStyles, Paper } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  btn: {
    borderRadius: "30px",
    height: "50px",
    width: "287px"
  }
}));

const CommonButton = (props) => {
  const classes = useStyles();
  const {
    btnVariant,
    btnColor,
    fullWidth,
    label,
    disabled,
    color,
    onclick = () => {}
  } = props;
  return (
    <Button
      variant={btnVariant}
      fullWidth={fullWidth}
      className={classes.btn}
      disabled={disabled}
      style={{ backgroundColor: btnColor, color: color }}
      onClick={onclick}
    >
      {label}
    </Button>
  );
};

export default CommonButton;
