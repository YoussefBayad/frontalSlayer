/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Button } from "theme-ui";
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
      <Button onClick={incrementQty}>+</Button>
      {qty}
      <Button onClick={() => dispatch(decrement(id))}>-</Button>
    </Box>
  );
};

export default ProductQty;

const styles = {
  productQty: {
    padding: "0.3rem 1rem",
    border: "1px solid $black",
    width: "9rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    button: {
      border: "none",
      outline: "none",
      backgroundColor: "transparent",
      cursor: "pointer",
      marginTop: "0.5rem",

      "&:last-child": {
        fontSize: "3",
        padding: "0",
        margin: "0",
      },
    },
  },
};
