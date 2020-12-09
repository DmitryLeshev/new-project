import React from "react";
import { Redirect } from "react-router-dom";

// Layouts
import AuthLayout from "./layouts/Auth";
import ErrorLayout from "./layouts/Error";
import DashboardLayout from "./layouts/Dashboard";

// View
import Authorization from "./containers/authorization/authorization.js";
import Tasks from "./containers/tasks/tasks.js";

const routes = [
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/dashboard" />,
  },
  {
    path: "/authorization",
    component: AuthLayout,
    routes: [
      {
        path: "/authorization",
        exact: true,
        component: Authorization,
      },
      {
        component: () => <Redirect to="/errors/error-404" />,
      },
    ],
  },
  {
    path: "/errors",
    component: ErrorLayout,
    routes: [
      {
        path: "/errors/error-404",
        exact: true,
        component: () => <h1>Error</h1>,

        // component: lazy(() =>
        //   import("@containers/ErrorBoundry/components/Error404")
        // ),
      },
      {
        component: () => <Redirect to="/errors/error-404" />,
      },
    ],
  },
  {
    route: "*",
    component: DashboardLayout,
    routes: [
      {
        path: "/dashboard",
        exact: true,
        component: () => <h1>dashboard</h1>,

        // component: lazy(() => import("@containers/DashboardAnalytics")),
      },
      {
        path: "/tasks",
        exact: true,
        component: Tasks,

        // component: lazy(() => import("@containers/Tasks")),
      },
      {
        path: "/devices",
        exact: true,
        component: () => <h1>devices</h1>,

        // component: lazy(() => import("./containers/Devices")),
      },
      {
        path: "/devices/:id",
        exact: true,
        component: () => <h1>devices</h1>,

        // component: lazy(() => import("./containers/Devices")),
      },
      {
        path: "/devices/:id/:tab",
        exact: true,
        component: () => <h1>devices</h1>,

        // component: lazy(() => import("./containers/Devices")),
      },
      {
        path: "/dictionaries",
        exact: true,
        component: () => <h1>dictionaries</h1>,

        // component: lazy(() => import("./containers/Dictionaries")),
      },
      {
        path: "/tools",
        exact: true,
        component: () => <h1>tools</h1>,

        // component: lazy(() => import("./containers/Tools")),
      },
      {
        path: "/users",
        exact: true,
        component: () => <h1>users</h1>,

        // component: lazy(() => import("./containers/Users")),
      },
      {
        path: "/vulnerability-database",
        exact: true,
        component: () => <h1>vulnerability</h1>,

        // component: lazy(() => import("./containers/VulnerabilityDatabase")),
      },
      {
        path: "/reports",
        exact: true,
        component: () => <h1>reports</h1>,

        // component: lazy(() => import("./containers/Reports")),
      },
      {
        path: "/settings",
        exact: true,
        component: () => <h1>settings</h1>,

        // component: lazy(() => import("./containers/Settings")),
      },
      {
        path: "/app-components",
        exact: true,
        component: () => <h1>app</h1>,

        // component: lazy(() => import("@containers/AppComponents")),
      },
      {
        component: () => <Redirect to="/errors/error-404" />,
      },
    ],
  },
];

export default routes;
