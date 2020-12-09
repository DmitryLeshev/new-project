import React from "react";

import useRouter from "@assets/utils/useRouter";

import { NavigationList } from "./components/";

import clsx from "clsx";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(3),
  },
}));

const Navigation = (props) => {
  const { pages, component: Component } = props;
  const router = useRouter();
  const classes = useStyles();

  return (
    <Component className={clsx(classes.root)}>
      <NavigationList depth={0} pages={pages} router={router} />
    </Component>
  );
};

export default Navigation;
