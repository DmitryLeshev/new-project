import React, { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core";
import useStyles from "./styles";

import DateFnsUtils from "@date-io/date-fns";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";

const ScreensFilters = (props) => {
  const { id, users, selectedUser, screensChangeSelectedUser } = props;
  const [selectedDate, handleDateChange] = useState(new Date());

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
            label="С"
            format="MM/dd/yyyy"
            autoOk
            // variant="inline"
            inputVariant="outlined"
            value={selectedDate}
            onChange={handleDateChange}
          />

          <DateTimePicker
            label="По"
            format="MM/dd/yyyy"
            autoOk
            // variant="inline"
            inputVariant="outlined"
            value={selectedDate}
            onChange={handleDateChange}
          />
        </MuiPickersUtilsProvider>
      </div>
    </div>
  );
};

export default ScreensFilters;
