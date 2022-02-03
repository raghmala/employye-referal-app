import React, { useState } from "react";
import Header from "../Header/Header";
import "./AppPage.scss";

const AppPage = (props) => {
  const [drawerState, setDrawerState] = useState(false);
  return (
    <div className="app-page">
      <Header setDrawerState={(drawerOpen) => setDrawerState(drawerOpen)} />
      <div className="app-content">{props.children}</div>
    </div>
  );
};

export default AppPage;
