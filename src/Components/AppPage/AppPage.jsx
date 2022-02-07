import { Paper } from "@mui/material";
import React, { useState } from "react";
import DrawerComponent from "../Drawer/DrawerComponent";
import Header from "../Header/Header";
import "./AppPage.scss";

const AppPage = (props) => {
  const [drawerState, setDrawerState] = useState(false);
  return (
    <div className="app-page">
      <Header setDrawerState={(drawerOpen) => setDrawerState(drawerOpen)} />
      <h1 className="app-page__title">{props.title}</h1>
      <Paper className="app-content" elevation={5}>
        {props.children}
      </Paper>
      <DrawerComponent
        drawerOpen={drawerState}
        setDrawerState={(drawerOpen) => setDrawerState(drawerOpen)}
      />
    </div>
  );
};

export default AppPage;
