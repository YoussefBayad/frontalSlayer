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
import Testimonials from "./testimonials";

const Banner = () => {
  const menuItems = [
    {
      path: "/",
      label: "Home",
    },
    {
      path: "mental-health",
      label: "Mental Health",
    },
    {
      path: "why-us",
      label: "Why us",
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
      <Container sx={styles.contentWrapper}>
        <Box sx={styles.left}>
          <Flex as="ul" sx={styles.left.nav}>
            {menuItems?.map((item, index) => (
              <li sx={styles.listItem} key={index}>
                <Link path={item?.path}>{item?.label}</Link>
              </li>
            ))}
          </Flex>{" "}
        </Box>
        <Box sx={styles.logo}>
          <Image src={banner} alt="banner" />
          <Testimonials />
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
      </Container>
    </Box>
  );
};

export default Banner;

const styles = {
  contentWrapper: {
    display: [null, null, null, "flex", "grid"],
    gridTemplateColumns: ["repeat(1, 1fr)", "repeat(3, 1fr)"],
    alignItems: "flex-start",
    height: ["100vh"],
  },

  left: {
    mt: 90,
    height: "100vh",
    alignSelf: "flex-start",
    ul: {
      display: "flex",
      flexDirection: "column",
      listStyle: "none",
    },
  },
  right: {
    justifySelf: "flex-end",
    height: "100vh",
    alignSelf: "flex-end",
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
      width: "110px",
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

  logo: {
    img: {
      // height: "100px",
    },
  },
};
