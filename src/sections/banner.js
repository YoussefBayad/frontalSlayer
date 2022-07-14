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
import banner from "assets/images/banner.png";
import BannerPattern from "assets/images/banner-pattern.webp";
import { Link } from "components/link";
import Carousel from "./carousel";

const Banner = () => {
  const menuItems = [
    {
      path: "/",
      label: "Home",
    },
    {
      path: "mental-health",
      label: "Products",
    },
    {
      path: "why-us",
      label: "Lace Wigs",
    },
    {
      path: "/faq",
      label: "Faq",
    },
    {
      path: "/contact",
      label: "Contact",
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
          <Box sx={styles.logo}>
            <Image src={banner} alt="banner" />
          </Box>
          <Box sx={styles.left}>
            <Flex as="ul" sx={styles.left.nav}>
              {menuItems?.map((item, index) => (
                <li sx={styles.listItem} key={index}>
                  <Link path={item?.path}>{item?.label}</Link>
                </li>
              ))}
            </Flex>{" "}
          </Box>
          <Box sx={styles.carousel}>
            <Carousel />
            <Flex as="ul" sx={styles.middle.nav}>
              {menuItems?.map((item, index) => (
                <li sx={styles.listItem} key={index}>
                  <Link path={item?.path}>{item?.label}</Link>
                </li>
              ))}
            </Flex>{" "}
          </Box>
          <Box sx={styles.right}>
            <Flex as="ul" sx={styles.right.nav}>
              {menuItems?.map((item, index) => (
                <li sx={styles.listItem} key={index}>
                  <Link path={item?.path}>{item?.label}</Link>
                </li>
              ))}
            </Flex>{" "}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;

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

  left: {
    height: "100vh",
    alignSelf: "flex-start",
    ul: {
      display: "flex",
      flexDirection: "column",
      listStyle: "none",
      p: 0,
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
  right: {
    display: "flex",
    justifySelf: "flex-end",
    alignItems: "flex-end",
    height: "75vh",
    ul: {
      display: "flex",
      flexDirection: "column",
      listStyle: "none",
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
