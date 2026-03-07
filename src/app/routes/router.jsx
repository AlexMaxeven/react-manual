import { createBrowserRouter, Navigate } from "react-router-dom";
import AppLayout from "@/app/AppLayout";

import {
  HomeManualLayout,
  HomeOverviewPage,
  HomeRoadmapPage,
} from "@/pages/Home";

import {
  ReactManualLayout,
  ReactOverviewPage,
  ReactCorePage,
  ReactHooksPage,
  ReactPatternsPage,
} from "@/pages/React";

import {
  JsManualLayout,
  JsOverviewPage,
  JsCorePage,
  JsAsyncPage,
} from "@/pages/Js";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Navigate to="home" replace /> },

      {
        path: "home",
        element: <HomeManualLayout />,
        children: [
          { index: true, element: <Navigate to="overview" replace /> },
          { path: "overview", element: <HomeOverviewPage /> },
          { path: "roadmap", element: <HomeRoadmapPage /> },
        ],
      },

      {
        path: "react",
        element: <ReactManualLayout />,
        children: [
          { index: true, element: <Navigate to="overview" replace /> },
          { path: "overview", element: <ReactOverviewPage /> },
          { path: "core", element: <ReactCorePage /> },
          { path: "hooks", element: <ReactHooksPage /> },
          { path: "patterns", element: <ReactPatternsPage /> },
        ],
      },

      {
        path: "js",
        element: <JsManualLayout />,
        children: [
          { index: true, element: <Navigate to="overview" replace /> },
          { path: "overview", element: <JsOverviewPage /> },
          { path: "core", element: <JsCorePage /> },
          { path: "async", element: <JsAsyncPage /> },
        ],
      },
    ],
  },
]);