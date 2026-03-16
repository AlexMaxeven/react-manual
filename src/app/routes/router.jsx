import { createBrowserRouter, Navigate } from "react-router-dom";
import AppLayout from "@/app/AppLayout";

import {
  TypeScriptManualLayout,
  TypeScriptOverviewPage,
  TypeScriptRoadmapPage,
  TypeScriptTypesPage,
  TypeScriptInterfacesPage,
  TypeScriptGenericsPage,
} from "@/pages/TypeScript";

import {
  ReactManualLayout,
  ReactOverviewPage,
  ReactBasicsPage,
  ReactHooksPage,
  ReactRoutingPage,
  ReactRoadMapPage,
} from "@/pages/React";

import {
  JsManualLayout,
  JsOverviewPage,
  JsFundamentalsPage,
  JsAsyncPage,
  JsDomePage,
  JsRoadmapPage,
} from "@/pages/Js";

import {
  PracticeLayout,
  PracticeJS,
  PracticeReact,
  PracticeTypescript,
  PracticeOverview,
} from "@/pages/Practice";

import DelayedRedirect from "@/shared/lib/DelayedRedirect/DelayedRedirect";


export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <DelayedRedirect to="/react/overview" delay={5000} />,
        },

        {
          path: "typeScript",
          element: <TypeScriptManualLayout />,
          children: [
            { index: true, element: <Navigate to="overview" replace /> },
            { path: "overview", element: <TypeScriptOverviewPage /> },
            { path: "types", element: <TypeScriptTypesPage /> },
            { path: "interfaces", element: <TypeScriptInterfacesPage /> },
            { path: "generics", element: <TypeScriptGenericsPage /> },
            { path: "roadmap", element: <TypeScriptRoadmapPage /> },
          ],
        },

        {
          path: "react",
          element: <ReactManualLayout />,
          children: [
            { index: true, element: <Navigate to="overview" replace /> },
            { path: "overview", element: <ReactOverviewPage /> },
            { path: "basics", element: <ReactBasicsPage /> },
            { path: "hooks", element: <ReactHooksPage /> },
            { path: "routing", element: <ReactRoutingPage /> },
            { path: "roadmap", element: <ReactRoadMapPage /> },
          ],
        },

        {
          path: "js",
          element: <JsManualLayout />,
          children: [
            { index: true, element: <Navigate to="overview" replace /> },
            { path: "overview", element: <JsOverviewPage /> },
            { path: "fundamentals", element: <JsFundamentalsPage /> },
            { path: "async", element: <JsAsyncPage /> },
            { path: "dome", element: <JsDomePage /> },
            { path: "roadmap", element: <JsRoadmapPage /> },
          ],
        },

        {
          path: "practice",
          element: <PracticeLayout />,
          children: [
            { index: true, element: <Navigate to="overview" replace /> },
            { path: "overview", element: <PracticeOverview /> },
            { path: "js", element: <PracticeJS /> },
            { path: "react", element: <PracticeReact /> },
            { path: "typescript", element: <PracticeTypescript /> },
          ],
        },
      ],
    },
  ],
  {
    basename: "/react-manual/",
  }
);