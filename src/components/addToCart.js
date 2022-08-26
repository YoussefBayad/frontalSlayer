/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Button, Image, Text, Span } from "theme-ui";
import { useDispatch, useSelector } from "react-redux";
// import { openCart, addToCart } from '../../../redux/cart/cartSlice';
import { Link } from "./link";

const AddToCart = ({ product }) => {
  // const dispatch = useDispatch();
  // const isProductInCart = useSelector((state) =>
  //   state.cart.data.find((item) => item._id === product._id)
  // );
  return (
    <>
      {/* {!isProductInCart ? ( */}
      <Button
        variant="primary"
        // onClick={() => {
        //   dispatch(addToCart(product));
        //   dispatch(openCart());
        // }}
      >
        Add To Cart
      </Button>
      {/* ) : (
        <div className='product-in-cart'>
          <Link className='buy-button' to='/cart'>
            Go To Cart
          </Link>
        </div>
      )} */}
    </>
  );
};

export default AddToCart;

const styles = {
  rating: {
    span: {
      fontSize: "$medium",
    },
    p: {
      marginLeft: "1rem",
    },
  },
};
