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
          <Flex as="ul" sx={styles.rightNav}>
            {menuItems?.map((item, index) => (
              <li key={index}>
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
          <Flex as="ul" sx={styles.footerNav}>
            {menuItems?.map((item, index) => (
              <li key={index}>
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
    justifyContent: "center",
    minHeight: ["100vh"],
  },
  content: {
    maxWidth: [507, null, null, 324, 450],
  },
  footerNav: {
    display: "flex",
    flexDirection: "column",
  },
  rightNav: {
    display: "flex",
    flexDirection: "column",
  },

  logo: {
    img: {},
  },
};
