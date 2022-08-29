/** @jsx jsx */
import { jsx, Box, Heading } from "theme-ui";

const CheckoutSummary = ({ children, total, totalItems }) => {
  return (
    <Box sx={styles.checkoutSummary}>
      <Heading as="h1" sx={styles.checkoutSummary.title}>
        ORDER SUMMARY{" "}
      </Heading>
      <Box sx={styles.checkoutSummary.totalItems}>
        <p sx={styles.checkoutSummary.text}>Total items </p>
        <p sx={styles.checkoutSummary.price}>{totalItems}</p>
      </Box>
      <Box sx={styles.checkoutSummary.shippingCost}>
        <p sx={styles.checkoutSummary.text}>Shipping </p>
        <p sx={styles.checkoutSummary.price}>$00.00</p>
      </Box>
      <Box sx={styles.checkoutSummary.totalPrice}>
        <p sx={styles.checkoutSummary.text}>Total </p>
        <p sx={styles.checkoutSummary.price}>${total}</p>
      </Box>
      {children}
    </Box>
  );
};

export default CheckoutSummary;

const styles = {
  checkoutSummary: {
    border: "solid 3px grey",
    borderRadius: "0.5rem",

    title: {
      fontSize: "$medium",
      margin: "0",
    },

    totalPrice: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "1.5rem",
      width: "100%",
      borderBottom: "solid 2px grey",
    },
    title: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "1.5rem",
      width: "100%",
      borderBottom: "solid 2px grey",
    },

    shippingCost: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "1.5rem",
      width: "100%",
      borderBottom: "solid 2px grey",
    },
    totalItems: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "1.5rem",
      width: "100%",
      borderBottom: "solid 2px grey",
    },
  },
};
