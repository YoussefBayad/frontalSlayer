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
      <Link path={`/shop/product/${product._id}`}>
        <Image
          sx={styles.cartProduct.img}
          src={
            product.imageUrl
              ? `http://localhost:5000${product.imageUrl}`
              : `/img/${product.name.replace(/\s/g, "")}.webp`
          }
          alt={product.name}
        />
      </Link>
      <Box sx={styles.cartProduct.description}>
        <Link path={`/shop/product/${product._id}`}>
          <Text as="p" sx={styles.cartProduct.description.name}>
            {product.name}
          </Text>
        </Link>
        <Text as="p" sx={styles.cartProduct.description.price}>
          ${product.price} usd
        </Text>
        <Box sx={styles.cartProduct.description.quantity}>
          <ProductQty
            id={product._id}
            qty={product.qty}
            countInStock={product.countInStock}
          />
          <RemoveProduct _id={product._id} removeFromCart={removeFromCart} />
        </Box>
      </Box>
    </motion.Box>
  );
};

export default CartProduct;

const styles = {
  cartProduct: {
    height: "25vh",
    display: "flex",
    alignItems: "flex-start",

    marginBottom: "1rem",

    img: {
      width: "15rem",
    },

    description: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      name: {
        color: "$black",
        fontSize: "$small",
        fontWeight: "bold",
        marginTop: "2rem",
      },
      price: {
        fontSize: "$smallest",
        fontWeight: "lighter",
        marginTop: "1rem",
      },
      quantity: {
        marginTop: "2rem",
        paddingRight: "1rem",

        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "$small",
      },
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
