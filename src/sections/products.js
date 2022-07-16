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
// import { Link } from "components/link";
import Carousel from "../components/carousels/products";
import SectionHeading from "components/section-heading";
import LeftNav, { RightNav } from "components/navs";

const Products = () => {
  return (
    <Box as="section" variant="section.products">
      <Container sx={styles.container}>
        <LeftNav sx={styles.left} />

        <Container sx={styles.carouselsWrapper}>
          <Box sx={styles.logo}>
            <Image src={Logo} alt="logo" />
          </Box>
          <SectionHeading
            title="PRODUCT TOOL BOOKING"
            sx={styles.sectionHeading}
          />

          <Box>
            <Carousel title="HD LACE" path="/products/hd-lace" />
            <Carousel
              title="TRANSPARENT WIG"
              path="/products/transparent-wig"
            />
            <Carousel title="CUSTOM WIG" path="/products/custom-wig" />
          </Box>
        </Container>
        <RightNav sx={styles.right} />
      </Container>
    </Box>
  );
};

export default Products;

const styles = {
  left: {
    position: "fixed",
    top: "100px",
  },
  right: {
    position: "fixed",
    bottom: "100px",
    right: "100px",
  },
  carouselsWrapper: {
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
    h2: {
      textShadow:
        "  0 0 15px  #e50300,0 0 10px  #e50300,0 0 20px  #e50300,0 0 40px #e50300,0 0 80px #e50300,0 0 90px #e50300,0 0 100px #e50300,0 0 150px #e50300;",
    },
  },
};
