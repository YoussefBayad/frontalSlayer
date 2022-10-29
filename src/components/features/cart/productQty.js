/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Button, Text } from "theme-ui";
import { useDispatch } from "react-redux";
import { decrement, increment } from "redux/cart/cartSlice";

const ProductQty = ({ id, qty, countInStock }) => {
  const dispatch = useDispatch();

  // incremet product qty but not more than count in stock
  const incrementQty = () => {
    if (qty === countInStock) return;
    dispatch(increment(id));
  };

  return (
    <Box sx={styles.productQty}>
      <Button
        variant="white"
        sx={styles.productQty.plus}
        onClick={incrementQty}
      >
        +
      </Button>
      <Text as="p">{qty}</Text>
      <Button
        variant="white"
        sx={styles.productQty.minus}
        onClick={() => dispatch(decrement(id))}
      >
        -
      </Button>
    </Box>
  );
};

export default ProductQty;

const styles = {
  // productQty: {
  //   padding: "0.3rem 1rem",
  //   border: "1px solid $black",
  //   width: "9rem",
  //   display: "flex",
  //   justifyContent: "space-between",
  //   alignItems: "center",

  //   button: {
  //     border: "none",
  //     outline: "none",
  //     backgroundColor: "transparent",
  //     cursor: "pointer",
  //     marginTop: "0.5rem",

  //     "&:last-child": {
  //       fontSize: "3",
  //       padding: "0",
  //       margin: "0",
  //     },
  //   },
  // },
  productQty: {
    padding: "0",
    border: "1px solid #ec5d55",
    // borderRadius: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "12px",
    mr: 2,
    p: { width: "30px", display: "grid", placeItems: "center" },
    button: {
      backgroundColor: "transparent",
      color: "lightRed",
      fontSize: "20px",
      py: 0,
      width: "30px",
    },
    plus: {
      borderRight: "1px solid #ec5d55",
      borderRadius: 0,
      // mr: "5px",
    },
    minus: {
      borderLeft: "1px solid #ec5d55",
      borderRadius: 0,
      // ml: "5px",
    },
  },
};
