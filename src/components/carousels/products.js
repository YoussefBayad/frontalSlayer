/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Button, Image } from "theme-ui";
import Slider from "react-slick";
import CarouselCard from "components/cards/carouselCard";
import Wig from "assets/images/wig.png";
import Shelf from "assets/images/shelf.svg";

import { rgba } from "polished";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import { Link } from "components/link";

const data = [
  {
    src: Wig,
    alt: "wig",
  },
  {
    src: Wig,
    alt: "wig",
  },
  {
    src: Wig,
    alt: "wig",
  },
  {
    src: Wig,
    alt: "wig",
  },
  {
    src: Wig,
    alt: "wig",
  },
  {
    src: Wig,
    alt: "wig",
  },
];

function SlickArrow({ className, onClick, control }) {
  return (
    <Button
      variant="text"
      onClick={onClick}
      className={className}
      sx={styles.paginationButton}
    >
      {control === "prev" ? (
        <IoIosArrowDropleft size="32px" fill="#ffc0c0" />
      ) : (
        <IoIosArrowDropright size="32px" fill="#ffc0c0" />
      )}
    </Button>
  );
}
const settings = {
  arrows: true,
  //   dots: true,
  speed: 500,
  //   pauseOnFocus: true,
  //   autoplay: true,
  //   autoplaySpeed: 2000,
  nextArrow: <SlickArrow control="next" />,
  prevArrow: <SlickArrow control="prev" />,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Carousel = () => {
  return (
    <Container sx={styles.container}>
      <Box sx={styles.contentWrapper}>
        <Slider sx={styles.slider} {...settings}>
          {data.map((item) => (
            <CarouselCard key={item.id} item={item} />
          ))}
        </Slider>
        <Box sx={styles.shelfWrapper}>
          <Image sx={styles.shelfWrapper.shelf} src={Shelf} />
          <Link path="/products/hd-lace" label="HD Lace" />
        </Box>
      </Box>
    </Container>
  );
};

export default Carousel;

const styles = {
  container: {
    display: "flex",
  },
  contentWrapper: {
    mx: "auto",
    height: "200px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  paginationButton: {
    minHeight: "30px",
    padding: 0,
    mx: "-5px",
    position: "absolute",
    top: "calc(50% - 16px)",
    transform: "translateX(-50%)",
    ":focus": {
      outline: "0 none",
    },
    svg: {
      transition: "all 0.2s ease-in-out 0s",
    },
    "&.slick-disabled": {
      color: "#BBC7D7",
      svg: {
        transform: "scale(0.8)",
      },
    },
    "&.slick-prev": {
      left: 0,
      transform: "translateX(0%)",
      left: "calc(0% - 32px)",
    },
    "&.slick-next": {
      transform: "translateX(0%)",
      right: "calc(0% - 32px)",
      // right: 0,
    },
  },
  slider: {
    width: ["100%", "30%"],
    // height: "250px",
    mx: "auto",
    ".slick-list": {
      // mx: [null, null, null, null, -2, 0],
    },
    ".slick-slide": {
      // mr: [null, null, null, null, 4, 0],
    },
  },
  shelfWrapper: {
    display: "grid",
    placeItems: "center",
    position: "relative",
    shelf: {
      maxWidth: "35%",
    },
    a: {
      position: "absolute",
      top: "15px",
      color: "white",
      zIndex: "5",
      textShadow:
        "  0 0 5px  #e50300,0 0 10px  #e50300,0 0 20px  #e50300,0 0 40px #e50300,0 0 80px #e50300,0 0 90px #e50300,0 0 100px #e50300,0 0 150px #e50300;",
    },
  },
};
