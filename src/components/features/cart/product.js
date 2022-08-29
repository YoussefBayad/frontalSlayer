/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Image, Heading, Text } from "theme-ui";
import React from "react";
import { motion } from "framer-motion";
import { removeFromCart } from "redux/cart/cartSlice";
import ProductQty from "./ProductQty";
import RemoveProduct from "./RemoveProduct";
import { Link } from "components/link";

const CartProduct = ({ product }) => {
  return (
    <motion.Box
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ x: 100, opacity: 0 }}
      transition={{ duration: 0.5 }}
      sx={styles.cartProduct}
    >
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
        <ProductQty
          id={product._id}
          qty={product.qty}
          countInStock={product.countInStock}
        />
      </Box>
    </motion.Box>
  );
};

export default CartProduct;

const styles = {
  cartProduct: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    mb: ["25px", "35px"],
    background: " rgba( 255, 255, 255, 0.3 )",
    boxShadow: " 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: " blur(16px) saturate(100%)",
    borderRadius: "15px",
    border: " 1px solid rgba(209, 213, 219, 0.4)",
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
          // fontSize: "$small",
          fontWeight: "bold",
        },
        price: {
          // fontSize: "$smallest",
          fontWeight: "lighter",
        },
      },
    },

    rightSide: {
      // marginTop: "2rem",
      // paddingRight: "1rem",
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
