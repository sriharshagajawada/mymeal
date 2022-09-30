import {
  Box,
  Paper,
  TextField,
  Button,
  Typography,
  makeStyles,
  Grid
} from "@material-ui/core";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const useStyles = makeStyles((theme) => ({
  paper: {
    width: "390px",
    height: "482px",
    opacity: "1",
    marginTop: "300px",
    borderRadius: "30px"
  },
  box: {
    width: "414px",
    height: "900px",
    backgroundColor: "#fdfbf2",
    border: "1px solid-black",
    opacity: "0.5"
  }
}));
const Addon = () => {
  const classes = useStyles();
  return (
    <Box className={classes.box}>
      <Paper variant="outlined">
        <Grid container alignItems="center">
          <Grid item xs={1}></Grid>
          <Grid item xs={6}>
            <Typography
              variant="p"
              style={{
                fontFamily: "poppins",
                fontSize: "12px",
                color: "#B6B7B7",
                marginRight: "60px"
              }}
            >
              Delivering to
            </Typography>
            <Typography
              variant="p"
              style={{
                fontFamily: "poppins",
                fontSize: "12px",
                display: "block",
                marginRight: "60px"
              }}
            >
              2/76,Shivajinagar...
            </Typography>
          </Grid>

          <Grid item xs={2}>
            <NotificationsOutlinedIcon
              style={{ marginLeft: "60px" }}
            ></NotificationsOutlinedIcon>
          </Grid>
          <Grid item xs={3}>
            <MenuRoundedIcon style={{ fontSize: "30px" }}></MenuRoundedIcon>
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.paper} elevation={20}>
        <Grid container justifyContent="space-around" alignItems="center">
          <Grid item>
            <Typography variant="h6">Add Item</Typography>
          </Grid>
          <Grid item>
            <CloseRoundedIcon />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};
export default Addon;
