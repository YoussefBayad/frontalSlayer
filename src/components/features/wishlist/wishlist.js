/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Image, Heading, Text, Badge } from "theme-ui";
import { motion } from "framer-motion";
import { removeFromCart } from "redux/cart/cartSlice";
import ProductQty from "./productQty";
import RemoveProduct from "./removeProduct";
import { Link } from "components/link";
import AddToCart from "components/addToCart";

const CartProduct = ({ product }) => {
  return (
    <motion.Box
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ x: 100, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Badge variant="glass" sx={styles.cartProduct}>
        <Box sx={styles.cartProduct.leftSide}>
          <Link path={`/shop/product/${product._id}`}>
            <Image
              sx={styles.cartProduct.img}
              // src={
              //   product.imageUrl
              //     ? `http://localhost:5000${product.imageUrl}`
              //     : `/img/${product.name.replace(/\s/g, "")}.webp`
              // }
              src={product.imageUrl}
              alt={product.name}
            />
          </Link>
          <Box sx={styles.cartProduct.leftSide.description}>
            <Link path={`/shop/product/${product._id}`}>
              <Text as="p" sx={styles.cartProduct.leftSide.description.name}>
                {product.name}
              </Text>
            </Link>
            <Text as="p" sx={styles.cartProduct.leftSide.description.price}>
              ${product.price} usd
            </Text>
          </Box>
        </Box>
        <Box sx={styles.cartProduct.rightSide}>
          <RemoveProduct _id={product._id} removeFromCart={removeFromCart} />
          <AddToCart />
        </Box>
      </Badge>
    </motion.Box>
  );
};

export default CartProduct;

const styles = {
  cartProduct: {
    maxWidth: "600px",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    mb: ["20px", "25px"],

    color: "text",
    p: "10px",

    leftSide: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      description: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "90px",
        name: {
          fontWeight: "bold",
        },
        price: {
          fontWeight: "lighter",
        },
      },
    },

    rightSide: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      alignItems: "center",
      minHeight: "90px",
    },
    count: {
      padding: "0.1rem 1rem",
      border: "1px solid black",
      width: "9rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      fontSize: "1",

      button: {
        border: "none",
        outline: "none",
        backgroundColor: "transparent",
        cursor: "pointer",
        fontSize: "1",
        marginTop: "0.5rem",
        " &:last-child": {
          fontSize: "$medium",
          padding: "0",
          margin: "0",
        },
      },
    },
  },
};
