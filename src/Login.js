import React from "react";
import { Button, Box, makeStyles } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  header: {
    width: "414px",
    height: "500px",
    backgroundColor: "#fdfbf2"
  }
}));

function Login() {
  const classes = useStyles();

  return (
    <Box className={classes.header}>
      <h1>MY MEAL</h1>
      <div style={{ textAlign: "left", marginLeft: "30px" }}>
        <h2>Welcome to My Meal</h2>
        <h4 style={{ color: "#909090" }}>Thanks for choosing us</h4>
      </div>
      <Button
        variant="contained"
        style={{
          borderRadius: "30px",
          backgroundColor: "#F07F3C",
          height: "50px",
          width: "361px",
          margin: "20px",
          color: "#FFFFFF"
        }}
      >
        LOGIN
      </Button>

      <Button
        variant="outlined"
        style={{
          borderRadius: "30px",
          color: "#000000",
          height: "50px",
          width: "361px"
        }}
      >
        SKIP TO HOME
      </Button>
    </Box>
  );
}
export default Login;
