/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Button, Image, Text } from "theme-ui";
import shelf from "assets/images/shelf.png";
import { Link } from "components/link";

const Shelf = ({ data }) => {
  console.log("data", data.path);
  return (
    <Container sx={styles.container}>
      <Box sx={styles.wigs}>
        {data.products.map((item) => (
          <Link path="/shop/coming" label="">
            <Box sx={styles.wigs.imgWrapper} key={item.id}>
              <Image src={item.src} alt={item.alt} />
              <Text sx={styles.wigs.imgWrapper.title}>{item.alt}</Text>
            </Box>
          </Link>
        ))}
      </Box>
      <Box sx={styles.shelfWrapper}>
        <Image sx={styles.shelfWrapper.shelf} src={shelf} />
        <Link path={data.path} label={data.title} />

        {/* <Image
            // sx={data.path == "/products/custom" ? styles.customImage : ""}
            src={data.title}
            label={data.title}
          /> */}
      </Box>
    </Container>
  );
};

export default Shelf;

const styles = {
  container: {
    width: "60%",
    p: 0,
    mb: ["20px"],
  },
  customImage: {
    height: "8px !important",
  },

  wigs: {
    display: "flex",
    mx: "auto",
    zIndex: "2",

    imgWrapper: {
      display: "grid",
      placeItems: "center",
      position: "relative",
      title: {
        position: "absolute",
        top: " 10px",
        backgroundColor: "#FF7469",
        borderRadius: "5px",
        fontSize: " 6px",
        m: "0",
        padding: " 0px 4px 0px 4px",
      },
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
      top: "50%",
      transform: "translateY(-20%)",
      color: "#FF7469",
      zIndex: "6",
      fontSize: "9px",

      textShadow:
        "  0 0 5px  #FFAD9A,0 0 10px  #FFAD9A,0 0 20px  #FFAD9A,0 0 40px #FFAD9A,0 0 80px #FFAD9A,0 0 90px #FFAD9A,0 0 100px #FFAD9A,0 0 150px #FFAD9A;",
      img: {
        height: "6px",
      },
    },
  },
};
