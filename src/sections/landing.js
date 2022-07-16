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
          <LeftNav />
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
  contentWrapper: {
    border: "6px solid",
    borderColor: "borderColor",
    borderRadius: "10px",
    position: "relative",
    p: "0 !important",
  },
  contentBorder: {
    display: [null, null, null, "flex", "grid"],
    gridTemplateColumns: ["repeat(1, 1fr)", "repeat(3, 1fr)"],
    alignItems: "flex-start",
    border: "6px solid",
    borderColor: "headingSecondary",
    height: "80vh",
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
      height: "30vh",
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
    justifyContent: "flex-end",
    height: "75vh",
    m: 0,
    p: 0,
  },
};
