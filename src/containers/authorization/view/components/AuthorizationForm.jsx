import React, { useState } from "react";

import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";
import { Button, TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {},
  fields: {
    margin: theme.spacing(-1),
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      flexGrow: 1,
      margin: theme.spacing(1),
    },
  },
  submitButton: {
    marginTop: theme.spacing(2),
    width: "100%",
  },
}));

const AuthorizationForm = ({ className, userLogsIn }) => {
  const classes = useStyles();
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handlerFieldEmail = (e) => {
    setLogin(e.target.value);
  };

  const handlerFieldPassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <form className={clsx(classes.root, className)}>
      <div className={classes.fields}>
        <TextField
          fullWidth
          label="Email"
          name="Логин"
          variant="outlined"
          value={login}
          onChange={handlerFieldEmail}
        />
        <TextField
          fullWidth
          label="Пароль"
          name="password"
          type="password"
          variant="outlined"
          value={password}
          onChange={handlerFieldPassword}
        />
      </div>
      <Button
        onClick={() => userLogsIn(login, password)}
        className={classes.submitButton}
        color="secondary"
        size="large"
        variant="contained"
      >
        Войти
      </Button>
    </form>
  );
};

export default AuthorizationForm;
