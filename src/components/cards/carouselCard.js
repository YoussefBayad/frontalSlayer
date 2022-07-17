/** @jsxRuntime classic */
/** @jsx jsx */
import Rating from "components/rating";
import { jsx, Box, Image, Heading, Text } from "theme-ui";

const CarouselCard = ({ item, ...props }) => {
  return (
    <Box sx={styles.imageWrapper} key={`CarouselCard--key${item.id}`}>
      <Image src={item.src} {...props} alt={item.alt} />
    </Box>
  );
};

export default CarouselCard;

const styles = {
  imageWrapper: {
    // boxShadow: "0px 0px 1px rgba(38, 78, 118, 0.35)",
    transition: "all 0.3s",
    borderRadius: "6px",
    height: "100%",
    // width: "100%",
    mx: "10px",

    "&:hover": {
      boxShadow: "0px 6px 30px rgba(38, 78, 118, 0.1)",
    },

    img: {
      height: "100%",
      width: "100%",
      objectFit: "cover",
      // boxShadow: "0px 0px 1px rgba(38, 78, 118, 0.35)",
      transition: "all 0.3s",
      borderRadius: "6px",
      mx: 0,
      p: 0,
    },
  },
};
