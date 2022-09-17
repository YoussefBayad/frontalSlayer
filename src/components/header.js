/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Image, Heading } from "theme-ui";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/router";
import { Link } from "./link";
import Navigation from "./navigationMenu/header";

const Header = () => {
  const router = useRouter();

  return (
    <Box sx={styles.header}>
      <IoIosArrowBack
        sx={styles.header.backIcon}
        onClick={() =>
          router.pathname == "/shop" ? router.push("/") : router.back()
        }
      />
      <Link path="/">
        <Heading as="h2">Frontal Slayer</Heading>
      </Link>
      <Navigation sx={styles.header.burger} />
    </Box>
  );
};

export default Header;

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    my: "30px",
    color: "text",

    h2: {
      cursor: "pointer",
    },
    backIcon: {
      width: "40px",
      height: "40px",
      cursor: "pointer",
    },
    burger: {
      cursor: "pointer",

      width: "30px",
      height: "30px",
      svg: {},
    },
  },
};
