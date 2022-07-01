import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import "../styles/drawer.scss";
import logo from "../img/logo.png";

import MenuIcon from "@material-ui/icons/Menu";
import { useTranslation } from "react-i18next";

function DrawerComponent() {
  const [openDrawer, setOpenDrawer] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        className="drawer-opener"
        transitionDuration={1000}
      >
        <div className="drawer-header">
          <img src={logo} alt="" className="logo" />
          <svg
            class="MuiSvgIcon-root"
            focusable="false"
            viewBox="0 0 24 24"
            aria-hidden="true"
            onClick={() => setOpenDrawer(false)}
          >
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
          </svg>
        </div>
        <List>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/" className="drawer-nav-link">
                {t("navigation.home")}
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/filials" className="drawer-nav-link">
                {t("navigation.filials")}
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/aboutus" className="drawer-nav-link">
                {t("navigation.aboutus")}
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem onClick={() => setOpenDrawer(false)}>
            <ListItemText>
              <Link to="/contacts" className="drawer-nav-link">
                {t("navigation.contacts")}
              </Link>
            </ListItemText>
          </ListItem>
        </List>
      </Drawer>
      <IconButton
        onClick={() => setOpenDrawer(!openDrawer)}
        className="burger-icon"
        style={{ order: "-1" }}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
}

export default DrawerComponent;
