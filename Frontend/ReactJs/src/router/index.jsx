import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import AuthLayout from "../layout/AuthLayout";
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";
import DefaultLayout from "../layout/DefaultLayout";

const RouterComp = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/",
        element: <LoginPage />,
      },
      {
        path: "/signup",
        element: <RegisterPage />,
      },
    ],
  },
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
]);

export default RouterComp;
