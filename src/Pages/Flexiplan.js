import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
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
  box: {
    width: "414px",
    height: "900px",
    backgroundColor: "#fdfbf2",
    border: "1px solid-black",
    opacity: "0.5"
  }
}));
const Flexi = () => {
  const classes = useStyles();
  const dates = ["Mon,Jun 1", "Tue,Jun 2", "Wed,Jun 3", "Thu,Jun 4"];

  return (
    <Box className={classes.box}>
      <Grid container>
        <Grid item>
          <ArrowBackRoundedIcon style={{ padding: "10px", marginTop: "5px" }} />
        </Grid>
        <Grid item>
          <Typography variant="h6" style={{ padding: "10px" }}>
            My Meal Plan
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        justifyContent="space-around"
        style={{ marginTop: "25px" }}
      >
        {dates.map((date) => {
          return <Grid item>{date}</Grid>;
        })}
      </Grid>
    </Box>
  );
};
export default Flexi;
