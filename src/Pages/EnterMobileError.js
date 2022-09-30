import React from "react";
import {
  Box,
  Paper,
  TextField,
  Button,
  Typography,
  makeStyles
} from "@material-ui/core";
import CommonButton from "../Utils/CommonButton";
import Header from "../Utils/Header";
import Mobile from "../Utils/Mobile";

const useStyles = makeStyles((theme) => ({
  box: {
    width: "414px",
    height: "600px",
    backgroundColor: "#fdfbf2"
  }
}));
const EnterMobileError = () => {
  const classes = useStyles();

  return (
    <Box className={classes.box}>
      <Header label="Hey Harsha! " />

      <Paper
        style={{
          width: "355px",
          height: "414px",
          borderRadius: "10px",
          align: "center",
          border: "#0000001A"
        }}
      >
        <Mobile
          otpmsg="Enter Valid Mobile Number"
          name="Harsha"
          mobile="98675"
          otpcolor="#FF1400"
        />
        <CommonButton btnVariant="contained" disabled={true} label="NEXT" />
        <CommonButton btnVariant="text" label="SKIP" />
      </Paper>
    </Box>
  );
};
export default EnterMobileError;
