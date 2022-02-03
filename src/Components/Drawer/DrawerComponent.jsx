import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";
import {
  AddBoxOutlined,
  ArticleOutlined,
  GroupAddOutlined,
  HomeOutlined,
} from "@mui/icons-material";
import * as React from "react";
import { useHistory } from "react-router-dom";

const DrawerComponent = (props) => {
  let history = useHistory();
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    props.setDrawerState(false);
  };
  const openScreen = (screen) => {
    if (screen === "home") {
      history.push("/home");
    } else if (screen === "addNewOpening") {
      // history.push("/addNewOpening");
    } else if (screen === "myReferrals") {
      // history.push("/cmyReferrals");
    } else if (screen === "referFriend") {
      // history.push("/referFriend");
    }
  };
  return (
    <Drawer anchor="left" open={props.drawerOpen} onClose={toggleDrawer(false)}>
      <Toolbar />
      <Divider />
      <Box
        sx={{ width: 250 }}
        role="presentation"
        onClick={toggleDrawer(false)}
        onKeyDown={toggleDrawer(false)}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                openScreen("home");
              }}
            >
              <ListItemIcon>
                <HomeOutlined />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                openScreen("addNewOpening");
              }}
            >
              <ListItemIcon>
                <AddBoxOutlined />
              </ListItemIcon>
              <ListItemText primary="Add New Opening" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                openScreen("myReferrals");
              }}
            >
              <ListItemIcon>
                <ArticleOutlined />
              </ListItemIcon>
              <ListItemText primary="My Referrals" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton
              onClick={() => {
                openScreen("referFriend");
              }}
            >
              <ListItemIcon>
                <GroupAddOutlined />
              </ListItemIcon>
              <ListItemText primary="Refer Your Friend" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default DrawerComponent;
