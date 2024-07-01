import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
// import Record from "./components/Record";
// import RecordList from "./components/RecordList";
import "./index.css";
import FixturesList from "./components/FixturesList";
import Fixture from "./components/Fixture";
import MatchManager from "./components/MatchManager";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <FixturesList />,
      },
    ],
  },
  {
    path: "/edit/:id",
    element: <App />,
    children: [
      {
        path: "/edit/:id",
        element: <Fixture />,
      },
    ],
  },
  {
    path: "/create",
    element: <App />,
    children: [
      {
        path: "/create",
        element: <Fixture />,
      },
    ],
  },
  {
    path: "/admin",
    element: <App />,
    children: [
      {
        path: "/admin",
        element: <MatchManager />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
