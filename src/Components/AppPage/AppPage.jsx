import { Paper, Switch } from "@mui/material";
import React, { useState } from "react";
import DrawerComponent from "../Drawer/DrawerComponent";
import Header from "../Header/Header";
import "./AppPage.scss";

const AppPage = (props) => {
  const [drawerState, setDrawerState] = useState(false);
  const [user, setUser] = useState("user");

  const handleUserChange = (event) => {
    if (event.target.checked) setUser("HR");
  };

  // const childrenWithProps = React.Children.map(children, (child) => {
  //   if (React.isValidElement(child)) {
  //     return React.cloneElement(child, user);
  //   }
  //   return child;
  // });

  return (
    <div className="app-page">
      <Header setDrawerState={(drawerOpen) => setDrawerState(drawerOpen)} />
      <div className="app-page__title-div">
        <h1 className="app-page__title">{props.title}</h1>
        <Switch onChange={handleUserChange} />
      </div>
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
