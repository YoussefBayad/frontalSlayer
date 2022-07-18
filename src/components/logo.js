/** @jsx jsx */
import { jsx, Image, Box } from "theme-ui";
import { Link } from "components/link";
import logo from "assets/images/logo.svg";
import { keyframes } from "@emotion/core";

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
const neon = keyframes`
  from {
    filter: drop-shadow(0px 0px 1px #fff)
    drop-shadow(0px 0px 3px #e50300)
    drop-shadow(0px 0px 10px #ff5b59)
    drop-shadow(0px 0px 30px #fc0906)
    drop-shadow(0px 0px 50px #e50300);
  }

  to {
    filter: drop-shadow(0px 0px 3px #fff)
    drop-shadow(0px 0px 6px #e50300)
    drop-shadow(0px 0px 15px #ff5b59)
    drop-shadow(0px 0px 40px #fc0906)
    drop-shadow(0px 0px 60px #e50300); 
  }
`;

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
    // backgroundColor: "rgba(144,14,12,1)",
    img: {
      height: ["25vh", "25vh"],
      objectFit: "contain",
      stroke: "#fff",
      animationName: `${neon} `,
      animationDuration: " 0.8s",
      animationIterationCount: "infinite",
      animationDirection: " alternate",
    },
  },
};
