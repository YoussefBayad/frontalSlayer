/** @jsx jsx */
import { jsx, Box, Grid, Container, Image } from "theme-ui";
import SectionHeading from "components/section-heading";
import uber from "assets/images/clients/uber.png";
import google from "assets/images/clients/google.png";
import paypal from "assets/images/clients/paypal.png";
import microsoft from "assets/images/clients/microsoft.png";
import dribbble from "assets/images/clients/dribbble.png";

const data = [
  {
    id: 1,
    name: "uber",
    logo: uber,
  },
  {
    id: 2,
    name: "Google",
    logo: google,
  },
  {
    id: 3,
    name: "PayPal",
    logo: paypal,
  },
  {
    id: 4,
    name: "Microsoft",
    logo: microsoft,
  },
  {
    id: 5,
    name: "Dribbble",
    logo: dribbble,
  },
];

const Clients = () => {
  return (
    <Box id="clients" as="section" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          title="OUR PARTNERS & PRESS "
          description="This guys are using our service and they're more than happier ever."
        />

        <Grid sx={styles.grid}>
          {data?.map((client) => (
            <Image
              key={client.id}
              sx={styles.img}
              loading="lazy"
              src={client.logo}
              alt={client.name}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Clients;

const styles = {
  section: {
    pt: [0, 7, 7, 8, 8, 7, 150],
    pb: [7, 7, 7, 8, 9, 150],
  },
  img: {
    width: "60%",
    mx: "auto",
    cursor: "pointer",

    "@media screen and (max-width: 640px)": {
      width: "30%",
    },
  },
  grid: {
    position: "relative",
    width: ["100%", "80%", "100%"],
    mx: "auto",
    gridGap: ["40px 40px", "50px 40px", "50px 50px"],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(3,1fr)",
      null,
      "repeat(5,1fr)",
    ],
  },
};
