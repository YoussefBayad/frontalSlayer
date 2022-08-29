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
    background: " rgba( 255, 255, 255, 0.3 )",
    boxShadow: " 0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
    backdropFilter: " blur(16px) saturate(100%)",
    borderRadius: "15px",
    border: " 1px solid rgba(209, 213, 219, 0.4)",
    width: "100%",
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
      borderBottom: "solid 2px rgba( 255, 255, 255, 0.3 )",
    },
    title: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "1.5rem",
      width: "100%",
      borderBottom: "solid 2px rgba( 255, 255, 255, 0.3 )",
    },

    shippingCost: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "1.5rem",
      width: "100%",
      borderBottom: "solid 2px rgba( 255, 255, 255, 0.3 )",
    },
    totalItems: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "1.5rem",
      width: "100%",
      borderBottom: "solid 2px rgba( 255, 255, 255, 0.3 )",
    },
  },
};
