/** @jsx jsx */
import { jsx, Flex, Box } from "theme-ui";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";
import { SubMenu, Item as MenuItem, Divider } from "rc-menu";

import { Link } from "components/link";

function Dropdown({ items, path, label, innerDropdown, eventKey }) {
  return (
    <SubMenu
      title={
        <Link path="" label={label}>
          {label}
        </Link>
      }
      key={eventKey}
      eventKey={eventKey}
    >
      {items?.map(({ isDropdown, dropdownItems, label, path, key }) =>
        isDropdown ? (
          <Dropdown key={key} label={label} path={path} items={dropdownItems} />
        ) : (
          <MenuItem key={key}>
            {" "}
            <Link path={`${path}`}>{label}</Link>
          </MenuItem>
        )
      )}
    </SubMenu>
  );
}

export default Dropdown;

const styles = {
  dropdownLink: {
    // mb: 20,
  },
  dropdownLinkWrapper: {
    a: {
      fontSize: "12px",
      fontWeight: "100 !important",
      mb: [0, 0, 20],
    },
  },

  dropdownMenu: {
    zIndex: 10,
    cursor: "default",
    textAlign: "start",
    display: "flex",
    flexDirection: "column",
    color: "text",
    ml: ["15px", "15px", "40px"],
    mb: "20px",
    width: ["150px", "auto"],
    // mt: " 10px",
    // mb: " 30px",
    li: {
      fontSize: "12px",

      cursor: "pointer",
      // py: 2,
      ":last-child": {
        pb: 0,
      },
      "&:hover": {
        color: "primary",
      },
      "&:last-child": {
        borderBottom: "none",
        // my: 0,
        // py: 0,
      },
      "&:first-child": {
        borderBottom: "none",
        // my: 0,:
        // py: 0,
        // mb: "-7px",
      },
      a: {
        color: "text",
      },
    },
  },

  clicked: {
    display: "none",
  },
};