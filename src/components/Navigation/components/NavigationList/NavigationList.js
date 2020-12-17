import React from "react";
import { matchPath } from "react-router-dom";

import { NavigationListItem } from "../";

import { List } from "@material-ui/core";

const NavigationList = (props) => {
  const { pages, router, depth } = props;

  return (
    <List>
      {pages.reduce(
        (items, page) => reduceChildRoutes({ items, page, router, depth }),
        []
      )}
    </List>
  );
};

const reduceChildRoutes = (props) => {
  const { router, items, page, depth } = props;

  if (page.children) {
    const open = matchPath(router.location.pathname, {
      path: page.href,
      exact: false,
    });

    items.push(
      <NavigationListItem
        depth={depth}
        icon={page.icon}
        key={page.title}
        label={page.label}
        open={Boolean(open)}
        title={page.title}
        i18nkey={page.i18nkey}
      >
        <NavigationList
          depth={depth + 1}
          pages={page.children}
          router={router}
        />
      </NavigationListItem>
    );
  } else {
    items.push(
      <NavigationListItem
        depth={depth}
        href={page.href}
        icon={page.icon}
        key={page.title}
        label={page.label}
        title={page.title}
        i18nkey={page.i18nkey}
      />
    );
  }

  return items;
};

export default NavigationList;
