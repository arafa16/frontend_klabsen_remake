import { useRoutes } from "react-router-dom";
import Menu from "../layouts/SideMenu";
import AbsenUserPage from "../pages/absen/absenUserPage";
import Dashboard from "../pages/dashboard/dashboardPage";
import EventPage from "../pages/event/eventPage";
import EditEvent from "../pages/event/editEventPage";
import CreateEmployeePage from "../pages/employee/createEmployeePage";
import UpdateEmployeePage from "../pages/employee/updateEmployeePage";
import DataEmployePage from "../pages/employee/dataEmployePage";
import ViewEmployePage from "../pages/employee/viewEmployePage";
import CreateEvent from "../pages/event/createEventPage";
import Login from "../pages/auth/login";
import Register from "../pages/auth/registerPage";
import ForgotPassword from "../pages/auth/forgotPassword";
import ResetPassword from "../pages/auth/resetPassword";
import ViewProfilePage from "../pages/profile/viewProfilePage";
import AbsenCheckByUser from "../pages/absen/absenCheckByUser";
import AbsenUserByIdPage from "../pages/absen/absenUserByIdPage";
import KoreksiUserPage from "../pages/koreksi/koreksiUserPage";
import ViewKoreksiPage from "../pages/koreksi/viewKoreksiPage";
import KoreksiApproverPage from "../pages/koreksi/koreksiApproverPage";
import ViewKoreksiApproverPage from "../pages/koreksi/viewKoreksiApproverPage"
import PerhitunganAbsenPage from "../pages/absen/perhitunganAbsenPage";

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
        {
          path: "/absen",
          element: <AbsenUserPage />,
        },
        {
          path: "/absen/user",
          element: <AbsenCheckByUser />
        },
        {
          path: "/absen/check/:uuid",
          element: <AbsenUserByIdPage />
        },
        {
          path: "/absen/perhitungan",
          element: <PerhitunganAbsenPage />
        },
        {
          path: "/event",
          element: <EventPage />,
        },
        {
          path: "/event/create",
          element: <CreateEvent />,
        },
        {
          path: "/event/edit/:id",
          element: <EditEvent />,
        },
        //employe
        {
          path: "/employee/data",
          element: <DataEmployePage />
        },
        {
          path: "/employee/create",
          element: <CreateEmployeePage />
        },
        {
          path: "/employee/update/:id",
          element: <UpdateEmployeePage />
        },
        {
          path: "/employee/data/:id",
          element: <ViewEmployePage />
        },
        //profile
        {
          path: "/profile/data/:id",
          element: <ViewProfilePage />
        },
        {
          path: "/koreksi/user",
          element: <KoreksiUserPage />,
        },
        {
          path: "/koreksi/approver",
          element: <KoreksiApproverPage />,
        },
        {
          path: "/koreksi/view",
          element: <ViewKoreksiPage />,
        },
        {
          path: "/koreksi/view_approver",
          element: <ViewKoreksiApproverPage />,
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
