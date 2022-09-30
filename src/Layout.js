import React from "react";
import {
  Box,
  Paper,
  TextField,
  Button,
  Typography,
  makeStyles
} from "@material-ui/core";
import CommonButton from "./Utils/CommonButton";

const useStyles = makeStyles((theme) => ({
  header: {
    width: "414px",
    height: "600px",
    backgroundColor: "#fdfbf2"
  }
}));
const Layout = (props) => {
  const classes = useStyles();
  const { message, name, mobile, otpmsg, otpcolor } = props;
  return (
    <Box className={classes.header}>
      <Typography variant="h4" style={{ fontWeight: "bold" }}>
        MY MEAL
      </Typography>
      <div style={{ textAlign: "left", marginLeft: "30px" }}>
        <h2>{message}</h2>
        <h4 style={{ color: "#909090" }}>Thanks for choosing us</h4>
      </div>
      <Paper
        style={{
          width: "355px",
          height: "414px",
          borderRadius: "10px",
          align: "center",
          border: "#0000001A"
        }}
      >
        <h4>Enter your details to proceed</h4>
        <TextField
          label="Name"
          value={name}
          variant="outlined"
          Style={{ borderColor: "#BCBCBC" }}
        />
        <TextField label="Mobile Number" variant="outlined" value={mobile} />
        <h6 style={{ color: otpcolor }}>{otpmsg}</h6>

        <CommonButton
          btnVariant="contained"
          disabled={true}
          btnStyle={{
            borderRadius: 30,
            height: "50px",
            width: "287px",
            margin: "20px"
          }}
          label="NEXT"
        />
        <CommonButton
          btnVariant="text"
          btnStyle={{
            height: "23px",
            color: "#000000",
            width: "34px",
            margin: "20px"
          }}
          label="SKIP"
        />
      </Paper>
    </Box>
  );
};
export default Layout;
