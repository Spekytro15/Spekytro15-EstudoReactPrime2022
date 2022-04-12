import React from "react";
import { Menu } from "primereact/menu";
import CrudList from "./CrudList";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
  useHref,
  Link,
} from "react-router-dom";
import { CrudForm } from "./CrudForm";

export function MENU() {
  const items = [
    {
      label: "Options",
      items: [
        {
          label: "CRUD",
          icon: "pi-eject",
          command: () => {
            window.location.href='crud'
          },
        },
        {
          label: "HOME",
          icon: "pi pi-times",
          command: () => {
            window.location.href='/'
          },
        }
      ],
    },
  ];
  return (
    <Menu model={items} />
  );
};

const App = () => {
  let routes = useRoutes([
    { path: "/", element: <MENU/> },
    { path: "/crud", element: <CrudList /> },
    // ...
  ]);
  return routes;
};

export function Home() {
  return (
    <Router>
      <App />
    </Router>
  );
}
