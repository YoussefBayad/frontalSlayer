/** @jsx jsx */
import { jsx, Box, Heading, Badge, Input } from "theme-ui";

const CheckoutSummary = ({ children, total, totalItems }) => {
  return (
    <Badge variant="glass" sx={styles.checkoutSummary}>
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
      <Box sx={styles.checkoutSummary.shippingCost}>
        <p sx={styles.checkoutSummary.text}>PROMO CODE </p>
        <Input sx={styles.checkoutSummary.input} />
      </Box>
      <Box sx={styles.checkoutSummary.totalPrice}>
        <p sx={styles.checkoutSummary.text}>Total </p>
        <p sx={styles.checkoutSummary.price}>${total}</p>
      </Box>
      <Box sx={styles.checkoutSummary.checkout}>{children}</Box>
    </Badge>
  );
};

export default CheckoutSummary;

const styles = {
  checkoutSummary: {
    width: ["100%", "100%", "70%", "50%"],
    ml: ["0", "0", "20px", "30px"],
    mt: ["40px", "40px", "0", "0"],
    p: 0,
    borderRadius: "0px 0px 15px 15px",
    marginBottom: "30px",
    title: {
      fontSize: "$medium",
      margin: "0",
    },

    "& > div": {
      // display: "none",
      maxHeight: "70px",
    },
    input: {
      backgroundColor: "#fefefe33",
      borderColor: "#ffffff",
      height: "40px",
      marginLeft: "30px",
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
    checkout: {
      width: "100%",
      m: 0,
      p: 0,
      button: {
        mb: "0",
        mx: 0,
      },
    },
  },
};
