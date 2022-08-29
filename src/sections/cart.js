/** @jsx jsx */
import { jsx, Box, Text, Button, Heading } from "theme-ui";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
import CartProduct from "components/features/cart/product";
import CheckoutSummary from "components/features/cart/checkoutSummary";
import { Link } from "components/link";

const Cart = () => {
  let products = useSelector((state) => state.cart.data);

  // total price
  const total =
    products.length > 0 &&
    products
      .reduce((a, p) => {
        return a + p.price * p.qty;
      }, 0)
      .toFixed(2);
  // total items
  const totalItems = products.length;

  return (
    <Box sx={styles.cartPage}>
      <Heading as="h1" sx={styles.title}>
        Shopping Cart :
      </Heading>
      <Box sx={styles.cartPage.inner}>
        <Box sx={styles.cartPage.products}>
          {products.length === 0 ? (
            <>
              <Heading as="h3" sx={styles.emptyCart}>
                Your cart is empty ...
              </Heading>
              <Link sx={styles.inCart} path="/shop">
                Back To Shop
              </Link>
            </>
          ) : (
            <AnimatePresence>
              {products.map((product) => (
                <CartProduct key={product._id} product={product} />
              ))}
            </AnimatePresence>
          )}
        </Box>
        {products.length > 0 && (
          <CheckoutSummary total={total} totalItems={totalItems}>
            <Link
              path="/shipping"
              sx={styles.btn & styles.cartPage.checkoutBtn}
            >
              Proceed to Checkout
            </Link>
          </CheckoutSummary>
        )}
      </Box>
    </Box>
  );
};

export default Cart;

const styles = {
  cartPage: {
    marginTop: "3rem",
    marginBottom: "15rem",
    height: "100%",
    width: "100%",
    paddingLeft: "2rem",
    title: {
      fontSize: "$title",
      paddingBottom: "3rem",
    },
    inner: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      flexWrap: "wrap",
    },
    product: {
      height: "auto",
      width: "fit-content",
      paddingBottom: "1rem",
      borderBottom: "solid 2px border",
      "&:first-child": {
        borderTop: "solid 2px grey",
      },
      "&:last-child": {
        border: "none",
        marginBottom: "5rem",
      },
    },

    img: {
      width: "100px",
      height: "100px",
    },
    inCart: {
      padding: "2rem",
    },
    checkoutBtn: {
      display: "block",
      width: "auto",
      textAlign: "center",
      borderRadius: "0",
      margin: "0.5rem",
      marginTop: "1rem",
      borderRadius: "0.5rem",
    },
  },
};
