/** @jsx jsx */
import { jsx, Box, Image } from "theme-ui";
import { useState } from "react";
import Menu, { SubMenu, Item as MenuItem, Divider } from "rc-menu";
import { Scrollbars } from "react-custom-scrollbars";
import Drawer from "components/drawer";
import { IoMdClose, IoMdMenu } from "react-icons/io";

import { Link } from "components/link";
import menuItems from "./header.data";
import { motion } from "framer-motion";
import facebook from "assets/images/icons/facebook.svg";
import instagram from "assets/images/icons/instagram.svg";
import twitter from "assets/images/icons/twitter.svg";
import nav from "assets/images/icons/nav.svg";
import { AiOutlineClose } from "react-icons/ai";
import Dropdown from "./dropdown";

const social = [
  {
    path: "https://www.facebook.com/frontalslyer",
    icon: facebook,
  },
  {
    path: "https://twitter.com/frontalslyer",
    icon: twitter,
  },
  {
    path: "https://www.instagram.com/frontalslayer/",
    icon: instagram,
  },
];

export default function MobileDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const collapseNode = () => ({ height: 0 });
  const expandNode = (node) => ({ height: node.scrollHeight });

  const getSvgIcon = (style = {}, text) => {
    if (text) {
      return <i style={style}>{text}</i>;
    }
    const path =
      "M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h" +
      "-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v" +
      "60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91" +
      ".5c1.9 0 3.8-0.7 5.2-2L869 536.2c14.7-12.8 14.7-35.6 0-48.4z";
    return (
      <i style={style}>
        <svg
          viewBox="0 0 1024 1024"
          width="1em"
          height="1em"
          fill="currentColor"
          style={{ verticalAlign: "-.125em" }}
        >
          <path d={path} />
        </svg>
      </i>
    );
  };

  function itemIcon(props) {
    return getSvgIcon({
      position: "absolute",
      right: "1rem",
      color: props.isSelected ? "#BEA6A0" : "inherit",
    });
  }

  function expandIcon(props) {
    return getSvgIcon({
      position: "absolute",
      right: "1rem",
      color: "#ffc0c0",
      transform: `rotate(${props.isOpen ? 90 : 0}deg)`,
    });
  }
  return (
    <Drawer
      width="320px"
      style={{ background: "transparent" }}
      drawerHandler={
        <Box sx={styles.handler}>
          {/* <IoMdMenu size={26} /> */}
          <Image src={nav} />
        </Box>
      }
      open={isDrawerOpen}
      toggleHandler={() => setIsDrawerOpen((prev) => !prev)}
      closeButton={<IoMdClose size="24px" color="#ff9695" />}
      drawerStyle={styles.drawer}
      closeBtnStyle={styles.close}
    >
      <Scrollbars autoHide>
        <Box sx={styles.content}>
          <Menu
            mode="inline"
            defaultOpenKeys={["1"]}
            motion={{
              motionName: "rc-menu-collapse",
              onAppearStart: collapseNode,
              onAppearActive: expandNode,
              onEnterStart: collapseNode,
              onEnterActive: expandNode,
              onLeaveStart: expandNode,
              onLeaveActive: collapseNode,
            }}
            itemIcon={itemIcon}
            expandIcon={expandIcon}
            sx={styles.menu}
            key="1"
            popupOffset={[10, 15]}
          >
            {menuItems?.map(
              ({ path, label, isDropdown, dropdownItems, key }) => {
                return isDropdown ? (
                  <Dropdown
                    key={key}
                    label={label}
                    path={path}
                    items={dropdownItems}
                  />
                ) : (
                  <MenuItem key={key}>
                    {" "}
                    <Link sx={styles.link} path={`${path}`}>
                      {label}
                    </Link>
                  </MenuItem>
                );
              }
            )}
          </Menu>
          <Box sx={styles.menuFooter}>
            <Box sx={styles.social}>
              {social.map((socialItem, i) => (
                <Box as="span" key={i} sx={styles.social.icon}>
                  <a to={socialItem.path}>
                    <Image src={socialItem.icon} alt="social media icon" />
                  </a>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Scrollbars>
    </Drawer>
  );
}

const styles = {
  handler: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: "0",
    width: "26px",
  },

  drawer: {
    width: "100%",
    height: "100%",
    color: "text",
    background: " rgba( 255, 255, 255, 0.3 )",
    boxShadow: " 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: " blur(2px) saturate(100%)",
    borderRadius: "0 0 15px 15px",
    border: " 1px solid rgba(209, 213, 219, 0.4)",
  },

  close: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "20px",
    right: "15px",
    zIndex: "1",
    cursor: "pointer",
  },

  content: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    background: "transparent",
    marginTop: "50px",

    ".rc-menu": {
      border: "none",
      boxShadow: "none",
      background: "transparent",
      color: "text",
      zIndex: "20",
      marginTop: 0,
      flex: 1,
    },

    ".rc-menu-item": {
      background: "transparent",
      i: {
        display: "none",
      },
    },
    ".rc-menu-item-selected": {
      backgroundColor: "transparent",
    },
  },

  menu: {
    width: "100%",

    color: "text",
    top: "0",
    left: "0",
    maxWidth: "400px",
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",

    ".rc-menu-item-open": {},
    ".rc-menu-item-active": {},
    ".rc-menu-item-inline": {},
    ".rc-menu-item-title": {},
    ".rc-menu-submenu": {
      background: "transparent",
    },
  },

  menuFooter: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    mt: "auto",
  },

  social: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    icon: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "text",
      fontSize: 14,
      mr: "15px",
      transition: "all 0.25s",
      cursor: "pointer",
      ":last-child": {
        mr: "0",
      },
      "&:hover": {
        color: "secondary",
      },
    },
  },

  button: {
    color: "white",
    fontSize: "14px",
    fw: "700",
    height: "45px",
    borderRadius: "5px",
    cursor: "pointer",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    py: "0",
  },
};
