/** @jsx jsx */
import { jsx, Box, Container, Text } from "theme-ui";
import SectionHeading from "components/section-heading";
import Feature from "components/cards/feature";
import { LearnMore } from "components/link";
import Image from "components/image";

import checkFilledCircle from "assets/images/icons/check-circle-filled.png";
import { Fragment } from "react";

const data = [
  {
    id: 4,
    color: "#28DCB2",
    value: "15%",
    title: "experience depression",
  },
  {
    id: 3,
    color: "#225cb7",
    value: "44%",
    title: "have difficulty adjusting to civilian life",
  },
  {
    id: 1,
    color: "#28D1DC",
    value: "48%",
    title: "experience strains in family life",
  },
  {
    id: 2,
    color: "#6cabd8",
    value: "& 47%",
    title: " feel sudden outbursts of anger",
  },
];

const Stats = ({ show = true }) => {
  return (
    <Box as="section" variant="section.stats">
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.leftContent}>
            {data?.map((item) => (
              <Feature key={item?.id} feature={item} />
            ))}
          </Box>
          <Box sx={styles.rightContent}>
            <SectionHeading
              sx={styles.heading}
              title={
                <Fragment>
                  2.8 million <br /> service members have deployed. After
                  deployment...
                </Fragment>
              }
              // description="Get your tests delivered at let home collect sample from the victory of the managements that supplies best design system guidelines ever."
            />

            {show && (
              <Box sx={styles.explore}>
                <LearnMore path="/mental-health" label="Learn More" />
              </Box>
            )}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Stats;

const styles = {
  contentWrapper: {
    gap: [30, 30, 30, 30, 40, 60, 70, 120],
    display: ["flex", "flex", "grid"],
    flexDirection: ["column-reverse", "column-reverse", "unset"],
    gridTemplateColumns: [
      "1.2fr 0.8fr",
      "1.2fr 0.8fr",
      "1.2fr 0.8fr",
      "1.1fr 0.9fr",
      "1.1fr 0.9fr",
      "1.1fr 0.9fr",
      "1.2fr 0.8fr",
    ],
    alignItems: "center",
  },
  leftContent: {
    gap: [20, 20, 20, 20, 30, 45],
    display: ["grid", "grid"],
    gridTemplateColumns: "repeat(2, 1fr)",
    alignItems: "flex-start",
    "> div": {
      ":first-of-type": {
        mt: ["65px"],
      },
      ":last-of-type": {
        mt: ["-65px"],
      },
    },
  },
  rightContent: {
    // ml: ['120px'],
  },
  heading: {
    textAlign: "left",
    mb: ["20px"],
    mt: [0, 0, "-70px"],
    h2: {
      fontSize: ["28px", "28px", "28px", "28px", "36px", "40px"],
      lineHeight: [1.25, 1.5],
      letterSpacing: "-1.5px",
      br: {
        display: ["none", "none", "none", "block"],
      },
    },
    p: {
      mt: ["15px", "10px"],
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
