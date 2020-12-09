import React from "react";

import { makeStyles } from "@material-ui/styles";
import { Card, CardContent, Typography } from "@material-ui/core";

import { Page } from "@components";
import AuthorizationForm from "./components/AuthorizationForm";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(6, 2),
  },
  card: {
    width: theme.breakpoints.values.md,
    maxWidth: "500px",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
    },
    overflow: "unset",
    display: "flex",
    position: "relative",
    "& > *": {
      flexGrow: 1,
      flexBasis: "50%",
      width: "50%",
    },
  },
  content: {
    padding: theme.spacing(8, 4, 3, 4),
  },
  loginForm: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(4),
  },
}));

const Authorization = ({userLogsIn}) => {
  const classes = useStyles();

  return (
    <Page className={classes.root} title="Авторизация">
      <Card className={classes.card}>
        <CardContent className={classes.content}>
          <Typography gutterBottom variant="h3">
            Войти
          </Typography>
          <Typography variant="subtitle2">
            Введите ваш логин и пароль
          </Typography>
          <AuthorizationForm
            className={classes.loginForm}
            userLogsIn={userLogsIn}
          />
        </CardContent>
      </Card>
    </Page>
  );
};

export default Authorization;
