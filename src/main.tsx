import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import Collections2d from "./components/collections-2d/Collections2d.tsx";
import Collections3d from "./components/collections-3d/Collections3d.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  { path: "/collection", element: <Collections3d /> },
  { path: "/collection2", element: <Collections2d /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>
);
