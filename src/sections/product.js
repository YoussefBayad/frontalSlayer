/** @jsx jsx */
import { jsx, Box, Container, Image, Heading, Text, Button } from "theme-ui";
import blurryGradient from "assets/images/blurryGradient3.svg";
import wig from "assets/images/transparent.png";
import { IoIosArrowBack } from "react-icons/io";
import header from "assets/images/icons/nav.svg";
import ShowMoreText from "react-show-more-text";
import Rating from "../components/reviews";
import { useState } from "react";
import AddToCart from "components/addToCart";

const Product = () => {
  const [qty, setQty] = useState(1);

  return (
    <Box as="section" variant={"section.product"} sx={styles.section}>
      <Container sx={styles.container}>
        <Box sx={styles.header}>
          <IoIosArrowBack />
          <Heading as="h2">Frontal Slayer</Heading>
          <Image src={header} />
        </Box>
        <Box sx={styles.product}>
          <Image src={wig} alt={"wig"} />
          <Box sx={styles.product.header}>
            <Heading as="h2">LACE WIG</Heading>
            <Rating numReviews={87} rating={5} />
          </Box>
          <Box sx={styles.product.middle}>
            <Text as="h4">Wig description</Text>
            <ShowMoreText
              /* Default options */
              lines={4}
              more="Show more"
              less="Show less"
              className="content-css"
              anchorClass="my-anchor-css-class"
              // onClick={this.executeOnClick}
              expanded={false}
              width={280}
              truncatedEndingComponent={"... "}
            >
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
              Morbi a bibendum metus. Donec scelerisque sollicitudin enim eu
              venenatis. Duis tincidunt laoreet ex, in pretium orci vestibulum
              eget. Class aptent taciti sociosqu ad litora torquent per conubia
              nostra, per inceptos himenaeos. Duis pharetra luctus lacus ut
              vestibulum. Maecenas ipsum lacus, lacinia quis posuere ut,
              pulvinar vitae dolor. Integer eu nibh at nisi ullamcorper sagittis
              id vel leo. Integer feugiat faucibus libero, at maximus nisl
              suscipit posuere. Morbi nec enim nunc.{" "}
            </ShowMoreText>
          </Box>
          <Box sx={styles.product.footer}>
            <Text as="h3" sx={styles.product.footer.price}>
              11.99$
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

              <AddToCart
              // product={{ ...product, qty }}
              />
            </Box>
          </Box>
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
    // backgroundColor: "background",
    backgroundImage: [`url(${blurryGradient})`],
    backgroundPosition: "right",
    backgroundSize: ["cover"],
    backgroundRepeat: ["repeat"],
  },
  container: {
    my: ["20px", "40px"],
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    my: "30px",
    color: "text",

    svg: {
      width: "30px",
      height: "30px",
      // fill: "red",
    },
    img: {
      width: "30px",
      height: "30px",
      svg: {
        // fill: "red",
      },
    },
  },
  product: {
    background: " rgba( 255, 255, 255, 0.3 )",
    boxShadow: " 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: " blur(16px) saturate(100%)",
    borderRadius: "15px",
    border: " 1px solid rgba(209, 213, 219, 0.4)",
    width: "100%",
    color: "text",
    padding: ["25px", "40px"],
    p: {
      color: "text",
      fontSize: "12px",
      opacity: "0.7",
    },

    header: {
      mt: "10px",
      display: "flex",
      justifyContent: " space-between",
      alignItems: " center",
    },
    middle: {
      mt: "20px",
    },
    footer: {
      mt: "20px",
      display: "flex",
      justifyContent: " space-between",
      alignItems: " center",
      price: {},
      addToCart: {
        display: "flex",
        justifyContent: "center",
        alignItems: " center",
      },
      productQty: {
        padding: "0.3rem 1rem",
        border: "1px solid $black",
        width: "9rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: '"12px"',
      },
    },
  },
};
