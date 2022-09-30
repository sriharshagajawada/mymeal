import React from "react";
import { Button, Box, makeStyles, Typography } from "@material-ui/core";
import Header from "../Utils/Header";

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
  const navigate = useNavigate();
  return (
    <Box className={classes.header}>
      <Header label="Welcome to My Meal" />

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
        onClick={() => navigate("/login")}
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
        onClick={() => navigate("/newuserlanding")}
      >
        SKIP TO HOME
      </Button>
    </Box>
  );
}
export default Login;
