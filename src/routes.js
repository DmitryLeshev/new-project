import React from "react";
import { Redirect } from "react-router-dom";

// Layouts
import AuthLayout from "./layouts/Auth/Auth";
import ErrorLayout from "./layouts/Error";
import DashboardLayout from "./layouts/Dashboard/Dashboard";

// Error
import Error404 from "./containers/errors/view/Error404";

// View
import Authorization from "./containers/authorization/authorization";
import Dashboard from "./containers/dashboard/dashboard";
import Tasks from "./containers/tasks/tasks";
import Devices from "./containers/devices/devices";

const useRoutes = (isAuthenticated) => {
  if (isAuthenticated) {
    return [
      {
        path: "/errors",
        component: ErrorLayout,
        routes: [
          {
            path: "/errors/error-404",
            exact: true,
            component: Error404,
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
            path: "/",
            exact: true,
            component: () => <Redirect to="/dashboard" />,
          },
          {
            path: "/dashboard",
            exact: true,
            component: Dashboard,
          },
          {
            path: "/tasks",
            exact: true,
            component: Tasks,
          },
          {
            path: "/devices",
            exact: true,
            component: Devices,
          },
          {
            path: "/devices/:id",
            exact: true,
            component: Devices,
          },
          {
            path: "/devices/:id/:tab",
            exact: true,
            component: Devices,
          },
          {
            path: "/dictionaries",
            exact: true,
            component: () => <h1>dictionaries</h1>,
          },
          {
            path: "/tools",
            exact: true,
            component: () => <h1>tools</h1>,
          },
          {
            path: "/users",
            exact: true,
            component: () => <h1>users</h1>,
          },
          {
            path: "/vulnerability-database",
            exact: true,
            component: () => <h1>vulnerability</h1>,
          },
          {
            path: "/reports",
            exact: true,
            component: () => <h1>reports</h1>,
          },
          {
            path: "/settings",
            exact: true,
            component: () => <h1>settings</h1>,
          },
          {
            path: "/app-components",
            exact: true,
            component: () => <h1>app</h1>,
          },
          {
            component: () => <Redirect to="/dashboard" />,
          },
        ],
      },
    ];
  } else {
    return [
      {
        path: "/errors",
        component: ErrorLayout,
        routes: [
          {
            path: "/errors/error-404",
            exact: true,
            component: Error404,
          },
        ],
      },
      {
        path: "/authorization",
        component: AuthLayout,
        routes: [
          {
            path: "/",
            exact: true,
            component: () => <Redirect to="/authorization" />,
          },
          {
            path: "/authorization",
            exact: true,
            component: Authorization,
          },
        ],
      },
      {
        component: () => <Redirect to="/authorization" />,
      },
    ];
  }
};

export default useRoutes;
