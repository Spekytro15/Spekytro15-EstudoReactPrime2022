import React from "react";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";
import { Fieldset } from "primereact/fieldset";
import { Menu } from "primereact/menu";
import CrudList from "./CrudList";
import { PrimeIcons } from "primereact/api";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";

export function MENU() {
  const items = [
    {
      label: "Options",
      items: [
        {
          label: "HOME",
          icon: PrimeIcons.HOME,
          command: () => {
            window.location.href = "/";
          },
        },
        {
          label: "CRUD",
          icon: PrimeIcons.PLUS,
          command: () => {
            window.location.href = "crud";
          },
        },
      ],
    },
  ];
  return <Menu model={items} />;
}
export function HomeHeder() {
  return (
    <div>
      <MENU />
      <h1 style={{ textAlign: "center" }}>Bem-vindo/a</h1>
    </div>
  );
}
const App = () => {
  let routes = useRoutes([
    { path: "/", element: <HomeHeder /> },
    { path: "/crud", element: <CrudList /> },
    // ...
  ]);
  return routes;
};

export function Home() {
  return (
    <Router>
      <Fieldset legend="CRUD - React 2022">
        <ConfirmDialog />

        <App />
      </Fieldset>
    </Router>
  );
}
