/** @jsx jsx */
import { jsx, Box, Text, Button, Heading, Container } from "theme-ui";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";
import Product from "components/features/wishlist/wishlist";
import { Link } from "components/link";
import Header from "components/header/header";

const Wishlist = () => {
  let products = useSelector((state) => state.wishlist.data);

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
    <Box as="section" variant={"section.wishlist"} sx={styles.section}>
      <Container sx={styles.container}>
        <Header />
        <Box sx={styles.wishlistPage}>
          <Heading as="h1" sx={styles.wishlistPage.title}>
            Your Wishlist :
          </Heading>
          <Box sx={styles.wishlistPage.inner}>
            <Box sx={styles.wishlistPage.products}>
              {products.length === 0 ? (
                <>
                  <Heading as="h3" sx={styles.emptyWishlist}>
                    Your Wishlist is empty ...
                  </Heading>
                  <Link sx={styles.inWishlist} path="/shop">
                    Back To Shop
                  </Link>
                </>
              ) : (
                <AnimatePresence>
                  {products.map((product) => (
                    <Product key={product._id} product={product} />
                  ))}
                </AnimatePresence>
              )}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Wishlist;

const styles = {
  wishlistPage: {
    marginTop: "3rem",
    marginBottom: "15rem",
    title: {
      paddingBottom: "3rem",
    },
    inner: {
      display: "flex",
      flexDirection: ["column", "column", "row"],
      alignItems: ["center", "center", "flex-start"],
      justifyContent: ["space-between"],
    },
    products: {
      width: "100%",
    },

    img: {
      width: "100px",
      height: "100px",
    },
    inWishlist: {
      padding: "2rem",
    },
  },
};
