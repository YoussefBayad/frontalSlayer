/** @jsx jsx */
import { jsx, Box, Container, Image, Heading, Text } from "theme-ui";
import wig from "assets/images/transparent.png";
import heart from "assets/images/icons/heartCircle.svg";
import { Link } from "components/link";

const Product = () => {
  return (
    <Container sx={styles.product}>
      <Image src={wig} alt={"wig"} />
      <Heading as="h4">LACE WIG</Heading>
      <Text as="p">Wig description</Text>
      <Box sx={styles.product.footer}>
        <Text as="h4" sx={styles.product.footer.price}>
          11.99$
        </Text>

        <Image
          src={heart}
          sx={styles.product.footer.wishlist}
          alt="add to wishlist"
        />
      </Box>
    </Container>
  );
};

export default Product;

const styles = {
  product: {
    minHeight: "150px",
    width: "100%",
    background: " rgba( 255, 255, 255, 0.3 )",
    boxShadow: " 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: " blur(16px) saturate(100%)",
    borderRadius: "15px",
    border: " 1px solid rgba(209, 213, 219, 0.4)",
    color: "text",
    p: "20px",
    py: "10px",

    p: {
      color: "text",
      fontSize: "12px",
      opacity: "0.7",
    },

    footer: {
      mt: "10px",
      display: "flex",
      justifyContent: " space-between",
      alignItems: " center",
      price: {},
      wishlist: {
        width: "30px",
        filter: " drop-shadow(3px 5px 2px rgb(0 0 0 / 0.2))",
      },
    },
  },
};