import MenuList from "./MenuList.json";
import {
  makeStyles,
  Box,
  Paper,
  Typography,
  Grid,
  Button,
  ButtonGroup,
  Divider
} from "@material-ui/core";
import AdjustIcon from "@material-ui/icons/Adjust";
import ArrowBackRoundedIcon from "@material-ui/icons/ArrowBackRounded";
import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import { Fragment, useEffect, useState } from "react";
import { EmojiObjectsRounded } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  header: {
    width: "414px",
    height: "1200px",
    backgroundColor: "#fdfbf2"
  },
  btn: {
    borderRadius: "2rem",
    margin: "5px",
    padding: "0.5rem",
    width: "87px",
    fontSize: "8px",
    color: "black",
    backgroundColor: "#FFFFFF"
  },
  paper: {
    width: "377px",
    height: "maxContent",
    borderRadius: "10px",
    align: "center",
    border: "#0000001A",
    margin: "10px"
  },
  session: {
    textAlign: "left",
    marginLeft: "20px",
    // marginTop: "20px"
    paddingTop: "20px"
  },
  active: {
    background: "#F07F3C",
    color: "white"
  },
  nxtbtn: {
    borderRadius: "30px",
    backgroundColor: "#F07F3C",
    height: "50px",
    width: "361px",
    margin: "20px",
    color: "#FFFFFF"
  },
  Adj: {
    color: "#388E3C"
  },
  qbtn: {
    width: "5px",
    height: "20px",
    backgroundColor: "#F07F3C",
    borderRadius: "22rem",
    boxShadow: "none"
  }
}));
const Mealplan = () => {
  const classes = useStyles();
  const dates = ["Mon,Jun1", "Tue,Jun2", "Wed,Jun2"];
  const { menu, sessions, extras } = { ...MenuList };
  const [menuListDetails, setMenuListDetails] = useState({});

  const [state, setState] = useState({
    breakfastlist: [],
    dinnerlist: [],
    lunchlist: [],
    lunch: "",
    breakfast: "",
    dinner: ""
  });

  const arr = ["BREAKFAST", "DINNER", "LUNCH"];

  useEffect(() => {
    let sessionDetails = {};
    arr.forEach((session) => {
      sessionDetails[session] = { menuList: [], listofcat: [] };
    });
    console.log(sessionDetails);
    Object.values(sessionDetails).forEach((obj) => {
      obj.listofcat = [...extras.listofcat];
    });
    menu.forEach((itemobj) => {
      const {
        foodname,
        foodid,
        foodinfo,
        sessionlist,
        listofcategories,
        display_price,
        vegflag
      } = itemobj;
      arr.forEach((session) => {
        if (sessionlist.includes(session)) {
          sessionDetails[session].menuList.push({
            foodname,
            foodid,
            foodinfo,
            sessionlist,
            listofcategories,
            vegflag,
            display_price
          });
        }
      });
    });
    setMenuListDetails(sessionDetails);
  }, []);
  useEffect(() => {
    if (menuListDetails?.LUNCH?.menuList) {
      setState({
        ...state,
        lunchlist: menuListDetails.LUNCH.menuList
          ?.filter((obj) => obj.listofcategories?.includes(state.lunch))
          .map((food) => ({ food, quantity: 0 }))
      });
    }
  }, [state.lunch]);
  useEffect(() => {
    if (menuListDetails?.DINNER?.menuList) {
      setState({
        ...state,
        dinnerlist: menuListDetails.DINNER.menuList
          ?.filter((obj) => obj.listofcategories?.includes(state.dinner))

          .map((food) => ({ food, quantity: 0 }))
      });
    }
  }, [state.dinner]);

  useEffect(() => {
    if (menuListDetails?.BREAKFAST?.menuList) {
      setState({
        ...state,
        breakfastlist: menuListDetails.BREAKFAST.menuList
          ?.filter((obj) => obj.listofcategories?.includes(state.breakfast))
          .map((food) => ({ food, quantity: 0 }))
      });
    }
  }, [state.breakfast]);
  return (
    <Box className={classes.header}>
      <Grid container justifyContent="space-around" alignContent="center">
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
            variant="cont
            ained"
            style={{
              borderRadius: "30px",
              backgroundColor: "#F07F3C",
              width: "90px",
              height: "29px",
              color: "#FFFFFF",
              fontSize: "12px"
            }}
          >
            <MenuRoundedIcon
              style={{ width: "20.7px", height: "16.14px" }}
            ></MenuRoundedIcon>
            Menu
          </Button>
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

      <Paper className={classes.paper}>
        <Typography variant="h5" className={classes.session}>
          {Object.keys(sessions)[0]}
        </Typography>
        <Grid container justifyContent="space-around">
          {extras.listofcat.map((cat) => {
            return (
              <Button
                onClick={() => setState({ ...state, breakfast: cat })}
                className={`${classes.btn} ${
                  state.breakfast === cat ? classes.active : ""
                }`}
                variant="contained"
              >
                {cat}
              </Button>
            );
          })}
        </Grid>
        <Grid>
          <Grid container justifyContent="space-around">
            {state.breakfastlist.map((obj, i) => {
              return (
                <Grid>
                  <Grid container>
                    <Grid
                      container
                      item
                      xs={6}
                      style={{
                        flexWrap: "nowrap"
                      }}
                    >
                      <Grid item xs={2}>
                        {obj.food.vegflag === "V" ? (
                          <AdjustIcon style={{ color: "#388E3C" }}>
                            {" "}
                          </AdjustIcon>
                        ) : (
                          <AdjustIcon style={{ color: "#E62929" }}>
                            {" "}
                          </AdjustIcon>
                        )}
                      </Grid>
                      <Grid item xs={16} justifyContent="center">
                        <Typography
                          variant="h6"
                          style={{
                            fontSize: "15px",
                            textAlign: "start"
                          }}
                        >
                          {obj.food.foodname}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Grid container item xs={6}>
                      <Grid item xs={12}>
                        <Typography variant="body1">
                          {Number(
                            obj.food.display_price * obj.quantity
                          ).toFixed(2)}
                        </Typography>
                      </Grid>

                      <Grid item xs={12}>
                        <ButtonGroup
                          variant="contained"
                          aria-label="outlined primary button group"
                          size="small"
                          style={{ boxShadow: "none", padding: "5px" }}
                        >
                          <Button
                            disabled={state.breakfastlist[i].quantity === 0}
                            className={classes.qbtn}
                            onClick={() => {
                              setState({
                                ...state,
                                breakfastlist: state.breakfastlist.map(
                                  (ra, ind) =>
                                    i === ind
                                      ? {
                                          ...obj,
                                          quantity: obj.quantity - 1
                                        }
                                      : ra
                                )
                              });
                            }}
                          >
                            -
                          </Button>
                          <Button className={classes.qbtn}>
                            {obj.quantity}
                          </Button>
                          <Button
                            className={classes.qbtn}
                            onClick={() => {
                              setState({
                                ...state,
                                breakfastlist: state.breakfastlist.map(
                                  (ra, ind) =>
                                    i === ind
                                      ? {
                                          ...obj,

                                          quantity: obj.quantity + 1
                                        }
                                      : ra
                                )
                              });
                            }}
                          >
                            +
                          </Button>
                        </ButtonGroup>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
          <Divider orientation="vertical" flexItem />
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Typography variant="h5" className={classes.session}>
          {Object.keys(sessions)[2]}
        </Typography>
        <Grid container justifyContent="space-around">
          {extras.listofcat.map((cat) => {
            return (
              <Button
                onClick={() => setState({ ...state, lunch: cat })}
                className={`${classes.btn} ${
                  state.lunch === cat ? classes.active : ""
                }`}
                variant="contained"
              >
                {cat}
              </Button>
            );
          })}
        </Grid>
        <Grid
          container
          justifyContent="space-around"
          style={{ fontSize: "5px" }}
        >
          {state.lunchlist.map((obj) => {
            return (
              <Grid container>
                <Grid container item xs={6}>
                  <Grid item xs={2}>
                    <AdjustIcon> </AdjustIcon>
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="h6" style={{ fontSize: "15px" }}>
                      {obj.food.foodname}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="h6">{obj.food.quantity}</Typography>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Paper>
      <Paper className={classes.paper}>
        <Typography variant="h5" className={classes.session}>
          {Object.keys(sessions)[1]}
        </Typography>
        <Grid container justifyContent="space-around">
          {extras.listofcat.map((cat) => {
            console.log(cat);
            return (
              <Button
                onClick={() => setState({ ...state, dinner: cat })}
                className={`${classes.btn} ${
                  state.dinner === cat ? classes.active : ""
                }`}
                variant="contained"
              >
                {cat}
              </Button>
            );
          })}
        </Grid>
        <Grid container justifyContent="space-around">
          {state.dinnerlist.map((obj) => {
            return (
              <Grid container>
                <Grid container item xs={6}>
                  <Grid item xs={2}>
                    {obj[0] === "V" ? <AdjustIcon> </AdjustIcon> : ""}
                  </Grid>
                  <Grid item xs={4}>
                    <Typography variant="h6" style={{ fontSize: "15px" }}>
                      {obj[1]}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid container item xs={6}>
                  <Grid item xs={12}>
                    <Typography variant="h6">{obj[2]}</Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <ButtonGroup
                      variant="contained"
                      aria-label="outlined button group"
                    >
                      <Button>+</Button>
                      <Button> </Button>
                      <Button>-</Button>
                    </ButtonGroup>
                  </Grid>
                </Grid>
              </Grid>
            );
          })}
        </Grid>
      </Paper>
      <Button className={classes.nxtbtn}>Next</Button>
    </Box>
  );
};
export default Mealplan;
