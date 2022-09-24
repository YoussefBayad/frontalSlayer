/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Button, Image, Text, Span } from "theme-ui";
import { useDispatch, useSelector } from "react-redux";
import { openCart, addToCart } from "../../../redux/cart/cartSlice";
import { Link } from "components/link";

const AddToCart = ({ product }) => {
  const dispatch = useDispatch();
  const isProductInCart = useSelector((state) =>
    state.cart.data.find((item) => item._id === product._id)
  );

  return (
    <>
      {!isProductInCart ? (
        <Button
          variant="primary"
          sx={styles.addToCart}
          onClick={() => {
            dispatch(addToCart(product));
            dispatch(openCart());
          }}
        >
          Add To Cart
        </Button>
      ) : (
        <Box sx={styles.productInCart}>
          <Link sx={styles.buyButton} path="/cart">
            <Button variant="glass">Go To Cart</Button>
          </Link>
        </Box>
      )}
    </>
  );
};

export default AddToCart;

const styles = {
  addToCart: {
    px: "11px",
    boxShadow: "0 4px 7px 0 rgb(31 38 135 / 28%)",
    fontSize: ["14px", "16px", "18px"],
  },
};
