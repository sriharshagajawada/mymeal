import react from "react";
import {
  Box,
  Paper,
  TextField,
  Button,
  Typography,
  makeStyles,
  Grid
} from "@material-ui/core";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
const useStyles = makeStyles((theme) => ({
  box: {
    width: "414px",
    height: "1589px",
    backgroundColor: "#fdfbf2",
    marginTop: "5px"
  },
  paper: {
    width: "390px",
    height: "1517px",
    borderRadius: "10px",
    align: "center",
    border: "#0000001A"
  }
}));
const Menu = () => {
  const classes = useStyles();
  const dates = ["Mon,Jun1", "Tue,Jun2", "Wed,Jun2"];
  return (
    <Box className={classes.box}>
      <Paper className={classes.paper}>
        <Grid container justifyContent="space-around" alignItems="center">
          <Grid item>
            <Typography variant="h5">Upcoming menu</Typography>
          </Grid>
          <Grid item>
            <CloseRoundedIcon></CloseRoundedIcon>
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
      </Paper>
    </Box>
  );
};
export default Menu;
