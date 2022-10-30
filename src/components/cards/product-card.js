/** @jsx jsx */
import { jsx, Box, Container, Image, Heading, Text } from "theme-ui";
import { Link } from "components/link";
import HeartButton from "components/features/wishlist/heartButton";
import marble from "assets/images/marble.jpg";

const Product = ({ product }) => {
  return (
    <Container sx={styles.product}>
      <Link style={{ cursor: "pointer" }} path={`/product/${product._id}`}>
        <Image sx={styles.product.wigImg} src={product.src} alt={"wig"} />
        <Heading as="h4">{product.name} </Heading>
        <Text as="p">Wig description</Text>
      </Link>
      <Box sx={styles.product.footer}>
        <Text as="h4" sx={styles.product.footer.price}>
          $ {product.price}
        </Text>

        {/* <Image
          src={heart}
          sx={styles.product.footer.wishlist}
          alt="add to wishlist"
          onClick={() => dispatch(addToWishlist(product))}
        /> */}
        <HeartButton product={product} />
      </Box>
    </Container>
  );
};

export default Product;

const styles = {
  product: {
    minHeight: "150px",
    width: "100%",
    // background: " rgba( 255, 255, 255, 0.3 )",
    boxShadow: " 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: " blur(4px) saturate(100%)",
    borderRadius: " 15px 15px  0 0",
    border: " 1px solid black",
    backgroundImage: `url(${marble})`,
    backgroundSize: "cover",
    backgroundRepeat: "repeat-y",
    color: "dark",
    p: "20px",
    py: "10px",
    wigImg: {
      height: "145px",
      objectFit: "contain",
      display: "flex",
      mx: "auto",
      marginBottom: "15px",
    },
    p: {
      color: "link",
      fontSize: "12px",
      // opacity: "0.7",
    },
    h4: {
      opacity: "0.9",
    },

    footer: {
      mt: "10px",
      display: "flex",
      justifyContent: " space-between",
      alignItems: " center",
      price: {},
      zIndex: "30",

      // wishlist: {
      //   width: "30px",
      //   filter: " drop-shadow(3px 5px 2px rgb(31 38 135 / 28%))",
      //   cursor: "pointer",
      //   zIndex: "30",
      // },
    },
  },
};
