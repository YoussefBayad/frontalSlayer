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
import Logo from "assets/images/logo.png";
import BannerPattern from "assets/images/banner-pattern.webp";
import { Link } from "components/link";
import Carousel from "../components/carousels/products";
import SectionHeading from "components/section-heading";

const Products = () => {
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

  return (
    <Box as="section" variant="section.products">
      <Container sx={styles.container}>
        <Box sx={styles.logo}>
          <Image src={Logo} alt="logo" />
        </Box>
        <SectionHeading
          title="Product Tool Booking"
          sx={styles.sectionHeading}
        />
        <Box>
          <Carousel />
          <Carousel />
          <Carousel />
        </Box>
      </Container>
    </Box>
  );
};

export default Products;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  logo: {
    img: {
      height: "20vh",
      objectFit: "contain",
    },
  },
  sectionHeading: {
    mb: 0,
  },
};
