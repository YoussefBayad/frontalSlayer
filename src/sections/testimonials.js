/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Button } from "theme-ui";
import Slider from "react-slick";
import Testimonial from "components/cards/testimonial";
import Avatar1 from "assets/images/testimonial/avatar1.webp";
import Avatar2 from "assets/images/testimonial/avatar2.webp";
import Avatar3 from "assets/images/testimonial/avatar3.webp";
import Avatar4 from "assets/images/testimonial/avatar4.webp";
import { rgba } from "polished";
import SectionHeading from "components/section-heading";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";

const data = [
  {
    id: 1,
    title: "Most streamed artist in Arab Mena",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor.Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor.",
    avatar: Avatar1,
    name: "Elgrande Toto",
    designation: "@Elgrande.toto",
    review: 5,
  },
  {
    id: 2,
    title: "One the most streamed artist",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor.Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor.",
    avatar: Avatar2,
    name: "Tagne",
    designation: "@tagne",
    review: 5,
  },
  {
    id: 3,
    title: "One the most streamed artist",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor.Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor.",
    avatar: Avatar3,
    name: "Stormy",
    designation: "@stormythereal",
    review: 5,
  },
  {
    id: 4,
    title: "Biggest arabic album",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor.Lorem ipsum dolor sit amet consectetur adipisicing elit sed eiusmod tempor.",
    avatar: Avatar4,
    name: "inkonnu",
    designation: "@inkonnu",
    review: 5,
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
        <IoIosArrowDropleft size="32px" />
      ) : (
        <IoIosArrowDropright size="32px" />
      )}
    </Button>
  );
}
const settings = {
  arrows: true,
  dots: true,
  speed: 500,
  nextArrow: <SlickArrow control="next" />,
  prevArrow: <SlickArrow control="prev" />,
  slidesToShow: 1,
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

const Testimonials = () => {
  return (
    <Box as="section" variant="section.testimonials">
      <Container>
        {/* <SectionHeading
          sx={styles.heading}
          title="Words From Happy Clients
              "
          description="Hear from hundreds of patients who have received support and care
              "
        /> */}
        <Slider sx={styles.slider} {...settings}>
          {data.map((testimonial) => (
            <Testimonial key={testimonial.id} item={testimonial} />
          ))}
        </Slider>
      </Container>
    </Box>
  );
};

export default Testimonials;

const styles = {
  paginationButton: {
    minHeight: "30px",
    padding: 0,
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
    ".slick-list": {
      // mx: [null, null, null, null, -2, 0],
    },
    ".slick-slide": {
      // mr: [null, null, null, null, 4, 0],
    },
    ".slick-dots": {
      display: "flex !important",
      margin: 0,
      padding: 0,
      listStyle: "none",
      alignItems: "center",
      justifyContent: "center",
      marginTop: [3, null, null, 13],
      li: {
        mx: 1,
        display: "flex",
      },
      button: {
        backgroundColor: rgba("#2D3D50", 0.15),
        borderRadius: 50,
        border: 0,
        cursor: "pointer",
        padding: 0,
        overflow: "hidden",
        textIndent: "-9999em",
        width: 10,
        height: 6,
        outline: 0,
        transition: "all 0.3s ease-in-out 0s",
      },
      ".slick-active button": {
        backgroundColor: rgba("#2D3D50", 0.4),
        width: 20,
      },
    },
  },
};
