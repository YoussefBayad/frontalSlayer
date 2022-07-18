/** @jsx jsx */
import {
  jsx,
  Box,
  Container,
  Heading,
  Text,
  Button,
  Image,
  Flex,
} from "theme-ui";
import logo from "assets/images/logo.png";
import BannerPattern from "assets/images/banner-pattern.webp";
import { Link } from "components/link";
import Carousel from "../components/carousels/landing";
import LeftNav, { RightNav } from "components/navs";
import Logo from "components/logo";

const Landing = () => {
  const productsItems = [
    {
      path: "/products",
      label: "PRODUCTS",
    },
    {
      path: "/products/hd-lace",
      label: "HD LACE",
    },
    {
      path: "/products/transparent-lace",
      label: "TRANSPARENT LACE",
    },

    {
      path: "/products/custom-wigs",
      label: "CUSTOM WIGS",
    },
  ];
  const middleNav = [
    {
      path: "/slay-tools",
      label: "SLAY TOOLS",
    },
    {
      path: "/products/hd-lace",
      label: "HD LACE",
    },
    {
      path: "/products/transparent-lace",
      label: "TRANSPARENT LACE",
    },

    {
      path: "/products/custom-wigs",
      label: "CUSTOM WIGS",
    },
  ];

  return (
    <Box id="home" as="section" variant="section.banner">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Container sx={styles.contentWrapper}>
        <Box sx={styles.contentBorder}>
          <Logo />
          <Box></Box>
          <Box sx={styles.carousel}>
            <Carousel />
            <Flex as="ul" sx={styles.middle.nav}>
              {productsItems?.map((item, index) => (
                <li sx={styles.listItem} key={index}>
                  <Link path={item?.path}>{item?.label}</Link>
                </li>
              ))}
            </Flex>{" "}
          </Box>
          <RightNav />
        </Box>
      </Container>
    </Box>
  );
};

export default Landing;

const styles = {
  section: {},
  contentWrapper: {
    border: "6px solid",
    borderColor: "borderColor",
    borderRadius: "10px",
    position: "relative",
    p: "0 !important",
    width: "70%",
    height: "70%",
    backgroundColor: "#b70200",
    backgroundImage:
      "linear-gradient(90deg, #ce0300 0%, rgba(144,14,12,0.5) 100%)",
    // boxShadow:
    //   "0 2.8px 2.2px rgba(0, 0, 0, 0.034),0 6.7px 5.3px rgba(0, 0, 0, 0.048),0 12.5px 10px rgba(0, 0, 0, 0.06),0 22.3px 17.9px rgba(0, 0, 0, 0.072),0 41.8px 33.4px rgba(0, 0, 0, 0.086),0 100px 80px rgba(0, 0, 0, 0.12)",
    // boxShadow: " 7px 14px 40px 4px rgb(0 0 0 / 50%)",
    // filter: "drop-shadow(0px 0px 3px #fff) drop-shadow(0px 0px 6px #e50300) drop-shadow(0px 0px 15px #ff5b59) drop-shadow(0px 0px 40px #fc0906) drop-shadow(0px 0px 60px #e50300)"
    boxShadow:
      "10px 10px 30px 0px #ff5b59, 10px 10px 20px 0px #e50300, 10px 10px 100px 0px #ff5b59",
  },
  contentBorder: {
    display: [null, null, null, "grid"],
    gridTemplateColumns: ["repeat(1, 1fr)", "repeat(3, 1fr)"],
    alignItems: "flex-start",
    border: "6px solid",
    borderColor: "headingSecondary",
    height: "100%",

    py: "20px",
    px: "40px",
  },

  logo: {
    position: "absolute",
    top: "-130px",
    left: "50%",
    zIndex: "2",
    transform: "translateX(-50%)",
    // display: "flex",
    // justifyContent: "center",
    backgroundColor: "rgba(144,14,12,1)",
    img: {
      height: "20vh",
      objectFit: "contain",
    },
  },

  middle: {
    nav: {
      mt: "10px",
      display: "flex",
      flexDirection: "column",
      mx: "auto",
      listStyle: "none",
      li: {
        textAlign: "left",
        mb: "5px",
      },
    },
  },

  listItem: {
    mb: 20,
    cursor: "pointer",
    position: " relative",
    "&:after": {
      content: "''",
      position: "absolute",
      width: "80px",
      transform: " scaleX(0)",
      height: "2px",
      bottom: " -5px",
      left: "0",
      backgroundColor: "text",
      transformOrigin: " bottom right",
      transition: "transform 0.25s ease-out",
    },
    "&:hover:after": {
      transform: "scaleX(1)",
      transformOrigin: "  bottom left",
    },
  },

  carousel: {
    display: "flex",
    flexDirection: "column",
    justifyContent: ["center", "flex-end"],
    height: ["60vh", "60vh"],
    m: 0,
    p: 0,
    zIndex: "10",
  },
};
