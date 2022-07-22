/** @jsx jsx */
import { jsx, Flex } from "theme-ui";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

import { Link } from "components/link";

function Dropdown({ items, path, label, closeMobileMenu, innerDropdown, i }) {
  const [click, setClick] = useState(false);

  const [dropdown, setDropdown] = useState(false);

  const onMouseEnter = () => {
    // if (window.innerWidth < 960) {
    //   setDropdown(false);
    // } else {
    setDropdown(true);
    // }
  };

  const onMouseLeave = () => {
    // if (window.innerWidth < 960) {
    //   setDropdown(false);
    // } else {
    setDropdown(false);
    // }
  };
  const handleClick = () => setClick(!click);

  return (
    <li
      key={i}
      sx={innerDropdown ? styles.innerDropdownLink : styles.dropdownLink}
    >
      <Link path={path} label={label} onClick={closeMobileMenu}>
        {label}{" "}
        <FaPlus
          onMouseEnter={onMouseEnter}
          // onMouseLeave={onMouseLeave}
          sx={styles.dropdownLink.plus}
        />
      </Link>
      {dropdown && (
        <Flex
          as="nav"
          onClick={handleClick}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          sx={
            click ? styles.dropdownMenu + styles.clicked : styles.dropdownMenu
          }
        >
          {items?.map(({ isDropdown, dropdownItems, label, path }, i) => {
            return isDropdown ? (
              <Dropdown
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
        </Flex>
      )}
    </li>
  );
}

export default Dropdown;

const styles = {
  dropdownLink: {
    mb: 20,
    a: {
      display: "flex",
      alignItems: "center",
      position: "relative",
    },
    plus: {
      ml: "5px",
      // "@media screen and (max-width: 768px)": {
      //   display: "none",
      // },
    },
  },

  dropdownMenu: {
    zIndex: 10,
    cursor: "default",
    textAlign: "start",
    display: "flex",
    flexDirection: "column",
    color: "text",
    ml: "40px",
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