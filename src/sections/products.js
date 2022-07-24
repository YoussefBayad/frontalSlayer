/** @jsx jsx */
import { jsx, Box, Container, Image } from "theme-ui";
import Logo from "assets/images/logo.svg";
import bottomShelf from "assets/images/bottomShelfs.PNG";
import flowerHolder from "assets/images/flowerHolder.PNG";
import phone from "assets/images/phone.PNG";
import Carousel from "../components/carousels/products";
import SectionHeading from "components/section-heading";
import LeftNav, { RightNav } from "components/navs";
import Wall from "assets/images/wall2.png";
import { keyframes } from "@emotion/core";
import { Link } from "components/link";

const Products = ({ data }) => {
  return (
    <Box as="section" variant="section.products">
      <Container sx={styles.container}>
        <Box></Box>
        <Container sx={styles.carouselsWrapper}>
          <Link sx={styles.logo} label="" path="/">
            <Image sx={styles.logo.img} src={Logo} alt="logo" />
          </Link>
          <SectionHeading
            title="PRODUCT TOOL BOOKING"
            sx={styles.sectionHeading}
          />

          <Box>
            <Carousel data={data.rowOne} />
            <Carousel data={data.rowTwo} />
            <Carousel data={data.rowThree} />
          </Box>
          <Box sx={styles.bottomShelf}>
            <Image src={flowerHolder} sx={styles.leftFlowers} alt="shelf" />
            <Box sx={styles.shelfWrapper}>
              <Image sx={styles.shelfWrapper.phone} src={phone} alt="shelf" />
              <Image
                sx={styles.shelfWrapper.shelf}
                src={bottomShelf}
                alt="shelf"
              />
            </Box>
            <Image src={flowerHolder} sx={styles.rightFlowers} alt="shelf" />
          </Box>
        </Container>
      </Container>
    </Box>
  );
};

export default Products;
const neon = keyframes`
from {
  filter: drop-shadow(0px 0px 1px #fff)
  drop-shadow(0px 0px 3px #e50300)
  drop-shadow(0px 0px 10px #ff5b59)
  drop-shadow(0px 0px 30px #fc0906)
  drop-shadow(0px 0px 50px #e50300);
}

to {
  filter: drop-shadow(0px 0px 3px #fff)
  drop-shadow(0px 0px 6px #e50300)
  drop-shadow(0px 0px 15px #ff5b59)
  drop-shadow(0px 0px 40px #fc0906)
  drop-shadow(0px 0px 60px #e50300); 
}
`;

const styles = {
  container: {
    position: "relative",
    px: ["0", "0", "0", "auto"],
    display: "grid",
    gridTemplateColumns: [
      "repeat(1, 0.7fr)",
      "repeat(1, 0.7fr)",
      "repeat(1, 1fr)",
      "100px 1fr 100px",
      "100px 1fr 100px",
    ],
    placeContent: "center",
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
    backgroundImage: `url(${Wall})`,
    backgroundPosition: "top",
    backgroundSize: ["cover"],
    backgroundRepeat: "repeat",
    pb: "50px",
  },
  logo: {
    img: {
      height: [" 17vh", " 17vh", " 17vh", "20vh"],
      objectFit: "contain",
      stroke: "#fff",
      animationName: `${neon} `,
      animationDuration: " 0.8s",
      animationIterationCount: "infinite",
      animationDirection: " alternate",
      cursor: "pointer",
    },
  },
  sectionHeading: {
    mb: [0, "60px"],
    h2: {
      textShadow:
        "  0 0 15px  #e50300,0 0 10px  #e50300,0 0 20px  #e50300,0 0 40px #e50300,0 0 80px #e50300,0 0 90px #e50300,0 0 100px #e50300,0 0 150px #e50300;",
    },
  },
  bottomShelf: {
    mt: "100px",
  },
  shelfWrapper: {
    position: "relative",

    shelf: {},
    phone: {
      position: "absolute",
      height: [" 40px", " 86px"],
      top: ["-20px", " 0"],
      left: ["20px", " 133px"],
    },
  },
  leftFlowers: {
    height: ["10%", "35%"],
    position: "absolute",
    transform: "translateX(0%)",
    left: ["calc(0% - 13px)", "calc(0% - 10px)", "calc(0% - 195px)"],
    bottom: ["70px", "70px", "120px"],
  },
  rightFlowers: {
    height: ["10%", "35%"],
    position: "absolute",
    transform: "translateX(0%)",
    right: ["calc(0% - 13px)", "calc(0% - 10px)", "calc(0% - 195px)"],
    bottom: ["70px", "70px", "120px"],
  },
};
