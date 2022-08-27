/** @jsxRuntime classic */
/** @jsx jsx */
import {
  jsx,
  Box,
  Container,
  Button,
  Image,
  Text,
  Span,
  Heading,
} from "theme-ui";
import header from "assets/images/icons/nav.svg";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/router";
import { Link } from "./link";

const Header = () => {
  const router = useRouter();

  return (
    <Box sx={styles.header}>
      <IoIosArrowBack onClick={() => router.back()} />
      <Link path="/">
        <Heading as="h2">Frontal Slayer</Heading>
      </Link>
      <Image src={header} />
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
    svg: {
      width: "30px",
      height: "30px",
      // fill: "red",
      cursor: "pointer",
    },
    img: {
      cursor: "pointer",

      width: "30px",
      height: "30px",
      svg: {
        // fill: "red",
      },
    },
  },
};
