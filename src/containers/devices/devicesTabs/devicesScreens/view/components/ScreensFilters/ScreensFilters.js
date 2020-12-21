import React, { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import useStyles from "./styles";

import DateFnsUtils from "@date-io/date-fns";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

const ScreensFilters = (props) => {
  const {
    id,
    users,
    selectedUser,
    screensChangeSelectedUser,
    filterScreenshots,
  } = props;

  const [selectedDateStart, handleDateChangeStart] = useState();
  // const [selectedDateEnd, handleDateChangeEnd] = useState();

  const convertDateToTimestamp = (date) => {
    return Math.floor(date.getTime() / 1000);
  };

  const dateChange = (event) => {
    // console.log(event);
    handleDateChangeStart(event);
    filterScreenshots(
      convertDateToTimestamp(event),
      convertDateToTimestamp(new Date())
    );
  };

  const handleChange = (event) => {
    const changeSelectedUser = event.target.value;
    screensChangeSelectedUser(id, changeSelectedUser);
  };

  let selecUser;
  if (!selectedUser) {
    selecUser = "";
  } else {
    selecUser = selectedUser;
  }

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="select-outlined-label">Пользователи</InputLabel>
        <Select
          labelId="select-outlined-label"
          id="demo-simple-select-outlined"
          value={selecUser}
          onChange={handleChange}
          label="Пользователи"
        >
          {users &&
            users.map((user) => {
              return (
                <MenuItem key={user} value={user}>
                  {user}
                </MenuItem>
              );
            })}
        </Select>
      </FormControl>

      <div className={classes.dateContainer}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DateTimePicker
            label="С какого времени искать"
            format="dd/MM/yyyy"
            autoOk
            inputVariant="outlined"
            value={selectedDateStart}
            onChange={dateChange}
          />

          {/* <DateTimePicker
            label="По"
            format="dd/MM/yyyy"
            autoOk
            // variant="inline"
            inputVariant="outlined"
            value={selectedDateEnd}
            onChange={handleDateChangeEnd}
          /> */}
        </MuiPickersUtilsProvider>
      </div>
    </div>
  );
};

export default ScreensFilters;

// <form className={classes.container} noValidate>
// <TextField
//   id="datetime-local"
//   label="С какого времени искать"
//   type="datetime-local"
//   variant="outlined"
//   className={classes.textField}
//   InputLabelProps={{
//     shrink: true,
//   }}
// />
// </form>
