import {
  Box,
  Paper,
  TextField,
  Button,
  Typography,
  makeStyles,
  Grid
} from "@material-ui/core";
import Cal from "../Utils/Calendar";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import { useNavigate } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  box: {
    width: "414px",
    height: "1000px",
    backgroundColor: "#fdfbf2",
    margin: "50px"
  },
  button: {
    width: "150px",
    height: "36px",
    borderRadius: "30px",
    margin: "20px"
  },
  menu: {
    marginTop: "50px"
  }
}));
const SelectDate = () => {
  const classes = useStyles();
  const navigate = useNavigate();
  const buttons = ["Breakfast", "Lunch", "Dinner", "All"];
  const buttons2 = ["3 day", "7 Days", "14 Days", "1 Month"];

  return (
    <Box className={classes.box}>
      <Grid container justifyContent="space-around" className={classes.menu}>
        <Grid item>
          <ArrowBackRoundedIcon
            style={{ fontSize: "30px" }}
          ></ArrowBackRoundedIcon>
        </Grid>
        <Grid item>
          <Typography variant="h5">My Meal Plan</Typography>
        </Grid>
        <Grid item>
          <Button
            variant="contained"
            style={{
              borderRadius: "30px",
              backgroundColor: "#F07F3C",
              width: "90px",
              height: "29px",
              color: "#FFFFFF",
              fontSize: "12px"
            }}
            onClick={() => navigate("/mealplan")}
          >
            <MenuRoundedIcon
              style={{ width: "20.7px", height: "16.14px" }}
            ></MenuRoundedIcon>
            Menu
          </Button>
        </Grid>
      </Grid>
      <Paper
        className="classes.paper"
        style={{
          width: "377px",
          height: "178px",
          borderRadius: "10px",
          margin: "10px"
        }}
      >
        <Typography variant="h6" style={{ marginRight: "210px" }}>
          Select meal for
        </Typography>
        <Grid container justifyContent="space-around">
          {buttons.map((button) => {
            return (
              <Grid item xs={6}>
                <Button variant="outlined" className={classes.button}>
                  {button}
                </Button>
              </Grid>
            );
          })}
        </Grid>
      </Paper>
      <Paper
        style={{
          width: "377px",
          height: "280px",
          borderRadius: "10px",
          margin: "10px"
        }}
      >
        <Typography variant="h6" style={{ marginRight: "250px" }}>
          Select days
        </Typography>
        <Grid container>
          {buttons2.map((button) => {
            return (
              <Grid item xs={3}>
                <Button
                  variant="outlined"
                  style={{
                    height: "72px",
                    width: "70px",
                    borderRadius: "10px",
                    marginTop: "30px"
                  }}
                >
                  {button}
                </Button>
              </Grid>
            );
          })}
        </Grid>
        <Typography
          variant="h6"
          style={{ marginRight: "170px", marginTop: "20px" }}
        >
          Weekends included?
        </Typography>
      </Paper>
      <Paper
        style={{
          width: "377px",
          height: "357px"
        }}
      >
        <Cal />
      </Paper>
    </Box>
  );
};
export default SelectDate;
