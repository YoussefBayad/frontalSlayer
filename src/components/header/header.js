/** @jsx jsx */
import { jsx, Box, Container, MenuButton, Flex, Button } from "theme-ui";
import { useState } from "react";
import { GrClose } from "react-icons/gr";
import Sticky from "react-stickynode";
import { Link } from "components/link";
import menuItems from "./header.data";

export default function Header({ spaceLeft, ...props }) {
  const [mobileMenu, setMobileMenu] = useState(false);

  const openMobileMenu = () => {
    setMobileMenu(true);
  };

  const closeMobileMenu = () => {
    setMobileMenu(false);
  };

  return (
    <Box sx={styles.headerWrapper}>
      <Sticky enabled={true} top={0} activeClass="is-sticky" innerZ={10}>
        <Box
          as="header"
          variant="layout.header"
          className={mobileMenu ? "is-mobile-menu" : ""}
        >
          <Container>
            <Box sx={styles.headerInner}>
              <Flex
                as="nav"
                sx={spaceLeft ? styles.navbarSpaceLeft : styles.navbar}
                className={mobileMenu ? "navbar active" : "navbar"}
              >
                <Box
                  as="ul"
                  sx={styles.navList}
                  className={mobileMenu ? "active" : ""}
                >
                  {menuItems?.map((item, index) => (
                    <li sx={styles.listItem} key={index}>
                      <Link path={item?.path}>{item?.label}</Link>
                    </li>
                  ))}
                </Box>
              </Flex>

              {mobileMenu ? (
                <Button variant="text" sx={styles.closeButton}>
                  <GrClose
                    onClick={closeMobileMenu}
                    color="white"
                    size="20px"
                  />
                </Button>
              ) : (
                <MenuButton
                  aria-label="Toggle Menu"
                  sx={styles.toggle}
                  onClick={openMobileMenu}
                />
              )}
            </Box>
          </Container>
        </Box>
      </Sticky>
    </Box>
  );
}

const styles = {
  toggle: {
    "@media only screen and (min-width: 768px)": {
      display: "none",
    },
    position: "absolute",
    top: ["150px"],
    left: ["5%", "5%", "5%", "15%"],
  },
  headerWrapper: {
    position: "relative",
    "@media only screen and (max-width: 768px)": {
      backgroundColor: "backgroundSecondary",
    },
  },
  headerInner: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    "@media only screen and (max-width: 768px)": {
      ".navbar": {
        position: "absolute",
        top: "100%",
        backgroundColor: "backgroundSecondary",
        width: "100%",
        left: 0,
        p: "20px 30px",
        display: "block",
        boxShadow: "0 6px 13px rgba(38,78,118,0.1)",
        opacity: 0,
        visibility: "hidden",
        minHeight: "calc(100vh - 77px)",
        transition: "all 0.3s ease-in-out 0s",
        "&.active": {
          opacity: 1,
          visibility: "visible",
        },

        ul: {
          display: "block",
          "li + li": {
            marginTop: 5,
          },
          a: {
            color: "white",
          },
        },
      },
    },
  },
  navbar: {
    alignSelf: "flex-start",
    position: "fixed",
    top: ["150px", "170px"],
    left: ["5%", "5%", "5%", "5%", "10%", "15%", "15%", "15%"],
  },
  navbarSpaceLeft: {
    alignSelf: "flex-start",
    position: "fixed",
    top: ["150px", "170px"],
    left: ["5%", "5%", "5%", "5%", "10%", "10%", "10%", "10%"],
  },
  navList: {
    listStyle: "none",
    marginLeft: "auto",
    ul: {
      display: "flex",
      flexDirection: "column",
      listStyle: "none",
      p: 0,
    },
    p: 0,
    ".nav-item": {
      cursor: "pointer",
      fontWeight: 400,
      padding: 0,
    },
    ".active": {
      "&:after": {
        content: "''",
        position: "absolute",
        width: "80px",
        transform: "scaleX(1)",
        transformOrigin: "bottom left",
        height: "2px",
        bottom: " -5px",
        left: "0",
        backgroundColor: "text",
        transition: "transform 0.25s ease-out",
      },
    },

    closeButton: {
      height: "32px",
      padding: "4px",
      minHeight: "auto",
      width: "32px",
      ml: "3px",
      path: {
        stroke: "#fff",
      },
    },
  },
  listItem: {
    mb: 20,
    cursor: "pointer",
    position: " relative",
    width: "fit-content",

    "&:after": {
      content: "''",
      position: "absolute",
      width: "100%",
      transform: " scaleX(0)",
      height: "2px",
      bottom: " -5px",
      left: "0",
      backgroundColor: "text",
      transformOrigin: "bottom right",
      transition: "transform 0.25s ease-out",
    },
    "&:hover:after": {
      transform: "scaleX(1)",
      transformOrigin: "bottom left",
    },
  },
};
