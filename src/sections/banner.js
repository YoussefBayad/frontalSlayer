/** @jsx jsx */
import { jsx, Box, Container, Heading, Text, Button, Image } from "theme-ui";
import banner from "assets/images/banner.webp";
import BannerPattern from "assets/images/banner-pattern.webp";
import { Link } from "components/link";

const Banner = () => {
  return (
    <Box id="home" as="section" variant="section.banner">
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.content}>
            <Heading sx={styles.title}>Find the Support You Need</Heading>
            <Text as="p" sx={styles.text}>
              Impeerforyou has a variety of mental health resources,
              information, treatment options, and more — all accessible to
              Veterans, Explore the pages below to learn more about a specific
              mental health topic .
            </Text>
            <Link path="/mental-health">
              <Button variant="primary" sx={styles.button}>
                Learn More
              </Button>
            </Link>
          </Box>
          <Box sx={styles.illustration}>
            <Image src={banner} alt="banner" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;

const styles = {
  contentWrapper: {
    display: [null, null, null, "flex", "grid"],
    gridTemplateColumns: "repeat(2, 1fr)",
    alignItems: "center",
    justifyContent: "center",
    minHeight: [null, null, null, null, null, "100vh"],
    pt: [100, null, null, 120, 130, 120, 0],
  },
  content: {
    maxWidth: [507, null, null, 324, 450],
  },
  title: {
    fontWeight: "bold",
    fontSize: ["30px", null, null, "38px", , "42px", "40px", "60px"],
    lineHeight: 1.33,
    letterSpacing: "-1px",
    color: "textSecondary",
  },
  text: {
    fontSize: ["14px", "14px", "14px", "16px", "16px", "18px"],
    lineHeight: [1.85, 1.85, 1.85, 1.85, 1.85, 2.33],
    color: "textSecondary",
    mt: ["14px", "19px"],
  },
  button: {
    // display: ["none", "flex"],
    mt: [45, 45, 45, 25, 25],
  },

  illustration: {
    position: "relative",
    // display: ["block", "block"],
    mt: ["30px", "60px"],
    mb: ["60px", "60px"],
    height: ["100%", "100%", "100%", "100%", "85%", "80%", "70%"],
    width: ["100%", "100%", "100%", "50%", "100%"],
    "&:before": {
      content: '""',
      width: ["100%", "100%", "100%", "100%", "90%", "90%", "80%"],
      height: ["100%", "100%", "100%", "100%", "100%"],
      border: "2px solid #185980",
      borderRadius: "5px",
      top: "-20px",
      left: "30px",
      position: "absolute",
      zIndex: -1,
      display: ["none", null, "block"],
      "@media(max-width: 991px)": {
        left: "10px",
        top: "15px",
        height: "calc(100% - 15px)",
      },
    },
    "&:after": {
      content: '""',
      width: "250px",
      height: "315px",
      backgroundImage: `url(${BannerPattern})`,
      backgroundPosition: "center",
      top: "-40px",
      right: "20px",
      position: "absolute",
      zIndex: -1,
      "@media(max-width: 991px)": {
        right: "0px",
      },
    },

    img: {
      zIndex: 9,
      width: ["100%", "100%", "100%", "100%", "85%", "80%", "80%"],
      height: ["100%", "100%", "100%", "100%", "100%", "100%"],
      objectFit: "cover",
      borderRadius: "5px",
    },
  },
};
