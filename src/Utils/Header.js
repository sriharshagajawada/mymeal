import { Typography, Grid, makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  header: {
    textAlign: "left",
    marginLeft: "30px"
  },
  logo: {
    margin: "50px"
  }
}));

const Header = (props) => {
  const classes = useStyles();
  const { label } = props;

  return (
    <>
      <Typography variant="h2" className={classes.logo}>
        My Meal
      </Typography>
      <div className={classes.header}>
        <Typography variant="h4">{label}</Typography>
        <Typography variant="h6" style={{ color: "#909090" }}>
          Thanks for Choosing Us
        </Typography>
      </div>
    </>
  );
};
export default Header;
