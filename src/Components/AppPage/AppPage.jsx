import React, { useState } from "react";
import DrawerComponent from "../Drawer/DrawerComponent";
import Header from "../Header/Header";
import "./AppPage.scss";

const AppPage = (props) => {
  const [drawerState, setDrawerState] = useState(false);
  return (
    <div className="app-page">
      <Header setDrawerState={(drawerOpen) => setDrawerState(drawerOpen)} />
      <div className="app-content">{props.children}</div>
      <DrawerComponent
        drawerOpen={drawerState}
        setDrawerState={(drawerOpen) => setDrawerState(drawerOpen)}
      />
    </div>
  );
};

export default AppPage;
