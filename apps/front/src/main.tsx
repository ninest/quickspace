import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { CreateSpacePage } from "./create-space.page.tsx";
import "./index.css";
import { IndexPage } from "./index.page.tsx";
import { RootLayout } from "./root.layout.tsx";
import { SpacePage } from "./space/index.page.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <IndexPage />,
      },
      {
        path: "/create",
        element: <CreateSpacePage />,
      },
      {
        path: "/:spaceId",
        element: <SpacePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
