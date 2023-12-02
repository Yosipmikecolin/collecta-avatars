import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Collections3d from "./components/collections/Collections-3d.tsx";
import Collections2d from "./components/collection-2d/Collection2d.tsx";
import "./index.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  { path: "/collection-3d", element: <Collections3d /> },
  { path: "/collection-2d", element: <Collections2d /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
);
