import React, { useState } from "react";
import { withRouter } from "react-router";
import { useTranslation } from "react-i18next";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core";

import DetailsCard from "./components/DetailsCard";

import imgDanger from "@assets/images/danger.png";
import imgAvatar1 from "@assets/images/avatar_1.png";
// import imgAvatar2 from "@assets/images/avatar_2.png";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "100%",
    padding: theme.spacing(2, 3),
    marginTop: theme.spacing(2),
    minHeight: "100px",
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[2],
    cursor: "pointer",
    transition: "all 0.3s ease-out",
    "&:hover": {
      boxShadow: theme.shadows[4],
    },
  },
  header: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    marginBottom: theme.spacing(1),
  },
  title: {
    display: "flex",
    alignItems: "center",
    ...theme.typography.h3,
  },
  icon: {
    display: "block",
    width: "30px",
    height: "30px",
    marginRight: theme.spacing(3),
    backgroundImage: `url(${imgDanger})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    borderRadius: "50%",
  },
  hash: {
    ...theme.typography.h5,
    marginLeft: "auto",
  },
  body: {
    display: "flex",
    flexDirection: "column",
    marginBottom: theme.spacing(1),
  },
  tasks: {
    listStyle: "none",
  },
  task: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0.3, 0),
  },
  taskText: {
    ...theme.typography.h6,
    display: "block",
    minWidth: 150,
  },
  taskValue: {
    ...theme.typography.body1,
    marginLeft: theme.spacing(2),
    color: theme.palette.error.light,
  },
  footer: {
    display: "flex",
    alignItems: "center",
  },
  responsible: {
    ...theme.typography.h6,
  },
  users: {
    display: "flex",
    alignItems: "center",
    listStyle: "none",
  },
  user: {
    display: "flex",
    alignItems: "center",
    marginLeft: theme.spacing(3),
  },
  userText: {
    ...theme.typography.body1,
    display: "flex",
    alignItems: "center",
  },
  userIcon: {
    display: "block",
    width: "15px",
    height: "15px",
    marginRight: theme.spacing(1),

    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    borderRadius: "50%",
  },
  info: {
    ...theme.typography.body2,
    color: theme.palette.text.secondary,
    marginLeft: "auto",
  },
}));

const TaskCard = ({ task, selectedTask, match, history }) => {
  const { id, type, crt, entityType, entityId, responsible, createTst } = task;
  const [open, setOpen] = useState(
    selectedTask && selectedTask.id === id ? true : false
  );
  const classes = useStyles();
  const { t } = useTranslation();
  console.log("selectedTask: ", selectedTask);
  console.log("id: ", id);
  console.log("open: ", open);

  function openCard() {
    history.push(`/tasks/${match.params.status}/${id}`);
  }

  function closeCard() {
    setOpen(false);
    history.push(`/tasks/${match.params.status}`);
  }

  const isCloseCard = (
    <div
      className={clsx(classes.card, { [classes.open]: open })}
      onClick={openCard}
    >
      <div className={classes.header}>
        <h3 className={classes.title}>
          <i className={classes.icon} />
          {t(`task-title.${type}`)}
        </h3>
        <p className={classes.hash}>#{id}</p>
      </div>
      <div className={classes.body}>
        <ul className={classes.tasks}>
          <li className={classes.task}>
            <p className={classes.taskText}>Критичность задачи:</p>
            <span className={classes.taskValue}>{crt}</span>/10
          </li>
          <li className={classes.task}>
            <p className={classes.taskText}>Устройство {entityType}: </p>
            <span className={classes.taskValue}></span>
            Entity Id: {entityId}
          </li>
        </ul>
      </div>
      <div className={classes.footer}>
        <p className={classes.responsible}>Ответственные: </p>
        <ul className={classes.users}>
          {responsible.map((r) => {
            return (
              <li key={r} className={classes.user}>
                <p className={classes.userText}>
                  <i
                    className={classes.userIcon}
                    style={{ backgroundImage: `url(${imgAvatar1})` }}
                  />
                  id: {r}
                </p>
              </li>
            );
          })}
        </ul>
        <p className={classes.info}>
          Обнаружено: модуль аудита wifi {createTst}
        </p>
      </div>
    </div>
  );

  return (
    <React.Fragment>
      {isCloseCard}
      <DetailsCard open={open} closeCard={closeCard} />
    </React.Fragment>
  );
};

export default withRouter(TaskCard);
