/** @jsx jsx */
import { jsx, Container, Heading } from "theme-ui";
import PatternBG from "assets/images/banner-2.webp";

export default function Banner({ title = " ", accent = " " }) {
  return (
    <section sx={styles.banner}>
      <Container sx={styles.container}>
        <Heading as="h2" sx={styles.title}>
          {title}
          <span sx={styles.title.accent}> {accent}</span>
        </Heading>
      </Container>
    </section>
  );
}

const styles = {
  banner: {
    position: "relative",
    zIndex: -1,
    pb: [2, null, 0, null, 2, 0, null, 5],
    pt: ["105px", "105px", "140px", "150px", "150px", "160px"],
    backgroundColor: "#f6fdff",
    backgroundImage: `url(${PatternBG})`,
    backgroundRepeat: `no-repeat`,
    backgroundPosition: "center right",
    backgroundSize: "cover",

    "&:after": {
      content: "''",
      position: "absolute",
      top: "0; bottom: 0; left: 0; right: 0",
      background: " rgba(0,0,0,0.5)",
      pointerEvents: "none",
      zIndex: 0,
      "@media screen and (max-width:760px)": {
        display: " none",
      },
    },

    "@media screen and (max-width:760px)": {
      backgroundImage: "none",
    },
  },

  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "@media screen and (max-width:760px)": {
      display: "block",
      textAlign: "center",
    },
  },

  title: {
    zIndex: 5,
    filter: " brightness(1.3)",
    textAlign: "center",
    textShadow: [
      "-1px 0px 0px #343D48,2px 2px 0px #343D48,3px 3px 0px black",
      "-1px -1px 0px #343D48,3px 3px 0px #343D48,6px 6px 0px black",
    ],
    fontSize: ["28px", null, "28px", "30px", "36px", "42px", null, "48px"],
    color: " background",
    lineHeight: [1.3, null, null, null, 1.2],
    fontWeight: "700",
    letterSpacing: "-.5px",
    pb: 8,
    "@media screen and (max-width:760px)": {
      color: "heading",
      textShadow: "none",
    },
    accent: {
      color: "primary",
      display: "inherit",
    },
  },
};
