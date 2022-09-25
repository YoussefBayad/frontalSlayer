/** @jsx jsx */
import { jsx, Box, Container, Image, Heading, Text, Button } from "theme-ui";
import blurryGradient from "assets/images/blurryGradient3.svg";
import CascadingFlowers from "assets/images/cascadingFlowersHQ.svg";
import flowersTwo from "assets/images/flowerThree.svg";

import wig from "assets/images/transparent.png";
import ShowMoreText from "react-show-more-text";
import Rating from "../components/reviews";
import { useState } from "react";
import AddToCart from "components/features/cart/addToCart";
import Header from "components/header/header";
import AddReview from "components/addReview";
import { useSelector } from "react-redux";

const Product = ({ query }) => {
  const [qty, setQty] = useState(1);

  const { data, loading, message } = useSelector((state) => state.products);
  const product = data.filter((product) => product._id == query)[0];
  console.log("product", product);

  return (
    <Box as="section" variant={"section.product"} sx={styles.section}>
      <Container sx={styles.container}>
        <Header />
        <Box sx={styles.product}>
          {product ? (
            <>
              <Image sx={styles.product.src} src={product.src} alt={"wig"} />
              <Box sx={styles.product.header}>
                <Heading as="h2">{product.name}</Heading>
                <Rating numReviews={87} rating={5} />
              </Box>
              <Box sx={styles.product.middle}>
                <Text as="h4">Wig description</Text>
                <ShowMoreText
                  /* Default options */
                  lines={4}
                  more="Show more"
                  less="Show less"
                  className="showMore"
                  anchorClass="showMoreAnchor"
                  sx={styles.showMore}
                  // onClick={this.executeOnClick}
                  expanded={false}
                  width={280}
                  truncatedEndingComponent={"... "}
                >
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque nisl eros, pulvinar facilisis justo mollis, auctor
                  consequat urna. Morbi a bibendum metus. Donec scelerisque
                  sollicitudin enim eu venenatis. Duis tincidunt laoreet ex, in
                  pretium orci vestibulum eget. Class aptent taciti sociosqu ad
                  litora torquent per conubia nostra, per inceptos himenaeos.
                  Duis pharetra luctus lacus ut vestibulum. Maecenas ipsum
                  lacus, lacinia quis posuere ut, pulvinar vitae dolor. Integer
                  eu nibh at nisi ullamcorper sagittis id vel leo. Integer
                  feugiat faucibus libero, at maximus nisl suscipit posuere.
                  Morbi nec enim nunc.{" "}
                </ShowMoreText>
              </Box>
              <Box sx={styles.product.footer}>
                <Text as="h3" sx={styles.product.footer.price}>
                  {product.price}$
                </Text>
                <Box sx={styles.product.footer.addToCart}>
                  <Box sx={styles.product.footer.productQty}>
                    <Button
                      variant="white"
                      onClick={() => setQty((prev) => prev + 1)}
                    >
                      +
                    </Button>
                    {qty}
                    <Button
                      variant="white"
                      onClick={() => qty > 1 && setQty((prev) => prev - 1)}
                    >
                      -
                    </Button>
                  </Box>

                  <AddToCart product={{ ...product, qty }} />
                </Box>
              </Box>
              <AddReview />
            </>
          ) : null}
        </Box>
      </Container>
    </Box>
  );
};

export default Product;

const styles = {
  section: {
    minHeight: "100vh",
    width: "100%",
    position: "absolute",
    top: "0",
    backgroundImage: [`url(${blurryGradient})`],
    backgroundPosition: "right",
    backgroundSize: ["cover"],
    backgroundRepeat: ["repeat"],
    "&:before": {
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
    "&:after": {
      content: '""',
      position: "absolute",
      backgroundImage: `url(${flowersTwo})`,
      // backgroundPosition: "right",
      backgroundSize: "contain",
      backgroundRepeat: "repeat",
      top: "0",
      left: "-60px",
      width: "232px",
      height: "100vh",
      zIndex: "0",
    },
  },
  showMore: {
    a: { textDecoration: "none", color: "link" },
  },

  container: {
    my: ["20px", "40px"],
  },

  product: {
    background: " rgba( 255, 255, 255, 0.3 )",
    boxShadow: " 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: " blur(16px) saturate(100%)",
    borderRadius: "15px",
    border: " 1px solid rgba(209, 213, 219, 0.4)",
    position: "relative",
    width: "90%",
    mx: "auto",
    color: "text",
    padding: ["20px", "40px"],
    zIndex: "2",
    src: {
      height: "250px",
      display: "flex",
      mx: "auto",
      mb: "15px",
    },
    p: {
      color: "text",
      fontSize: "12px",
      opacity: "0.7",
    },

    header: {
      mt: "10px",
      display: "flex",
      justifyContent: " space-between",
      alignItems: "flex-start",
    },
    middle: {
      mt: "30px",
      h4: {
        mb: "10px",
      },
    },
    footer: {
      mt: "30px",
      display: "flex",
      justifyContent: " space-between",
      alignItems: " center",
      price: {
        fontSize: "22px",
      },
      addToCart: {
        display: "flex",
        justifyContent: "center",
        alignItems: " center",
      },
      button: {
        borderRadius: "20px",
      },
      productQty: {
        padding: "0",
        border: "1px solid #ec5d55",
        borderRadius: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "18px",
        mr: 2,

        button: {
          backgroundColor: "transparent",
          color: "lightRed",
          fontSize: "25px",
          py: 0,
        },
      },
    },
  },
};
