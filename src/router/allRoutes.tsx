/*
pages
*/
//root
import React from 'react'
import Root from "../pages/Root/index.ts";
import Login from "../pages/Authentication/Login.tsx";
import Logout from "../pages/Authentication/Logout.tsx";
import Register from "../pages/Authentication/Register.tsx";
import RecoverPassword from "../pages/Authentication/RecoverPassword.tsx";
import ChangePassword from "../pages/Authentication/ChangePassword.tsx";
import LockScreen from "../pages/Authentication/LockScreen.tsx";

// dashboard
import Dashboard from "../pages/Dashboard/index.tsx";
import StarterPage from "../pages/StarterPage/index.tsx";

interface RouteProps {
  path: string;
  component: any;
  exact?: boolean;
}

const publicRoutes: Array<RouteProps> = [
  { path: "/auth-login", component: <Login /> },
  { path: "/auth-register", component: <Register /> },
  { path: "/auth-recoverpw", component: <RecoverPassword /> },
  { path: "/auth-changepassword", component: <ChangePassword /> },
  { path: "/auth-lock-screen", component: <LockScreen /> },
  { path: "/logout", component: <Logout /> },
];

const privateRoutes: Array<RouteProps> = [
  { path: "/pages-starter", component: <StarterPage /> },
  { path: "/dashboard", component: <Dashboard /> },
  { path: "/",  component: <Root /> },
];

export { publicRoutes, privateRoutes };
