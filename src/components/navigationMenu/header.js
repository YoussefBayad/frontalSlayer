/** @jsx jsx */
import { jsx, Box, Image } from "theme-ui";
import { useState } from "react";
import Menu, { SubMenu, Item as MenuItem, Divider } from "rc-menu";
import { Link } from "components/link";
import menuItems from "./header.data";
import { motion } from "framer-motion";
import facebook from "assets/images/icons/facebook.svg";
import instagram from "assets/images/icons/instagram.svg";
import twitter from "assets/images/icons/twitter.svg";
import nav from "assets/images/icons/nav.svg";
import { AiOutlineClose } from "react-icons/ai";
import Dropdown from "./dropdown";

export default function Header({ homeToggle, spaceLeft, ...props }) {
  const [open, setOpen] = useState(false);

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

  return !open ? (
    <Image
      sx={homeToggle ? styles.homeToggle : styles.toggle}
      src={nav}
      alt="navigation"
      onClick={() => setOpen(true)}
      {...props}
    />
  ) : (
    <Box sx={styles.headerWrapper}>
      <Box sx={styles.close}>
        <AiOutlineClose
          size="28px"
          fill="white"
          onClick={() => setOpen(false)}
        />
      </Box>
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
        {menuItems?.map(({ path, label, isDropdown, dropdownItems, key }) => {
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
        })}
      </Menu>
      <Box sx={styles.socialIcons}>
        <a href="https://www.facebook.com/frontalslyer">
          <Image src={facebook} alt="social media icon" />
        </a>
        <a href="https://www.instagram.com/frontalslayer/">
          <Image src={instagram} alt="social media icon" />
        </a>
        <a href="https://twitter.com/frontalslyer">
          <Image src={twitter} alt="social media icon" />
        </a>
      </Box>
    </Box>
  );
}

const styles = {
  close: {
    width: "100%",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    py: "12px",
    px: "24px",
  },
  homeToggle: {
    position: "absolute",
    height: "30px",
    top: "10vh",
    left: "2vw",
  },
  headerWrapper: {
    background: " rgba( 255, 255, 255, 0.6 )",
    boxShadow: " 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: " blur(16px) saturate(100%)",
    border: " 1px solid rgba(209, 213, 219, 0.4)",
    color: "text",
    position: "fixed",
    top: "0",
    left: "0",
    maxWidth: "400px",
    width: "100%",
    height: "100vh",
    overflow: "scroll",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    zIndex: "10",
    ".rc-menu": {
      border: "none",
      boxShadow: "none",
      background: " rgba( 255, 255, 255, 0.3)",
      // backdropFilter: "blur(0px) saturate(50%)",
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
    ".rc-menu-item-open": {},
    ".rc-menu-item-active": {},
    ".rc-menu-item-inline": {},
    ".rc-menu-item-title": {},
    ".rc-menu-submenu": {
      background: "transparent",
    },
    ".rc-menu-submenu-selected": {},
    // "rc-menu-submenu-title": { backgroundColor: "orange !important " },
    // "rc-menu-submenu-inline": { backgroundColor: "orange !important " },
    ".rc-menu-submenu-open": {},
    ".rc-menu-submenu-active": {},
    // "rc-menu-submenu-selected": { backgroundColor: "orange !important " },
  },
  socialIcons: {
    display: "flex",
    justifyContent: "space-around",
    mx: "auto",
    width: "50%",
    py: "50px",
    img: {
      height: "30px",
    },
  },
};
