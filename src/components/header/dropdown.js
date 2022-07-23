/** @jsx jsx */
import { jsx, Flex, Box } from "theme-ui";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

import { Link } from "components/link";

function Dropdown({ items, path, label, closeMobileMenu, innerDropdown, i }) {
  const [click, setClick] = useState(false);

  const [dropdown, setDropdown] = useState(true);

  const dropdownAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
      },
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
        delay: 0.3,
      },
    },
  };
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      return;
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      return;
    } else {
      setDropdown(false);
    }
  };
  const handleClick = () => setClick(!click);
  const handleDropdownClick = () => {
    // setDropdown((prev) => !prev);
  };

  return (
    <motion.li
      key={i}
      sx={innerDropdown ? styles.innerDropdownLink : styles.dropdownLink}
    >
      <Box sx={styles.dropdownLinkWrapper}>
        <Link path={path} label={label} onClick={closeMobileMenu}>
          {label}{" "}
        </Link>
        <FaPlus
          onMouseEnter={onMouseEnter}
          onClick={handleDropdownClick}
          sx={styles.dropdownLinkWrapper.plus}
          fill="white"
        />
      </Box>
      {dropdown && (
        <motion.Flex
          as="nav"
          onClick={handleClick}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          sx={
            click ? styles.dropdownMenu + styles.clicked : styles.dropdownMenu
          }
          initial="exit"
          animate={dropdown ? "enter" : "exit"}
          variants={dropdownAnimate}
        >
          {items?.map(({ isDropdown, dropdownItems, label, path }, i) => {
            return isDropdown ? (
              <Dropdown
                key={i}
                label={label}
                path={path}
                items={dropdownItems}
                isOpen={dropdown}
                closeMobileMenu={closeMobileMenu}
                innerDropdown
              />
            ) : (
              <li key={i}>
                <Link
                  sx={styles.link}
                  path={`/mental-health${path}`}
                  label={label}
                  onClick={() => setClick(false)}
                >
                  {label}
                </Link>
              </li>
            );

            // return (

            // );
          })}
        </motion.Flex>
      )}
    </motion.li>
  );
}

export default Dropdown;

const styles = {
  dropdownLink: {
    mb: 20,
  },
  dropdownLinkWrapper: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    plus: {
      cursor: "pointer",
      ml: "5px",
      fill: "white",

      "@media screen and (max-width: 768px)": {
        width: "25px",
      },
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
      cursor: "pointer",
      py: 2,
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
