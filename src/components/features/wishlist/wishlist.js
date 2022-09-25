/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Image, Heading, Text, Badge } from "theme-ui";
import { motion } from "framer-motion";
import { removeFromWishlist } from "redux/wishlist/wishlistSlice";
import { Link } from "components/link";
import heart from "assets/images/icons/heartCircle.svg";
import { useDispatch } from "react-redux";

const WishlistProducts = ({ product }) => {
  const dispatch = useDispatch();

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
          <Image
            src={heart}
            alt="add to wishlist"
            onClick={() => dispatch(removeFromWishlist(product._id))}
          />
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

    color: "text",
    p: "10px",

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
        price: {
          fontWeight: "lighter",
          fontSize: "18px",
        },
      },
    },

    rightSide: {
      display: "flex",
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
