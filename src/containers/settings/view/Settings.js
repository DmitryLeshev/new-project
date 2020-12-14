import React, { useState } from "react";

import {
  Button,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  makeStyles,
  MenuItem,
  Paper,
  Select,
  Switch,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3),
    minHeight: "100%",
  },
  divider: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  formControl: {
    marginLeft: "auto",
    marginTop: theme.spacing(2),
    width: "300px",
  },
  settingsTitle: {},
  settingsItem: {
    alignItems: "center",
    marginTop: theme.spacing(3),
    justifyContent: "space-between",
  },
  titleList: {
    marginTop: theme.spacing(5),
  },
  saveButton: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}));

const Settings = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  function handleChange(event) {
    setValue(event.target.value);
  }

  return (
    <Paper className={classes.root} square elevation={3}>
      <Typography variant="h1" color="textPrimary">
        Настройки
      </Typography>
      <Divider className={classes.divider} />

      <Typography
        className={classes.titleList}
        variant="h3"
        color="textPrimary"
      >
        Wi-Fi настройка
      </Typography>
      <Grid className={classes.settingsList} container>
        <Grid className={classes.settingsItem} container item xs={12} lg={9}>
          <Grid item xs={12} md={8}>
            <Typography
              className={classes.settingsTitle}
              variant="h5"
              color="textPrimary"
            >
              Новая сеть с паролем
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Выбор</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value}
                onChange={handleChange}
              >
                <MenuItem value={1}>Игнорирование</MenuItem>
                <MenuItem value={2}>Создать оповещение</MenuItem>
                <MenuItem value={3}>Создать атаку</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid className={classes.settingsItem} container item xs={12} lg={9}>
          <Grid item xs={12} md={8}>
            <Typography
              className={classes.settingsTitle}
              variant="h5"
              color="textPrimary"
            >
              Новая сеть без пароля
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Выбор</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value}
                onChange={handleChange}
              >
                <MenuItem value={1}>Игнорирование</MenuItem>
                <MenuItem value={2}>Создать оповещение</MenuItem>
                <MenuItem value={3}>Создать атаку</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid className={classes.settingsItem} container item xs={12} lg={9}>
          <Grid item xs={12} md={8}>
            <Typography
              className={classes.settingsTitle}
              variant="h5"
              color="textPrimary"
            >
              Подключение защищаемого устройства к другой сети
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Выбор</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={value}
                onChange={handleChange}
              >
                <MenuItem value={1}>Игнорирование</MenuItem>
                <MenuItem value={2}>Создать оповещение</MenuItem>
                <MenuItem value={3}>Создать атаку</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>

      <Typography
        className={classes.titleList}
        variant="h3"
        color="textPrimary"
      >
        Настройки локальной сети
      </Typography>

      <Grid className={classes.settingsList} container>
        <Grid className={classes.settingsItem} container item xs={12} lg={9}>
          <Grid item xs={12} md={8}>
            <Typography
              className={classes.settingsTitle}
              variant="h5"
              color="textPrimary"
            >
              Включить arp клетку
            </Typography>
          </Grid>

          <Grid item xs={12} md={4}>
            <Switch />
          </Grid>
        </Grid>
      </Grid>

      <Button
        className={classes.saveButton}
        color="primary"
        variant="contained"
      >
        Сохранить
      </Button>
    </Paper>
  );
};

export default Settings;
