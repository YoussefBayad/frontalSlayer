/** @jsx jsx */
import { jsx, Box, Container, Image } from "theme-ui";
import Logo from "assets/images/logo.gif";
import bottomShelf from "assets/images/bottomShelfs.PNG";
import flowerHolder from "assets/images/flowerHolder.PNG";
import phone from "assets/images/phone.PNG";
import floor from "assets/images/floor.svg";
import top from "assets/images/top1.png";
import Carousel from "../components/carousels/products";
import SectionHeading from "components/section-heading";
import LeftNav, { RightNav } from "components/navs";
import WallBig from "assets/images/wall.png";
import WallSmall from "assets/images/wall22.png";
import { keyframes } from "@emotion/core";
import { Link } from "components/link";

const Products = ({ data }) => {
  return (
    <Box as="section" variant="section.products">
      <Box sx={styles.top}></Box>

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
        </Container>
        <Box sx={styles.bottomShelf}>
          <Image src={flowerHolder} sx={styles.leftFlowers} alt="shelf" />
          <Box sx={styles.shelfWrapper}>
            <Image
              sx={styles.shelfWrapper.shelf}
              src={bottomShelf}
              alt="shelf"
            />
          </Box>
          <Image src={flowerHolder} sx={styles.rightFlowers} alt="shelf" />
        </Box>
        <Box sx={styles.floor}></Box>
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
      "repeat(1,0.7fr)",
      "repeat(1,0.7fr)",
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
    backgroundImage: [
      `url(${WallSmall})`,
      `url(${WallSmall})`,
      `url(${WallBig})`,
    ],
    backgroundPosition: "top",
    backgroundSize: ["contain", "contain", "cover"],
    backgroundRepeat: ["repeat", "repeat", "no-repeat"],
    p: 0,
    // boxShadow: "0 0 15px 5px #e53030",
    filter: "drop-shadow(0px 26px 14px #ec6868)",
    height: "150%",
  },
  logo: {
    img: {
      height: [" 100px", " 100px", " 13vh", "20vh"],
      mt: "15px",

      objectFit: "contain",
      stroke: "#fff",
      // animationName: `${neon} `,
      animationDuration: " 0.8s",
      animationIterationCount: "infinite",
      animationDirection: " alternate",
      cursor: "pointer",
    },
  },
  sectionHeading: {
    mb: [0, 0],
    h2: {
      fontSize: "15px",

      textShadow:
        "  0 0 15px  #e50300,0 0 10px  #e50300,0 0 20px  #e50300,0 0 40px #e50300,0 0 80px #e50300,0 0 90px #e50300,0 0 100px #e50300,0 0 150px #e50300;",
    },
  },
  bottomShelf: {
    mt: "20px",
    zIndex: "4",
  },
  shelfWrapper: {
    height: ["120px", " 167px !important", "auto"],

    shelf: {
      position: "absolute",
      right: ["14%", "14%", "14%", "20.5%"],
      bottom: [
        " -20px !important",
        " -20px !important",
        " -20px !important",
        " -14px !important",
      ],
      width: [" 70%", " 70%", " 70%", " 55%"],
    },
    phoneLink: {
      position: "relative",
    },
    phone: {
      position: "absolute",
      height: [" 40px", " 86px"],
      bottom: ["90px", "90px", " 0", "259px"],
      left: ["66px", "66px", " 133px", "348px"],
      cursor: "pointer",
    },
  },
  leftFlowers: {
    height: ["150px", "150px", "35%"],
    position: "absolute",
    transform: "translateX(0%)",
    left: ["calc(0% - 0px)", "calc(0% - 0px)", "calc(0% - 195px)"],
    bottom: ["-35px"],
  },
  rightFlowers: {
    height: ["150px", "150px", "35%"],
    position: "absolute",
    transform: "translateX(0%)",
    right: ["calc(0% - 0px)", "calc(0% - 0px)", "calc(0% - 195px)"],
    bottom: ["-35px"],
  },
  floor: {
    position: " absolute",
    bottom: [" -220px", " -220px", " -284px"],
    zIndex: " 2",
    width: " 100vw",
    height: [" 250px", " 250px", " 311px"],
    backgroundColor: " white",
    left: ["auto", "auto", "50%"],
    transform: ["", "", "translateX(-50%) "],
    backgroundImage: `url(${floor})`,
    backgroundPosition: " center",
    backgroundSize: " cover",
    backgroundRepeat: " no-repeat",
  },
  top: {
    zIndex: " -1",
    width: " 100vw",
    height: [" 23px", " 23px", " 60px"],
    backgroundColor: " #e3d8d7",
    backgroundImage: `url(${top})`,
    backgroundPosition: " center",
    backgroundSize: " cover",
    backgroundRepeat: " no-repeat",
  },
};
