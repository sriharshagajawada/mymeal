import React from "react";
import {
  Box,
  Paper,
  TextField,
  Button,
  Typography,
  makeStyles
} from "@material-ui/core";

const Mobile = (props) => {
  const { name, mobile, otpmsg, otpcolor, onclick = () => {} } = props;
  return (
    <>
      <h4 style={{ paddingTop: "30px" }}>Enter your details to proceed</h4>
      <TextField
        label="Name"
        value={name}
        variant="outlined"
        Style={{ borderColor: "#BCBCBC", margin: "200px" }}
        onClick={onclick}
      />

      <TextField label="Mobile Number" variant="outlined" value={mobile} />
      <h6 style={{ color: otpcolor }}>{otpmsg}</h6>
    </>
  );
};
export default Mobile;
