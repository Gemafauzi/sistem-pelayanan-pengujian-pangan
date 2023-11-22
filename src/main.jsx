import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App";
import ErrorPage from "./error-page";

import "./index.css";

import Home from "./routes/home";
import Login from "./routes/login";
import Register from "./routes/register";

import Profile from "./routes/profile";
import ProfileTransaction from "./routes/profile/transaction";
import ProfileDetailTransaction from "./routes/profile/transaction/detail";

import ConsultingServices from "./routes/consulting-services";
import AboutUs from "./routes/about-us";
import AboutUsHistoryExperience from "./routes/about-us/history-experience";
import AboutUsLegality from "./routes/about-us/legality";
import AboutUsVisionMission from "./routes/about-us/vision-mission";

const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "consulting-services",
        element: <ConsultingServices />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
        children: [
          {
            path: "history-experience",
            element: <AboutUsHistoryExperience />,
          },
          {
            path: "legality",
            element: <AboutUsLegality />,
          },
          {
            path: "vision-mission",
            element: <AboutUsVisionMission />,
          },
        ],
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "profile/transaction",
        element: <ProfileTransaction />,
      },
      {
        path: "profile/transaction/:id",
        element: <ProfileDetailTransaction />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
