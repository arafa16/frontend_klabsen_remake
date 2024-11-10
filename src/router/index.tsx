import { useRoutes } from "react-router-dom";
import Menu from "../layouts/SideMenu";
import Dashboard from "../pages/dashboard";
import Login from "../pages/auth/login";
import Register from "../pages/auth/registerPage";
import ForgotPassword from "../pages/auth/forgotPassword";
import ResetPassword from "../pages/auth/resetPassword";
import ViewProfilePage from "../pages/profile/viewProfilePage";

function Router() {
  const routes = [
    {
      path: "/",
      element: <Menu />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        //profile
        {
          path: "/profile/data/:id",
          element: <ViewProfilePage />
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/forgotPassword",
      element: <ForgotPassword />,
    },
    {
      path: "/reset/:token",
      element: <ResetPassword />,
    }
  ];

  return useRoutes(routes);
}

export default Router;
