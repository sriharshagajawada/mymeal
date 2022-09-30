import MenuRoundedIcon from "@material-ui/icons/MenuRounded";
import {
  Box,
  Paper,
  TextField,
  Button,
  Typography,
  makeStyles,
  Grid
} from "@material-ui/core";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import NotificationsOutlinedIcon from "@material-ui/icons/NotificationsOutlined";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import HomeIcon from "@material-ui/icons/Home";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";

import AccountBoxIcon from "@material-ui/icons/AccountBox";
const UserLanding = () => {
  return (
    <Box
      style={{
        width: "414px",
        height: "600px",
        backgroundColor: "#fdfbf2",
        border: "1px solid-black"
      }}
    >
      <Grid container alignItems="center">
        <Grid item xs={1}>
          <MenuRoundedIcon style={{ fontSize: "30px" }}></MenuRoundedIcon>
        </Grid>
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
          <ShoppingCartOutlinedIcon
            style={{ marginLeft: "80px" }}
          ></ShoppingCartOutlinedIcon>
        </Grid>
        <Grid item xs={2}>
          <NotificationsOutlinedIcon
            style={{ marginLeft: "60px" }}
          ></NotificationsOutlinedIcon>
        </Grid>
      </Grid>

      <BottomNavigation style={{ marginTop: "500px", color: "#000000CB" }}>
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction
          label="Subcriptions"
          icon={<SubscriptionsIcon />}
        />
        <BottomNavigationAction label="Food" icon={<FastfoodIcon />} />
        <BottomNavigationAction label="Account" icon={<AccountBoxIcon />} />
      </BottomNavigation>
    </Box>
  );
};
export default UserLanding;
