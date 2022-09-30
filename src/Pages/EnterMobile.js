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
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  box: {
    width: "414px",
    height: "1000px",
    backgroundColor: "#fdfbf2"
  }
}));
const EnterMobile = (props) => {
  const navigate = useNavigate();
  const classes = useStyles();
  const { message, name, mobile, otpmsg, otpcolor } = props;
  const changepath = () => {
    navigate("/newuserlanding");
  };
  return (
    <Box className={classes.box}>
      <Header label="Hey there! " />

      <Paper
        style={{
          width: "355px",
          height: "414px",
          borderRadius: "10px",
          align: "center",
          border: "#0000001A"
        }}
      >
        <Mobile otpmsg="OTP will be sent on this mobile number" />
        <CommonButton btnVariant="contained" disabled={true} label="NEXT" />
        <CommonButton label="SKIP" onclick={changepath} />
      </Paper>
    </Box>
  );
};
export default EnterMobile;
