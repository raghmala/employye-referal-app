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
  AssignmentIndOutlined,
  ReceiptLongOutlined,
} from "@mui/icons-material";
import * as React from "react";
import { useHistory } from "react-router-dom";

const DrawerComponent = (props) => {
  const [buttonSelected, setButtonSelected] = React.useState("home");
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
      setButtonSelected("home");
    } else if (screen === "empRefPolicy") {
      history.push("/referralPolicy");
    } else if (screen === "addNewOpening") {
      history.push("/addNewOpening");
    } else if (screen === "referredPeople") {
      history.push("/referredPeople");
    } else if (screen === "myReferrals") {
      history.push("/myReferrals");
    } else if (screen === "referFriend") {
      history.push("/home");
      setButtonSelected("refer");
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
              selected={buttonSelected === "home" ? true : false}
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
                openScreen("empRefPolicy");
              }}
            >
              <ListItemIcon>
                <ReceiptLongOutlined />
              </ListItemIcon>
              <ListItemText primary="Employee referral policy" />
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
                openScreen("referredPeople");
              }}
            >
              <ListItemIcon>
                <AssignmentIndOutlined />
              </ListItemIcon>
              <ListItemText primary="Referred People" />
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
          {/* <ListItem disablePadding>
            <ListItemButton
              selected={buttonSelected === "refer" ? true : false}
              onClick={() => {
                openScreen("referFriend");
              }}
            >
              <ListItemIcon>
                <GroupAddOutlined />
              </ListItemIcon>
              <ListItemText primary="Refer Your Friend" />
            </ListItemButton>
          </ListItem> */}
        </List>
      </Box>
    </Drawer>
  );
};

export default DrawerComponent;
