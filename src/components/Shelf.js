/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Button, Image } from "theme-ui";
import shelf from "assets/images/shelf.png";
import { Link } from "components/link";

const Shelf = ({ data }) => {
  return (
    <Container sx={styles.container}>
      <Box sx={styles.wigs}>
        {data.products.map((item) => (
          <Link path="/products/coming" label="">
            <Box sx={styles.wigs.imgWrapper} key={item.id}>
              <Image src={item.src} alt={item.alt} />
            </Box>
          </Link>
        ))}
      </Box>
      <Box sx={styles.shelfWrapper}>
        <Image sx={styles.shelfWrapper.shelf} src={shelf} />
        <Link path={data.path} label="">
          <Image src={data.title} label={data.title} />
        </Link>
      </Box>
    </Container>
  );
};

export default Shelf;

const styles = {
  container: {
    width: "70%",
    p: 0,
    mb: ["20px"],
  },

  wigs: {
    display: "flex",
    mx: "auto",
    zIndex: "2",

    imgWrapper: {
      display: "grid",
      placeItems: "center",

      img: {
        width: "50%",
        mx: "auto",
      },
    },
  },
  shelfWrapper: {
    display: "grid",
    placeItems: "center",
    position: "relative",
    top: "-6px",
    zIndex: "-1",
    shelf: {
      width: ["100%"],
      height: "20px",
      filter: "drop-shadow(0px 4px 1px #fff9b7)",
    },
    a: {
      position: "absolute",
      cursor: "pointer",
      top: ["3px"],
      color: "white",
      zIndex: "5",
      fontSize: "smaller",
      // textShadow:
      //   "  0 0 5px  #e50300,0 0 10px  #e50300,0 0 20px  #e50300,0 0 40px #e50300,0 0 80px #e50300,0 0 90px #e50300,0 0 100px #e50300,0 0 150px #e50300;",
      img: {
        height: "6px",
      },
    },
  },
};
