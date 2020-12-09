import React from "react";
import { Link as RouterLink } from "react-router-dom";
import clsx from "clsx";

import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Typography,
  useTheme,
} from "@material-ui/core";

import { Label } from "@components";
import useStyles from "./styles";

const ListItems = (props) => {
  const { className, list, listSubheader = "Кабинет 113" } = props;
  const classes = useStyles();

  return (
    <List
      className={className}
      disablePadding
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          <Typography variant="h5">{listSubheader}</Typography>
          <Divider className={classes.divider} />
        </ListSubheader>
      }
    >
      {list.map(ComponentListItem)}
    </List>
  );
};

const ComponentListItem = (props) => {
  const {
    id,
    textPrimary,
    textSecondary,
    icon: Icon,
    isProtected,
    active,
  } = props;
  const classes = useStyles();
  const theme = useTheme();

  const renderIcon = (
    <ListItemIcon>
      <Icon className={classes.icon} />
    </ListItemIcon>
  );

  const renderText = (
    <ListItemText
      primary={textPrimary}
      primaryTypographyProps={{
        noWrap: true,
        variant: "h6",
      }}
    />
  );

  const renderSecondaryText = (
    <ListItemText
      primary={textPrimary}
      primaryTypographyProps={{
        noWrap: true,
        variant: "h6",
      }}
      secondary={textSecondary}
      secondaryTypographyProps={{
        noWrap: true,
        variant: "body1",
        className: classes.textSecondary,
      }}
    />
  );

  return (
    <ListItem
      key={id}
      className={clsx({ [classes.active]: active })}
      button
      component={RouterLink}
      to={`/devices/${id}/`}
    >
      {Icon && renderIcon}
      {textSecondary ? renderSecondaryText : renderText}
      <div className={classes.details}>
        {isProtected === 0 ? (
          <Label
            className={classes.unread}
            color={theme.palette.success.main}
            shape="rounded"
          />
        ) : (
          <Label
            className={classes.unread}
            color={theme.palette.error.main}
            shape="rounded"
          />
        )}
      </div>
    </ListItem>
  );
};

export default ListItems;
