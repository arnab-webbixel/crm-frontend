import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import Footer from "../components/Footer/Footer";
import Login from "../components/Login/Login";
import Dashboard from "@/components/Dashboard/Dashboard";
import MainDashboard from "@/pages/MainDashboard";
// import AddStuff from "@/pages/staff/AddStaff";
import ManageStuff from "@/pages/staff/ManageStaff";
import StaffRole from "@/pages/staff/StaffRole";
import AddClient from "@/pages/client/AddClient";
import ManageClient from "@/pages/client/ManageClient";
import UpdateClient from "@/pages/client/UpdateClient";
// import ServiceType from "@/pages/setting/ServiceType";

import DefaultRemark from "@/pages/setting/DefaultRemark";
import Signup from "@/components/Register/Signup";
import StaffInformation from "@/pages/staff/StaffInformation";
import CompanyInformation from "@/pages/setting/CompanyInformation";
import ClientInformation from "@/pages/client/ClientInformation";
import ErrorBoundary from "./error/ErrorBoundry";
import FunctionalErrorBoundary from "./error/ErrorPage";
import ProtectedRoute from "../routes/ProtectedRoute";
import Test from "../pages/Test";
// import Test2 from "../pages/Test2";
import ForgotPassword from "@/components/Login/ForgotPassword";
import AddStaff from "@/pages/staff/AddStaff";
import ManageStaff from "@/pages/staff/ManageStaff";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      ),
      errorElement: <FunctionalErrorBoundary />,
      children: [
        {
          index: true,
          // element: <Login />,
          element: localStorage.getItem("token") ? (
            <Navigate to="/main/dashboard" />
          ) : (
            <Login />
          ),
        },
        ,
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
        {
          path: "/forgot-password",
          element: <ForgotPassword />,
        },
        {
          path: "footer",
          element: <Footer />,
        },
        {
          path: "/test",
          element: <Test />,
        },
        // {
        //   path: "/test2",
        //   element: <Test2 />,
        // },
        {
          path: "main", // {
            //   path: "/test2",
            //   element: <Test2 />,
            // },
          element: (
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          ),
          children: [
            {
              index: true, // Default route for "main"
              element: <MainDashboard />,
            },

            {
              path: "dashboard", // This matches "/main/dashboard"
              element: <MainDashboard />,
            },
            {
              path: "staff",
              element: <StaffInformation />,
            },
            {
              path: "staff/add",
              element: <AddStaff />,
            },
            {
              path: "staff/manage",
              element: <ManageStaff />,
            },
            // {
            //   path: "staff/role",
            //   element: <StaffRole />,
            // },
            {
              path: "client",
              element: <ClientInformation />,
            },
            {
              path: "client/add",
              element: <AddClient/>,
            },
            {
              path: "client/manage",
              element: <ManageClient />,
            },
            {
              path: "client/update",
              element: <UpdateClient />,
            },
            // {
            //   path: "setting/service-type",
            //   element: <ServiceType />,
            // },
            // {
            //   path: "setting/call-type",
            //   element: <CallType />,
            // },
            // {
            //   path: "setting/default-remark",
            //   element: <DefaultRemark />,
            // },
            // {
            //   path: "setting/company-information",
            //   element: <CompanyInformation />,
            // },
          ],
        },
      ],
    },
  ],

  {
    future: {
      v7_startTransition: true, // Enable startTransition feature
    },
  }
);

export default router;
