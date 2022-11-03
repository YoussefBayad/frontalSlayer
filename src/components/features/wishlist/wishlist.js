/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Image, Heading, Text, Badge } from "theme-ui";
import { motion } from "framer-motion";
import { removeFromWishlist } from "redux/wishlist/wishlistSlice";
import { Link } from "components/link";
import heart from "assets/images/icons/heartCircle.svg";
import { useDispatch } from "react-redux";
import HeartButton from "./heartButton";
import AddToCart from "../cart/addToCart";

const WishlistProducts = ({ product }) => {
  return (
    <motion.Box
      layout
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ x: 100, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Badge variant="glass" sx={styles.wishlistProducts}>
        <Box sx={styles.wishlistProducts.leftSide}>
          <Link path={`/product/${product._id}`}>
            <Image
              sx={styles.wishlistProducts.leftSide.img}
              src={product.src}
              alt={product.name}
            />
          </Link>
          <Box sx={styles.wishlistProducts.leftSide.description}>
            <Link path={`/product/${product._id}`}>
              <Text
                as="p"
                sx={styles.wishlistProducts.leftSide.description.name}
              >
                {product.name}
              </Text>
              <Text
                sx={styles.wishlistProducts.leftSide.description.description}
                as="p"
              >
                Wig description
              </Text>
              <Text
                as="p"
                sx={styles.wishlistProducts.leftSide.description.description}
              >
                wig size : L
              </Text>
            </Link>
            <Text
              as="p"
              sx={styles.wishlistProducts.leftSide.description.price}
            >
              ${product.price} usd
            </Text>
          </Box>
        </Box>
        <Box sx={styles.wishlistProducts.rightSide}>
          <HeartButton product={product} />
          {/* <AddToCart product={{ ...product }} /> */}
        </Box>
      </Badge>
    </motion.Box>
  );
};

export default WishlistProducts;

const styles = {
  wishlistProducts: {
    maxWidth: "600px",
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    mb: ["20px", "25px"],
    backdropFilter: "blur(5px)",
    border: "1px solid black",
    color: "dark",
    p: "10px",

    borderRadius: "0",
    leftSide: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      img: {
        height: "100px",
        objectFit: "contain",
        mr: "15px",
      },
      description: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "90px",
        name: {
          fontWeight: "bold",
          fontSize: "18px",
        },
        description: {
          color: "dark",
          fontSize: "12px",
          // opacity: "0.7",
        },

        price: {
          color: "dark",

          fontWeight: "lighter",
          fontSize: "18px",
        },
      },
    },

    rightSide: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "90px",
      img: {
        height: "50px",
        cursor: "pointer",
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
