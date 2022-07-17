/** @jsx jsx */
import { jsx, Image, Box } from "theme-ui";
import { Link } from "components/link";
import logo from "assets/images/logo.png";

export default function Logo({ ...props }) {
  return (
    <Box sx={styles.logo}>
      <Link
        path="/"
        sx={{
          variant: "links.logo",
        }}
        {...props}
      >
        <Image src={logo} alt="logo" />
      </Link>
    </Box>
  );
}

const styles = {
  logo: {
    cursor: "pointer",
    position: "absolute",
    top: "-130px",
    left: "50%",
    zIndex: "2",
    transform: "translateX(-50%)",
    // display: "flex",
    // justifyContent: "center",
    backgroundColor: "rgba(144,14,12,1)",
    img: {
      height: ["25vh", "30vh"],
      objectFit: "contain",
    },
  },
};
