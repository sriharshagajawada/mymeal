import React from "react";
import {
  Box,
  Paper,
  TextField,
  Button,
  Typography,
  makeStyles,
  Grid
} from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  header: {
    width: "414px",
    height: "600px",
    backgroundColor: "#fdfbf2"
  },
  paper: {
    width: "355px",
    height: "359px",
    borderRadius: "10px",
    align: "center",
    border: "#0000001A"
  },
  boxes: {
    width: "61px",
    height: "75px",
    backgroundColor: "#F4F4F4"
  }
}));

const Enterotp = (props) => {
  const { disp, otp, message, color } = props;
  const classes = useStyles();
  return (
    <Box className={classes.header}>
      <Typography variant="h4" style={{ fontWeight: "bold" }}>
        MY MEAL
      </Typography>

      <Paper className={classes.paper}>
        <Grid
          container
          xs={12}
          justifyContent="space-between"
          alignItems="center"
        >
          <Grid xs={6}>
            <Typography
              variant="h6"
              sx={{
                fontFamily: "Poppins",
                fontSize: "18px",
                fontWeight: "bold"
              }}
            >
              Enter OTP
            </Typography>
          </Grid>
          <Grid xs={6}>
            <h6
              style={{
                fontFamily: "Poppins",
                fontSize: "14px",
                color: "#909090"
              }}
            >
              00:15
            </h6>
          </Grid>
        </Grid>
        <Grid container justifyContent="space-around">
          <Box className={classes.boxes}>
            <Typography variant="h6">{otp}</Typography>
          </Box>
          <Box className={classes.boxes}>
            <Typography variant="h6">{otp}</Typography>
          </Box>
          <Box className={classes.boxes}>
            <Typography variant="h6" align="center">
              {otp}
            </Typography>
          </Box>
          <Box className={classes.boxes}>
            <Typography variant="h6">{otp}</Typography>
          </Box>
        </Grid>
        <Typography variant="p" style={{ display: disp, color: color }}>
          {message}
        </Typography>
        <Grid container justifyContent="space-around">
          <Grid item>
            <Typography
              variant="p"
              style={{
                fontFamily: "Poppins",
                fontSize: "14px",
                color: "#909090"
              }}
            >
              Didn't get the code
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              variant="p"
              style={{
                fontFamily: "Poppins",
                fontSize: "14px",
                color: "#F07F3C"
              }}
            >
              Resend the code
            </Typography>
          </Grid>
        </Grid>
        <Button
          variant={{}}
          style={{
            height: "50px",
            width: "308px",
            color: "#FFFFFF",
            backgroundColor: "#D5D5D5",
            borderRadius: "30px",
            marginTop: "50px"
          }}
        >
          SUBMIT
        </Button>
      </Paper>
    </Box>
  );
};
export default Enterotp;
