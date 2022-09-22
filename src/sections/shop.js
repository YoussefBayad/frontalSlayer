/** @jsx jsx */
import { jsx, Box, Container, Image, Text, Input } from "theme-ui";
import CascadingFlowers from "assets/images/cascadingFlowersHQ.svg";
import blurryGradient from "assets/images/blurryGradient3.svg";
import { IoIosSearch } from "react-icons/io";
import Product from "components/cards/product-card";
import { FaGripLines } from "react-icons/fa";
import params from "assets/images/icons/params.svg";
import cart from "assets/images/icons/cart.svg";
import shortText from "assets/images/icons/shortText.svg";
import Header from "components/header/header";
import { openCart } from "../redux/cart/cartSlice";

import Masonry from "react-masonry-css";
import { useDispatch } from "react-redux";

const Shop = () => {
  const dispatch = useDispatch();

  const breakpointColumnsObj = {
    default: 4,
    1100: 4,
    700: 3,
    500: 2,
  };

  return (
    <Box as="section" variant={"section.shop"} sx={styles.section}>
      <Container sx={styles.container}>
        <Header />
        <Box sx={styles.navigation}>
          <Box sx={styles.navigation.sort}>
            <Image src={params} />
          </Box>
          <Box as="form" sx={styles.navigation.form}>
            <IoIosSearch sx={styles.navigation.form.button} />
            <Box as="label" htmlFor="search" variant="styles.srOnly">
              Search
            </Box>
            <Input
              name="search"
              id="search"
              placeholder="Find Your School..."
              sx={styles.navigation.form.input}
            />
          </Box>
          <Box sx={styles.navigation.sort} onClick={() => dispatch(openCart())}>
            <Image src={cart} />
          </Box>
        </Box>
        {/* <Box sx={styles[".shop-products"]}> */}
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          <Text sx={styles.title} id="1">
            Lace Wigs :
          </Text>
          <Product id="2" />
          <Product id="3" />
          <Product id="4" />
          <Product id="5" />
          <Product id="6" />
          <Product id="7" />
          <Product id="8" />
        </Masonry>
      </Container>
    </Box>
  );
};

export default Shop;

const styles = {
  section: {
    minHeight: "100vh",
    width: "100%",
    position: "absolute",
    top: "0",
    // backgroundColor: "background",
    backgroundImage: [`url(${blurryGradient})`],
    backgroundPosition: "right",
    backgroundSize: ["cover"],
    backgroundRepeat: ["repeat"],
    "&:after": {
      content: '""',
      position: "absolute",
      backgroundImage: `url(${CascadingFlowers})`,
      backgroundSize: "cover",
      backgroundRepeat: "repeat-y",
      top: "-47px",
      right: "0px",
      width: "100%",
      height: "100vh",
      zIndex: "2",
    },
  },
  container: {
    my: ["20px", "40px"],
  },

  navigation: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    my: "30px",
    svg: {
      width: "30px",
      height: "30px",
      // fill: "",
    },
    img: {
      width: "30px",
      height: "30px",
      svg: {
        // fill: "",
      },
    },
    sort: {
      background: " rgba( 255, 255, 255, 0.3 )",
      boxShadow: " 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
      backdropFilter: " blur(16px) saturate(100%)",
      borderRadius: "15px",
      border: " 1px solid rgba(209, 213, 219, 0.4)",
      py: "5px",
      px: "15px",
      display: "flex",
      cursor: "pointer",
      zIndex: "3",
    },

    form: {
      mx: "10px",
      position: "relative",
      width: "100%",
      maxWidth: ["480px", null, null, "520px"],
      height: ["45px", null, null, "50px", null, null, "50px"],
      input: {
        background: " rgba( 255, 255, 255, 0.3 )",
        boxShadow: " 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        backdropFilter: " blur(16px) saturate(100%)",
        borderRadius: "15px",
        border: " 1px solid rgba(209, 213, 219, 0.4)",
        position: "absolute",
        top: 0,
        left: 0,
        paddingLeft: "45px",
        width: "100%",
        height: "100%",
        color: "text",
        boxShadow: "none !important",
        outline: "none !important",
        fontSize: ["14px", "18px"],
        fontWeight: "400",
        "&::placeholder": {
          color: "red",
        },
      },
      "input::placeholder": {
        color: "red",
      },
      svg: {
        position: "absolute",
        top: "50%",
        left: "10px",
        padding: 0,
        transform: "translateY(-50%)",
        fontSize: ["16px", "22px"],
        color: "white",
        backgroundColor: "transparent",
        display: "flex",
        alignItems: "center",
        boxShadow: "none",
        zIndex: "1",
        height: "20px",
        "&:hover": {
          filter: "brightness(1.5)",
          fontSize: ["18px", "24px"],
          backgroundColor: "transparent",
        },
      },
    },
  },
  title: {
    fontSize: "x-large",
    fontWeight: "bold",
    color: "heading",
  },
  products: {
    gap: ["20px 25px", 25, 25, 30, 30, 30],
    display: "grid",
    gridTemplateColumns: ["repeat(2, 1fr)", "repeat(2, 1fr)", "repeat(4, 1fr)"],
  },
};
