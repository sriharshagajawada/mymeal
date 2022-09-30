import {
  Box,
  Paper,
  TextField,
  Button,
  Typography,
  makeStyles
} from "@material-ui/core";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import { useState } from "react";

import DateFnsUtils from "@date-io/date-fns";

import React from "react";
const Cal = () => {
  const [selectedDate, handleDateChange] = useState(new Date());
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <DatePicker
        variant="static"
        value={selectedDate}
        onChange={handleDateChange}
      />
    </MuiPickersUtilsProvider>
  );
};
export default Cal;
