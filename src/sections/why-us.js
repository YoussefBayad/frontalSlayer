/** @jsx jsx */
import { jsx, Box, Container, Heading } from "theme-ui";
import SectionHeading from "components/section-heading";
import Image from "components/image";
import WhyUs1 from "assets/images/whyus1.webp";
import WhyUs2 from "assets/images/whyus2.webp";
import WhyUs3 from "assets/images/whyus3.webp";
import Accordion from "components/secondAccordion/accordion";

const data = {
  values: [
    {
      title: " ",
      contents: (
        <ul>
          <li>
            <Heading as="h4" style={{ display: "inline" }}>
              Hope : {""}
            </Heading>{" "}
            We believe in the possibility of recovery, wellness and the
            potential in all of us.
          </li>
          <li>
            <Heading as="h4" style={{ display: "inline" }}>
              Inclusion : {""}{" "}
            </Heading>{" "}
            We embrace diverse backgrounds, cultures and perspectives.
          </li>
          <li>
            <Heading as="h4" style={{ display: "inline" }}>
              Empowerment : {""}{" "}
            </Heading>{" "}
            We promote confidence, self-efficacy and service to our mission.
          </li>
          <li>
            {" "}
            <Heading as="h4" style={{ display: "inline" }}>
              Compassion : {""}{" "}
            </Heading>{" "}
            We practice respect, kindness and empathy.
          </li>
          <li>
            <Heading as="h4" style={{ display: "inline" }}>
              Fairness : {""}{" "}
            </Heading>{" "}
            We fight for equity and justice.
          </li>
        </ul>
      ),
    },
  ],
};

const WhyUs = () => {
  return (
    <Box as="section" variant="section.whyUs">
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.leftContent}>
            <Image src={WhyUs1} alt="our vision" className="image" />
          </Box>
          <Box sx={styles.rightContent}>
            <SectionHeading
              sx={styles.heading}
              title="Our Vision"
              description="Impeerforyou envisions a world where all people affected by mental illness live healthy, fulfilling lives supported by a community that cares.Impeerforyou envisions a world where all people affected by mental illness live healthy, fulfilling lives supported by a community that cares              "
            />
          </Box>
        </Box>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.rightContent}>
            <SectionHeading
              sx={styles.heading}
              title="Our Mission              "
              description="Impeerforyou provides advocacy, education, support and public awareness so that all individuals and families affected by mental illness can build better lives.    Impeerforyou provides advocacy, education, support and public awareness so that all individuals and families affected by mental illness can build better lives.             "
            />
          </Box>
          <Box sx={styles.leftContent}>
            <Image src={WhyUs2} alt="our mission" className="image" />
          </Box>
        </Box>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.leftContent}>
            <Image src={WhyUs3} alt="our values" className="image" />
          </Box>
          <Box sx={styles.rightContent}>
            <SectionHeading
              sx={styles.heading}
              title="Our Values"
              description=""
            />
            <Box sx={styles.accordionGroup}>
              <Accordion items={data.values} />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default WhyUs;

const styles = {
  contentWrapper: {
    gap: [0, 0, 0, 0, 10, 100],
    display: "grid",
    // gridTemplateColumns: "1fr 1fr",
    gridTemplateColumns: [
      "repeat(1,1fr)",
      "repeat(1,1fr)",
      "repeat(1,1fr)",
      "repeat(2,1fr)",
    ],
    alignItems: "center",
  },
  leftContent: {
    display: "grid",
    placeContent: "center",

    ".image": {
      backgroundColor: "#dceefb",
      borderRadius: "10px",
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      height: ["400px", "550px"],
      width: ["100%", "100%", "100%", "auto"],
      objectFit: "cover",
      my: ["30px", "30px", "30px", "0px"],
    },
  },
  rightContent: {
    marginLeft: "40px",
  },
  heading: {
    textAlign: "left",
    mb: ["20px"],
    mt: [0, 0, 0, 0, "-70px"],
    h2: {
      fontSize: ["24px", "24px", "24px", "28px", "32px", "40px"],
      lineHeight: [1.45, 1.5],
      letterSpacing: "-1.5px",
    },
  },
  listItem: {
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 2.81,
    display: "flex",
    alignItems: "center",
    img: {
      mr: "10px",
    },
  },
  explore: {
    mt: ["20px", "20px", "20px", "20px", "40px"],
  },
};
